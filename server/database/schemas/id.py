# Description: This file contains the Schema for the ID response (UUID format for user ID and sample ID).
from uuid import UUID
from pydantic import BaseModel

class IDResponse(BaseModel):
    id: UUID