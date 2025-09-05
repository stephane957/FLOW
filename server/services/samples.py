# Description: This file contains the service functions for creating, reading, updating and deleting samples in the database.
import base64
from uuid import UUID
from typing import Type, Optional, List
from sqlalchemy.orm import Session

from database.models import models
from database.schemas import samples
from database.models import enums as db_enum
from utils.translation import convert_enum_to_text, convert_text_to_enum

# CREATE --------------------------------------------------------------
# Create a new entry
def create_sample(db: Session, sample: samples.SampleCreate):

    sample_data = sample.dict(exclude={'macros', 'mesos', 'micros'})
    for field, value in sample_data.items():
        if field in db_enum.sample_enum_mappings:
            sample_data[field] = convert_enum_to_text(db_enum.sample_enum_mappings, field, value)
    
    db_sample = models.Samples(**sample_data)
    db.add(db_sample)
    db.commit()
    db.refresh(db_sample)
    
    for macro_data in sample.macros:
        create_macro_for_sample(db, macro_data, db_sample.id)
    
    for meso_data in sample.mesos:
        create_meso_for_sample(db, meso_data, db_sample.id)

    for micro_data in sample.micros:
        create_micro_for_sample(db, micro_data, db_sample.id)

    db.commit()

    return db_sample.id

def create_macro_for_sample(db: Session, macro_data: samples.MacroCreate, sample_id: UUID):
    db_macro = models.Macro(
        samples_id=sample_id,
        object_row=macro_data.object_row,
        amount=macro_data.amount,
        comment=macro_data.comment
    )

    db.add(db_macro)
    db.commit()
    db.refresh(db_macro)

    return db_macro.id

def create_meso_for_sample(db: Session, meso_data: samples.MesoCreate, sample_id: UUID):
    total_amount = sum([
        meso_data.quadra_1 or 0, 
        meso_data.quadra_2 or 0, 
        meso_data.quadra_3 or 0, 
        meso_data.quadra_4 or 0
    ])
    
    db_meso = models.Meso(
        samples_id=sample_id,
        category=db_enum.MesoCategory.to_string(meso_data.category),
        type=db_enum.MesoType.to_string(meso_data.type),
        color=db_enum.MesoMicroColor.to_string(meso_data.color),
        texture=None if meso_data.category == db_enum.MesoCategory.EXPANDED_POLYSTYRENE else db_enum.MesoMicroTexture.to_string(meso_data.texture),
        quadra_1=meso_data.quadra_1,
        quadra_2=meso_data.quadra_2,
        quadra_3=meso_data.quadra_3,
        quadra_4=meso_data.quadra_4,
        total_amount=total_amount,
        comment=meso_data.comment
    )

    db.add(db_meso)
    db.commit()
    db.refresh(db_meso)

    return db_meso.id

def create_micro_for_sample(db: Session, micro_data: samples.MicroCreate, sample_id: UUID):
    total_amount = sum([
        micro_data.quadra_1 or 0, 
        micro_data.quadra_2 or 0, 
        micro_data.quadra_3 or 0, 
        micro_data.quadra_4 or 0
    ])
    
    db_micro = models.Micro(
        samples_id=sample_id,
        category=db_enum.MicroCategory.to_string(micro_data.category),
        type=db_enum.MicroType.to_string(micro_data.type),
        color=db_enum.MesoMicroColor.to_string(micro_data.color),
        texture=None if micro_data.category == db_enum.MicroCategory.EXPANDED_POLYSTYRENE else db_enum.MesoMicroTexture.to_string(micro_data.texture),
        quadra_1=micro_data.quadra_1,
        quadra_2=micro_data.quadra_2,
        quadra_3=micro_data.quadra_3,
        quadra_4=micro_data.quadra_4,
        total_amount=total_amount,
        comment=micro_data.comment
    )

    db.add(db_micro)
    db.commit()
    db.refresh(db_micro)

    return db_micro.id

# READ--------------------------------------------------------------
def read_all_samples(db: Session) -> List[samples.SampleUpdate]:
    db_samples = db.query(models.Samples).all()
    return [read_sample(db, db_sample.id) for db_sample in db_samples]

def read_samples_by_id_range(db: Session, start_id: UUID, end_id: UUID) -> List[samples.SampleUpdate]:
    db_samples = db.query(models.Samples).filter(models.Samples.id >= start_id, models.Samples.id <= end_id).all()
    return [read_sample(db, db_sample.id) for db_sample in db_samples]

def read_sample(db: Session, sample_id: UUID) -> Optional[samples.SampleUpdate]:
    db_sample = get_sample_data(db, sample_id)
    
    if db_sample is None:
        return None
    
    sample_data = db_sample.__dict__.copy()

    sample_data.pop("_sa_instance_state", None)
    related_entities = ['macros', 'mesos', 'micros']
    for entity in related_entities:
        sample_data.pop(entity, None)

    for field, value in sample_data.items():
        if field in db_enum.sample_enum_mappings:
            sample_data[field] = convert_text_to_enum(db_enum.sample_enum_mappings, field, value)

    if db_sample.image:
        sample_data['image'] = base64.b64encode(db_sample.image).decode('utf-8')
    else:
        sample_data['image'] = None

    macros_data = [read_macro(db_macro) for db_macro in db_sample.macros]
    mesos_data = [read_meso(db_meso) for db_meso in db_sample.mesos]
    micros_data = [read_micro(db_micro) for db_micro in db_sample.micros]

    sample_update = samples.SampleUpdate(**sample_data, macros=macros_data, mesos=mesos_data, micros=micros_data)

    return sample_update

def read_all_macros(db: Session) -> List[samples.MacroCreate]:
    db_macros = db.query(models.Macro).all()
    return [read_macro(db_macro) for db_macro in db_macros]

def read_all_mesos(db: Session) -> List[samples.MesoCreate]:
    db_mesos = db.query(models.Meso).all()
    return [read_meso(db_meso) for db_meso in db_mesos]

def read_all_micros(db: Session) -> List[samples.MicroCreate]:
    db_micros = db.query(models.Micro).all()
    return [read_micro(db_micro) for db_micro in db_micros]

def read_macro_by_id(db: Session, macro_id: UUID):
    db_macro = db.query(models.Macro).filter(models.Macro.id == macro_id).first()
    if db_macro is None:
        return None
    return read_macro(db_macro)

def read_meso_by_id(db: Session, meso_id: UUID):
    db_meso = db.query(models.Meso).filter(models.Meso.id == meso_id).first()
    if db_meso is None:
        return None
    return read_meso(db_meso)

def read_micro_by_id(db: Session, micro_id: UUID):
    db_micro = db.query(models.Micro).filter(models.Micro.id == micro_id).first()
    if db_micro is None:
        return None
    return read_micro(db_micro)

def read_macro(db_macro):
    macro_data = {
        "object_row": db_macro.object_row,
        "amount": db_macro.amount,
        "comment": db_macro.comment
    }
    return macro_data

def read_meso(db_meso):
    meso_data = {
        "category": db_enum.MesoCategory.to_ordinal(db_meso.category),
        "type": db_enum.MesoType.to_ordinal(db_meso.type),
        "color": db_enum.MesoMicroColor.to_ordinal(db_meso.color),
        "texture": db_enum.MesoMicroTexture.to_ordinal(db_meso.texture),
        "quadra_1": db_meso.quadra_1,
        "quadra_2": db_meso.quadra_2,
        "quadra_3": db_meso.quadra_3,
        "quadra_4": db_meso.quadra_4,
        "total_amount": db_meso.total_amount,
        "comment": db_meso.comment
    }
    return meso_data

def read_micro(db_micro):
    micro_data = {
        "category": db_enum.MicroCategory.to_ordinal(db_micro.category),
        "type": db_enum.MicroType.to_ordinal(db_micro.type),
        "color": db_enum.MesoMicroColor.to_ordinal(db_micro.color),
        "texture": db_enum.MesoMicroTexture.to_ordinal(db_micro.texture),
        "quadra_1": db_micro.quadra_1,
        "quadra_2": db_micro.quadra_2,
        "quadra_3": db_micro.quadra_3,
        "quadra_4": db_micro.quadra_4,
        "total_amount": db_micro.total_amount,
        "comment": db_micro.comment
    }
    return micro_data

# UPDATE --------------------------------------------------------------
def update_sample(db: Session, sample_id: UUID, update_data: samples.SampleUpdate):
    update_data_dict = update_data.dict(exclude_unset=True, exclude={'macros', 'mesos', 'micros'})

    for field, value in update_data_dict.items():
        if field in db_enum.sample_enum_mappings and value is not None:
            enum_class = db_enum.sample_enum_mappings[field]
            update_data_dict[field] = enum_class.to_string(value)

    if update_data_dict:
        db.query(models.Samples).filter(models.Samples.id == sample_id).update(update_data_dict)

    if update_data.macros is not None:
        for macro_data in update_data.macros:
            create_macro_for_sample(db, macro_data, sample_id)

    if update_data.mesos is not None:
        for meso_data in update_data.mesos:
            create_meso_for_sample(db, meso_data, sample_id)

    if update_data.micros is not None:
        for micro_data in update_data.micros:
            create_micro_for_sample(db, micro_data, sample_id)

    db.commit()

def update_group_sampling(db: Session, sample_id: UUID, group_update: samples.SampleGroupUpdate):
    sample = get_sample_data(db, sample_id)

    if group_update.macro_weight is not None:
        sample.macro_weight = (sample.macro_weight or 0) + group_update.macro_weight
    if group_update.macro_volume is not None:
        sample.macro_volume = (sample.macro_volume or 0) + group_update.macro_volume
    if group_update.total_macro_items is not None:
        sample.total_macro_items = (sample.total_macro_items or 0) + group_update.total_macro_items

    if group_update.macros is not None:
        for macro_data in group_update.macros:
            create_macro_for_sample(db, macro_data, sample_id)

    if group_update.mesos is not None:
        for meso_data in group_update.mesos:
            create_meso_for_sample(db, meso_data, sample_id)

    if group_update.micros is not None:
        for micro_data in group_update.micros:
            create_micro_for_sample(db, micro_data, sample_id)

    db.commit()

    aggregate_redundant_macros(db, sample_id)
    aggregate_redundant_mesos(db, sample_id)
    aggregate_redundant_micros(db, sample_id)

def update_macro_for_sample(db: Session, macro_id: UUID, update_data: samples.MacroCreate):
    update_dict = update_data.dict(exclude_unset=True)

    db.query(models.Macro).filter(models.Macro.id == macro_id).update(update_dict)
    db.commit()

def update_meso_for_sample(db: Session, meso_id: UUID, update_data: samples.MesoCreate):
    update_dict = update_data.dict(exclude_unset=True)

    if 'category' in update_dict:
        update_dict['category'] = db_enum.MesoCategory.to_string(update_data.category)
    if 'type' in update_dict:
        update_dict['type'] = db_enum.MesoType.to_string(update_data.type)
    if 'color' in update_dict:
        update_dict['color'] = db_enum.MesoMicroColor.to_string(update_data.color)

    if 'texture' in update_dict:
        category = update_data.category if 'category' in update_dict else db.query(models.Meso).filter(models.Meso.id == meso_id).first().category
        if db_enum.MesoCategory.from_ordinal(category) != db_enum.MesoCategory.EXPANDED_POLYSTYRENE:
            update_dict['texture'] = db_enum.MesoMicroTexture.to_string(update_data.texture)
        else:
            update_dict['texture'] = None

    db.query(models.Meso).filter(models.Meso.id == meso_id).update(update_dict)
    db.commit()

def update_micro_for_sample(db: Session, micro_id: UUID, update_data: samples.MicroCreate):
    update_dict = update_data.dict(exclude_unset=True)

    if 'category' in update_dict:
        update_dict['category'] = db_enum.MicroCategory.to_string(update_data.category)
    if 'type' in update_dict:
        update_dict['type'] = db_enum.MicroType.to_string(update_data.type)
    if 'color' in update_dict:
        update_dict['color'] = db_enum.MesoMicroColor.to_string(update_data.color)

    if 'texture' in update_dict:
        category = update_data.category if 'category' in update_dict else db.query(models.Micro).filter(models.Micro.id == micro_id).first().category
        if db_enum.MicroCategory.from_ordinal(category) != db_enum.MicroCategory.EXPANDED_POLYSTYRENE:
            update_dict['texture'] = db_enum.MesoMicroTexture.to_string(update_data.texture)
        else:
            update_dict['texture'] = None

    db.query(models.Micro).filter(models.Micro.id == micro_id).update(update_dict)
    db.commit()

# DELETE--------------------------------------------------------------
def delete_sample_by_id(db: Session, sample_id: UUID) -> None:
    delete_entry(db, models.Samples, sample_id)

def delete_macro_by_id(db: Session, macro_id: UUID) -> None:
    delete_entry(db, models.Macro, macro_id)

def delete_meso_by_id(db: Session, meso_id: UUID) -> None:
    delete_entry(db, models.Meso, meso_id)

def delete_micro_by_id(db: Session, micro_id: UUID) -> None:
    delete_entry(db, models.Micro, micro_id)

def delete_entry(db: Session, model: Type, entry_id: UUID) -> None:
    if model == models.Samples:
        db_sample = db.query(model).filter(model.id == entry_id).first()
        if db_sample:
            db.query(models.Macro).filter(models.Macro.samples_id == entry_id).delete()
            db.query(models.Meso).filter(models.Meso.samples_id == entry_id).delete()
            db.query(models.Micro).filter(models.Micro.samples_id == entry_id).delete()
            db.delete(db_sample)
    else:
        entry = db.query(model).filter(model.id == entry_id).first()
        if entry:
            db.delete(entry)
    db.commit()

# Helper functions --------------------------------------------------------------
def get_sample_data(db, sample_id):
    return db.query(models.Samples).filter(models.Samples.id == sample_id).first()

def aggregate_redundant_entities(db: Session, sample_id: UUID, entity_model, unique_fields: List[str], sum_fields: List[str]):

    entities = db.query(entity_model).filter(entity_model.samples_id == sample_id).all()

    unique_entities = {}
    for entity in entities:
        key = tuple((getattr(entity, field) if getattr(entity, field) is not None else f"MISSING-{field}") for field in unique_fields)
        
        if key not in unique_entities:
            unique_entities[key] = entity
        else:
            for sum_field in sum_fields:
                current_value = getattr(unique_entities[key], sum_field, 0) or 0
                additional_value = getattr(entity, sum_field, 0) or 0
                setattr(unique_entities[key], sum_field, current_value + additional_value)

            existing_comment = getattr(unique_entities[key], 'comment', '') or ''
            new_comment = getattr(entity, 'comment', '') or ''
            if new_comment:
                if existing_comment:
                    aggregated_comment = f"{existing_comment}; {new_comment}"
                else:
                    aggregated_comment = new_comment
                setattr(unique_entities[key], 'comment', aggregated_comment)

            if 'quadra_1' in sum_fields:
                quadra_1 = getattr(unique_entities[key], 'quadra_1', 0) or 0
                quadra_2 = getattr(unique_entities[key], 'quadra_2', 0) or 0
                quadra_3 = getattr(unique_entities[key], 'quadra_3', 0) or 0
                quadra_4 = getattr(unique_entities[key], 'quadra_4', 0) or 0

                total_amount = quadra_1 + quadra_2 + quadra_3 + quadra_4
                setattr(unique_entities[key], 'total_amount', total_amount)

            db.delete(entity)
    
    db.commit()

def aggregate_redundant_macros(db: Session, sample_id: UUID):
    aggregate_redundant_entities(db, sample_id, models.Macro, ['object_row'], ['amount'])

def aggregate_redundant_mesos(db: Session, sample_id: UUID):
    aggregate_redundant_entities(db, sample_id, models.Meso, ['category', 'type', 'color', 'texture'], ['quadra_1', 'quadra_2', 'quadra_3', 'quadra_4'])

def aggregate_redundant_micros(db: Session, sample_id: UUID):
    aggregate_redundant_entities(db, sample_id, models.Micro, ['category', 'type', 'color', 'texture'], ['quadra_1', 'quadra_2', 'quadra_3', 'quadra_4'])