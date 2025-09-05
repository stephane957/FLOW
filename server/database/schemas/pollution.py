# Description: This file contains the Pydantic schemas for the Pollution response.
from typing import List
from pydantic import BaseModel

class PollutionData(BaseModel):
    latitude: float
    longitude: float
    pollution_level: int

class PollutionMapResponse(BaseModel):
    data: List[PollutionData]