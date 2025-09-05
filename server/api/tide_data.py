# Description: This file contains the endpoint for fetching tide data from the Stormglass API.
import logging
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from services.tide import TideClient
from utils.database import get_db
router = APIRouter(prefix='/api')

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Tide data route
@router.get('/tide_data')
async def get_tide_data_endpoint(lat: float, lng: float, db: Session = Depends(get_db)):
    tide_client = TideClient(db)
    try:
        tide_data = tide_client.get_tide_data(lat, lng)
        return tide_data
    except HTTPException as http_err:
        raise http_err
    except Exception as err:
        logging.error(f"Error fetching tide data: {err}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching tide data.")