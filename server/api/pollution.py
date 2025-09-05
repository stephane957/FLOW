# Description: This file contains the endpoint for fetching pollution data from the database.
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from utils.database import get_db
from database.schemas.pollution import PollutionMapResponse
from services.pollution import get_pollution_levels

router = APIRouter()

@router.get("/api/pollution", response_model=PollutionMapResponse)
def pollution_map(db: Session = Depends(get_db)):
    return get_pollution_levels(db)