# Description: This file contains the endpoints for fetching statistics about the samples, macros, mesos and micros.
import datetime
from uuid import UUID
import logging
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func,desc, extract
from sqlalchemy.orm import Session

from utils.database import get_db
from database.models import models
import database.models.enums as db_enum

router = APIRouter(prefix='/api')

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Total macro weight last month from all the samples
@router.get("/samples/stats/month/macrosweight/{user_id}")
def get_monthly_macro_stats(user_id: UUID, db: Session = Depends(get_db)):
    try:
        today = datetime.date.today()
        last_month = today - datetime.timedelta(days=30)
        monthly_stats = db.query(func.avg(models.Samples.macro_weight).label("average_weight"), 
                                 func.sum(models.Samples.macro_weight).label("total_weight"))\
                                    .filter(models.Samples.user_id == user_id, models.Samples.sample_date >= last_month)\
                                        .first()
        logging.info(f"Successfully fetched monthly macro stats for user ID {user_id}")
        return {"average_weight": monthly_stats.average_weight, "total_weight": monthly_stats.total_weight}
    except Exception as e:
        logging.error(f"Error fetching monthly macro stats for {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/samples/stats/month/samples/{user_id}")
def get_monthly_samples(user_id: UUID, db: Session = Depends(get_db)):
    try:
        today = datetime.date.today()
        last_month = today - datetime.timedelta(days=30)

        samples = db.query(
            extract('day', models.Samples.sample_date).label("day"),
            func.count().label("total_samples")
        ).filter(
            models.Samples.user_id == user_id,
            models.Samples.sample_date >= last_month
        ).group_by(
            extract('day', models.Samples.sample_date)
        ).all()

        logging.info(f"Successfully fetched samples for user ID {user_id} in last month")
        return [{"day": sample.day, 
                 "total_samples": sample.total_samples} 
                for sample in samples]
    except Exception as e:
        logging.error(f"Error fetching distribution of samples per day for user ID {user_id} in last month: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Total macro weight last year from all the samples
@router.get("/samples/stats/year/macrosweight/{user_id}")
def get_yearly_macro_stats(user_id: UUID, db: Session = Depends(get_db)):
    try:
        today = datetime.date.today()
        last_year = today - datetime.timedelta(days=365)
        yearly_stats = db.query(func.avg(models.Samples.macro_weight).label("average_weight"), 
                                func.sum(models.Samples.macro_weight).label("total_weight"))\
                                    .filter(models.Samples.user_id == user_id, models.Samples.sample_date >= last_year)\
                                        .first()
        logging.info(f"Successfully fetched monthly macro stats for user ID {user_id}")
        return {"average_weight": yearly_stats.average_weight, "total_weight": yearly_stats.total_weight}
    except Exception as e:
        logging.error(f"Error fetching monthly macro stats for {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/samples/stats/year/samples/{user_id}")
def get_yearly_samples(user_id: UUID, db: Session = Depends(get_db)):
    try:
        today = datetime.date.today()
        last_year = today - datetime.timedelta(days=365)

        samples = db.query(
            extract('month', models.Samples.sample_date).label("month"),
            func.count().label("total_samples") 
        ).filter(
            models.Samples.user_id == user_id, 
            models.Samples.sample_date >= last_year
        ).group_by(
            extract('month', models.Samples.sample_date)
        ).all()

        result = [
            {"month": sample.month, "total_samples": sample.total_samples} 
            for sample in samples
        ]

        logging.info(f"Successfully fetched samples for user ID {user_id} in last year")
        return result 
    except Exception as e:
        logging.error(f"Error fetching distribution of samples per month for user ID {user_id} in last year: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Total macro weight from all the samples
@router.get("/samples/stats/ever/macrosweight/{user_id}")
def get_every_macro_stats(user_id: UUID, db: Session = Depends(get_db)):
    try:
        total_weight = db.query(func.avg(models.Samples.macro_weight).label("average_weight"), 
                                func.sum(models.Samples.macro_weight).label("total_weight"))\
                                    .filter(models.Samples.user_id == user_id)\
                                        .first()
        logging.info(f"Successfully fetched macro stats for user ID {user_id}")
        return {"average_weight": total_weight.average_weight, "total_weight": total_weight.total_weight}
    except Exception as e:
        logging.error(f"Error fetching macro stats for {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/samples/stats/ever/samples/{user_id}")
def get_every_samples(user_id: UUID, db: Session = Depends(get_db)):
    try:
        samples = db.query(
            extract('year', models.Samples.sample_date).label("year"),
            func.count().label("total_samples")
        ).filter(
            models.Samples.user_id == user_id
        ).group_by(
            extract('year', models.Samples.sample_date) 
        ).all()

        result = [
            {"year": sample.year, "total_samples": sample.total_samples} 
            for sample in samples
        ]

        logging.info(f"Successfully fetched samples for user ID {user_id}")
        return result 
    except Exception as e:
        logging.error(f"Error fetching distribution of samples per year for userID {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))


def get_popular_items(user_id: UUID, db: Session, model, amount_label: str, time_interval: str, additional_fields=None):
    try:
        today = datetime.date.today()
        if time_interval == "last_year":
            start_date = today - datetime.timedelta(days=365)
        elif time_interval == "last_month":
            start_date = today - datetime.timedelta(days=30)
        else:  # For all time
            start_date = datetime.date.min

        # Choose the attribute name based on the model type
        attribute_name = "type" if model in [models.Meso, models.Micro] else "object_row"
        query = db.query(getattr(model, attribute_name).label("item_type"),
                         func.avg(getattr(model, amount_label)).label("average_amount"),
                         func.sum(getattr(model, amount_label)).label("total_amount")) \
            .join(models.Samples).filter(models.Samples.user_id == user_id, models.Samples.sample_date >= start_date) \
            .group_by(getattr(model, attribute_name)) \
            .order_by(desc("total_amount")) \
            .limit(3) \
            .all()

        result = []
        for item in query:
            item_dict = {
                "item_type": getattr(item, "item_type"),
                "average_amount": item.average_amount,
                "total_amount": item.total_amount
            }
            if additional_fields:
                for field_func in additional_fields:
                    item_dict.update(field_func(item))
            result.append(item_dict)

        logging.info(f"Successfully fetched most popular items for user ID {user_id} in {time_interval}")
        return result
    except Exception as e:
        logging.error(f"Error fetching most popular items for user ID {user_id} in {time_interval}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    
@router.get("/macros/stats/year/popular/{user_id}")
def get_yearly_popular_macros(user_id: UUID, db: Session = Depends(get_db)):
    return get_popular_items(user_id, db, models.Macro, "amount", "last_year")

@router.get("/mesos/stats/year/popular/{user_id}")
def get_yearly_popular_mesos(user_id: UUID, db: Session = Depends(get_db)):
    additional_fields = [
        lambda meso: {"meso_type_ordinal": db_enum.MesoType.to_ordinal(meso.item_type) + 1}
    ]
    return get_popular_items(user_id, db, models.Meso, "total_amount", "last_year", additional_fields)

@router.get("/micros/stats/year/popular/{user_id}")
def get_yearly_popular_micros(user_id: UUID, db: Session = Depends(get_db)):
    additional_fields = [
        lambda micro: {"micro_type_ordinal": db_enum.MicroType.to_ordinal(micro.item_type)}
    ]
    return get_popular_items(user_id, db, models.Micro, "total_amount", "last_year", additional_fields)

@router.get("/macros/stats/month/popular/{user_id}")
def get_monthly_popular_macros(user_id: UUID, db: Session = Depends(get_db)):
    return get_popular_items(user_id, db, models.Macro, "amount", "last_month")

@router.get("/mesos/stats/month/popular/{user_id}")
def get_monthly_popular_mesos(user_id: UUID, db: Session = Depends(get_db)):
    additional_fields = [
        lambda meso: {"meso_type_ordinal": db_enum.MesoType.to_ordinal(meso.item_type) + 1}
    ]
    return get_popular_items(user_id, db, models.Meso, "total_amount", "last_month", additional_fields)

@router.get("/micros/stats/month/popular/{user_id}")
def get_monthly_popular_micros(user_id: UUID, db: Session = Depends(get_db)):
    additional_fields = [
        lambda micro: {"micro_type_ordinal": db_enum.MicroType.to_ordinal(micro.item_type)}
    ]
    return get_popular_items(user_id, db, models.Micro, "total_amount", "last_month", additional_fields)

@router.get("/macros/stats/ever/popular/{user_id}")
def get_all_time_popular_macros(user_id: UUID, db: Session = Depends(get_db)):
    return get_popular_items(user_id, db, models.Macro, "amount", "all_time")

@router.get("/mesos/stats/ever/popular/{user_id}")
def get_all_time_popular_mesos(user_id: UUID, db: Session = Depends(get_db)):
    additional_fields = [
        lambda meso: {"meso_type_ordinal": db_enum.MesoType.to_ordinal(meso.item_type) + 1}
    ]
    return get_popular_items(user_id, db, models.Meso, "total_amount", "all_time", additional_fields)

@router.get("/micros/stats/ever/popular/{user_id}")
def get_all_time_popular_micros(user_id: UUID, db: Session = Depends(get_db)):
    additional_fields = [
        lambda micro: {"micro_type_ordinal": db_enum.MicroType.to_ordinal(micro.item_type)}
    ]
    return get_popular_items(user_id, db, models.Micro, "total_amount", "all_time", additional_fields)

@router.get("/macros/stats/month/distribution/piechart/{user_id}")
def get_macro_distribution_last30days(user_id: UUID, db: Session = Depends(get_db)):
    try:
        cutoff_date = datetime.date.today() - datetime.timedelta(days=30)
        result = db.query(models.Macro.object_row, func.sum(models.Macro.amount).label('total_amount')) \
                   .filter(models.Samples.user_id == user_id, models.Samples.sample_date >= cutoff_date) \
                   .join(models.Samples) .group_by(models.Macro.object_row).all()
        return [{"object_row": row.object_row, "total_amount": row.total_amount} for row in result]

    except Exception as e:
        logging.error(f"Error fetching most popular items for piechart of user ID {user_id} in the last month: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/macros/stats/year/distribution/piechart/{user_id}")
def get_macro_distribution_lastYear(user_id: UUID, db: Session = Depends(get_db)):
    try:
        cutoff_date = datetime.date.today() - datetime.timedelta(days=365)
        result = db.query(models.Macro.object_row, func.sum(models.Macro.amount).label('total_amount')) \
                   .filter(models.Samples.user_id == user_id, models.Samples.sample_date >= cutoff_date) \
                   .join(models.Samples) .group_by(models.Macro.object_row).all()
        return [{"object_row": row.object_row, "amount": row.total_amount} for row in result]

    except Exception as e:
        logging.error(f"Error fetching most popular items for piechart of user ID {user_id} in the last year: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/macros/stats/ever/distribution/piechart/{user_id}")
def get_macro_distribution_Ever(user_id: UUID, db: Session = Depends(get_db)):
    try:
        result = db.query(models.Macro.object_row, func.sum(models.Macro.amount).label('total_amount')) \
                   .filter(models.Samples.user_id == user_id) \
                   .join(models.Samples) .group_by(models.Macro.object_row).all()
        return [{"object_row": row.object_row, "amount": row.total_amount} for row in result]

    except Exception as e:
        logging.error(f"Error fetching most popular items for piechart of user ID {user_id} in the last year: {e}")
        raise HTTPException(status_code=500, detail=str(e))

def get_distribution(db, user_id, last_year, model, amount_attr):
    return db.query(
        models.Samples.sample_date,
        models.Samples.sample_time,
        func.sum(getattr(model, amount_attr)).label("total_amount")
    ).join(model, model.samples_id == models.Samples.id)\
     .filter(models.Samples.user_id == user_id, models.Samples.sample_date >= last_year)\
     .group_by(models.Samples.sample_date, models.Samples.sample_time)\
     .all()

def combine_distributions(distributions):
    combined = {}
    for distribution in distributions:
        for dist in distribution:
            key = (dist['sample_date'], dist['sample_time'])
            if key not in combined:
                combined[key] = {'total_macro_amount': 0, 'total_micro_amount': 0, 'total_meso_amount': 0}
            combined[key][dist['label']] += dist['total_amount']
    return combined

def fetch_and_format_distributions(db, user_id, start_date):
    macro_distribution = get_distribution(db, user_id, start_date, models.Macro, 'amount')
    micro_distribution = get_distribution(db, user_id, start_date, models.Micro, 'total_amount')
    meso_distribution = get_distribution(db, user_id, start_date, models.Meso, 'total_amount')

    macro_distribution = [{'sample_date': item.sample_date, 'sample_time': item.sample_time, 'total_amount': item.total_amount, 'label': 'total_macro_amount'} for item in macro_distribution]
    micro_distribution = [{'sample_date': item.sample_date, 'sample_time': item.sample_time, 'total_amount': item.total_amount, 'label': 'total_micro_amount'} for item in micro_distribution]
    meso_distribution = [{'sample_date': item.sample_date, 'sample_time': item.sample_time, 'total_amount': item.total_amount, 'label': 'total_meso_amount'} for item in meso_distribution]

    combined_distribution = combine_distributions([macro_distribution, micro_distribution, meso_distribution])
    
    result = [
        {
            "sample_date": key[0],
            "sample_time": key[1],
            "total_macro_amount": combined_distribution[key].get("total_macro_amount", 0),
            "total_micro_amount": combined_distribution[key].get("total_micro_amount", 0),
            "total_meso_amount": combined_distribution[key].get("total_meso_amount", 0)
        }
        for key in combined_distribution
    ]

    return result

@router.get("/samples/stats/year/distribution/{user_id}")
def get_yearly_distribution(user_id: UUID, db: Session = Depends(get_db)):
    try:
        today = datetime.date.today()
        last_year = today - datetime.timedelta(days=365)
        result = fetch_and_format_distributions(db, user_id, last_year)
        logging.info(f"Successfully fetched distribution of materials for user ID {user_id} in last year")
        return result
    except Exception as e:
        logging.error(f"Error fetching distribution of materials for user ID {user_id} in last year: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/samples/stats/month/distribution/{user_id}")
def get_monthly_distribution(user_id: UUID, db: Session = Depends(get_db)):
    try:
        today = datetime.date.today()
        last_month = today - datetime.timedelta(days=30)
        result = fetch_and_format_distributions(db, user_id, last_month)
        logging.info(f"Successfully fetched distribution of materials for user ID {user_id} in last month")
        return result
    except Exception as e:
        logging.error(f"Error fetching distribution of materials for user ID {user_id} in last month: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/samples/stats/ever/distribution/{user_id}")
def get_every_distribution(user_id: UUID, db: Session = Depends(get_db)):
    try:
        today = datetime.date.today()
        last_decade = today - datetime.timedelta(days=3650)
        result = fetch_and_format_distributions(db, user_id, last_decade)
        logging.info(f"Successfully fetched distribution of samples for user ID {user_id}")
        return result
    except Exception as e:
        logging.error(f"Error fetching distribution of samples for user ID {user_id}: {e}")
        raise HTTPException(status_code=500, detail=str(e))
