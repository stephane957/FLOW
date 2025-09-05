# Description: This file contains the endpoint for sample operations such as create, read, update and delete.
from uuid import UUID
from typing import List
import logging
import traceback
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func,desc
from sqlalchemy.orm import Session

from utils.database import get_db
from database.schemas.id import IDResponse
from database.schemas import samples
from database.models import models
import services.samples as operation
import database.models.enums as db_enum

router = APIRouter(prefix='/api')

# Create routes ---------------------------------------------------------------------------------
# Create Sample route
@router.post("/samples", response_model=IDResponse)
def create_sample_endpoint(sample: samples.SampleCreate, db: Session = Depends(get_db)):
    try:
        sample_id = operation.create_sample(db=db, sample=sample)
        logging.info(f"Sample created successfully with id: {sample_id}")
        return IDResponse(id=sample_id)
    except Exception as e:
        tb = traceback.format_exc()  # This gets the full traceback
        logging.error(f'Error creating sample: {e}\nTraceback: {tb}')
        raise HTTPException(status_code=500, detail=str(e))

# Read routes -----------------------------------------------------------------------------------
# Read a single entry by id routes
@router.get("/samples/{sample_id}", response_model=samples.SampleUpdate)
async def get_sample(sample_id: UUID, db: Session = Depends(get_db)):
    db_sample = operation.read_sample(db, sample_id)
    if db_sample is None:
        raise HTTPException(status_code=404, detail="Sample not found")
    return db_sample

# Read all entries routes
@router.get("/samples", response_model=List[samples.SampleUpdate])
async def get_all_samples(db: Session = Depends(get_db)):
    return operation.read_all_samples(db)

# Update routes ---------------------------------------------------------------------------------
@router.put("/samples/{sample_id}")
def update_sample_endpoint(sample_id: UUID, sample: samples.SampleUpdate, db: Session = Depends(get_db)):
    try:
        operation.update_sample(db=db, sample_id=sample_id, update_data=sample)
        logging.info(f"Sample with ID {sample_id} updated successfully")
    except Exception as e:
        logging.error(f"Error updating sample with ID {sample_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
@router.put("/samples/{sample_id}/group/update", response_model=IDResponse)
def update_group_sampling_endpoint(sample_id: UUID, group_update: samples.SampleGroupUpdate, db: Session = Depends(get_db)):
    try:
        operation.update_group_sampling(db=db, sample_id=sample_id, group_update=group_update)
        logging.info(f"Entities for sample with ID {sample_id} updated successfully")
        return IDResponse(id=sample_id)
    except Exception as e:
        tb = traceback.format_exc()
        logging.error(f'Error updating entities for sample: {e}\nTraceback: {tb}')
        raise HTTPException(status_code=500, detail=str(e))

# Delete routes ---------------------------------------------------------------------------------
@router.delete("/samples/{sample_id}", status_code=204)
async def delete_sample_endpoint(sample_id: UUID, db: Session = Depends(get_db)):
    try:
        operation.delete_sample_by_id(db, sample_id)
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Sample with ID {sample_id} not found or cannot be deleted.")
    return {"message": "Sample deleted successfully"}

# Read routes for Last sampling -----------------------------------------------------------------------------------
# get number of samples of specific user
@router.get("/samples/count/{user_id}")
def get_samples_count(user_id: UUID, db: Session = Depends(get_db)):
    try:
        count = db.query(models.Samples).filter(models.Samples.user_id == user_id).count()
        logging.info(f"Successfully fetched count of samples for user ID {user_id}")
        return {"count": count}
    except Exception as e:
        logging.error(f"Error fetching count of samples for user ID {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# get all samples per user
@router.get("/samples/user/{user_id}")
def get_samples_by_user(user_id: UUID, db: Session = Depends(get_db)):
    try:
        samples = db.query(models.Samples).filter(models.Samples.user_id == user_id).all()
        logging.info(f"Successfully fetched samples for user ID {user_id}")
        return samples
    except Exception as e:
        logging.error(f"Error fetching samples for user ID {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Get last sample of a specific user gen Info
@router.get("/lastsample/info/{user_id}")
def get_samples_count(user_id: UUID, db: Session = Depends(get_db)):
    try:
        last_sample = db.query(models.Samples).filter(models.Samples.user_id == user_id).order_by(models.Samples.sample_date.desc()).first()
        if not last_sample:
            raise HTTPException(status_code=404, detail="No samples found for this user")
        logging.info(f"Successfully fetched count of samples for user ID {user_id}")
        return {"site_location": last_sample.site_location, "river_name": last_sample.river_name, "sample_date": last_sample.sample_date, "sample_time": last_sample.sample_time}
    except Exception as e:
        logging.error(f"Error fetching gen info for lastSampling of user ID {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
def get_last_sample_top_items(user_id: UUID, db: Session, model, amount_label: str, additional_fields=None):
    try:
        last_sample = db.query(models.Samples).filter(models.Samples.user_id == user_id).order_by(models.Samples.sample_date.desc()).first()
        if not last_sample:
            raise HTTPException(status_code=404, detail="No samples found for this user")

        # Choose the attribute name based on the model type
        attribute_name = "type" if model in [models.Meso, models.Micro] else "object_row"
        query = db.query(getattr(model, attribute_name), func.sum(getattr(model, amount_label)).label("total_count")).filter(model.samples_id == last_sample.id).group_by(getattr(model, attribute_name)).order_by(desc("total_count")).limit(3)

        top_items = query.all()

        result = []
        for item in top_items:
            item_dict = {
                attribute_name: getattr(item, attribute_name),
                "total_count": item.total_count
            }
            if additional_fields:
                for field_func in additional_fields:
                    item_dict.update(field_func(item))
            result.append(item_dict)
        
        logging.info(f"Successfully fetched items for user ID {user_id}")
        return result
    except Exception as e:
        logging.error(f"Error fetching items for user ID {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/lastsample/macros/popular/{user_id}")
def get_popular_macros(user_id: UUID, db: Session = Depends(get_db)):
    return get_last_sample_top_items(user_id, db, models.Macro, "amount")

@router.get("/lastsample/mesos/popular/{user_id}")
def get_popular_mesos(user_id: UUID, db: Session = Depends(get_db)):
    additional_fields = [
        lambda meso: {"meso_type_ordinal": db_enum.MesoType.to_ordinal(meso.type) + 1}
    ]
    return get_last_sample_top_items(user_id, db, models.Meso, "total_amount", additional_fields=additional_fields)

@router.get("/lastsample/micros/popular/{user_id}")
def get_popular_micros(user_id: UUID, db: Session = Depends(get_db)):
    additional_fields = [
        lambda micro: {"micro_type_ordinal": db_enum.MicroType.to_ordinal(micro.type)}
    ]
    return get_last_sample_top_items(user_id, db, models.Micro, "total_amount", additional_fields=additional_fields)

# get total weight of macros from last sample of a speciic user 
@router.get("/lastsample/macros/weight/{user_id}")
def get_macro_weight(user_id: UUID, db: Session = Depends(get_db)):
    try:
        last_sample = db.query(models.Samples).filter(models.Samples.user_id == user_id).order_by(models.Samples.sample_date.desc()).first()
        logging.info(f"Successfully fetched total weight of macros for user ID {user_id}")
        return {"total_weight": last_sample.macro_weight}
    except Exception as e:
        logging.error(f"Error fetching total weight of macros for user ID {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
# get distribution of number of macros per type from last sample of a speciic user
@router.get("/lastsample/macros/distribution/{user_id}")
def get_macro_distribution(user_id: UUID, db: Session = Depends(get_db)):
    try:
        last_sample = db.query(models.Samples).filter(models.Samples.user_id == user_id).order_by(models.Samples.sample_date.desc()).first()
        if not last_sample:
            raise HTTPException(status_code=404, detail="No samples found for this user")
        distribution = db.query(models.Macro.object_row, models.Macro.amount).filter(models.Macro.samples_id == last_sample.id).all()
        result = [ {"object_row": macro.object_row, "amount": macro.amount} for macro in distribution]
        return result
    except Exception as e:
        logging.error(f"Error fetching distribution of macros for {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
# get distribution of number of mesos per type from last sample of a speciic user
@router.get("/lastsample/mesos/distribution/{user_id}")
def get_meso_distribution(user_id: UUID, db: Session = Depends(get_db)):
    try:
        last_sample = db.query(models.Samples).filter(models.Samples.user_id == user_id).order_by(models.Samples.sample_date.desc()).first()
        if not last_sample:
            raise HTTPException(status_code=404, detail="No samples found for this user")
        distribution = db.query(models.Meso.type, models.Meso.amount).filter(models.Meso.samples_id == last_sample.id).all()
        distribution_with_ordinal = [
            {
                "meso_type": meso.type,
                "meso_type_ordinal": db_enum.MesoType.to_ordinal(meso.type),
                "amount": meso.amount
            } for meso in distribution
        ]
        return distribution_with_ordinal
    except Exception as e:
        logging.error(f"Error fetching distribution of mesos for {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
# get distribution of number of mesos per type from last sample of a speciic user 
@router.get("/lastsample/micros/distribution/{user_id}")
def get_micros_distribution(user_id: UUID, db: Session = Depends(get_db)):
    try:
        last_sample = db.query(models.Samples).filter(models.Samples.user_id == user_id).order_by(models.Samples.sample_date.desc()).first()
        if not last_sample:
            raise HTTPException(status_code=404, detail="No samples found for this user")
        distribution = db.query(models.Micro.type.label("type"), 
                                models.Micro.amount)\
                                    .filter(models.Micro.samples_id == last_sample.id).all()
        distribution_with_ordinal = [
            {
                "micro_type": micro.type,
                "micro_type_ordinal": db_enum.MicroCategory.to_ordinal(micro.type),
                "amount": micro.amount
            } for micro in distribution
        ]
        return distribution_with_ordinal
    except Exception as e:
        logging.error(f"Error fetching distribution of mesos for {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
