# Description: This file contains the Pydantic schemas for the User model.
from uuid import UUID
from typing import Optional
from datetime import datetime
from pydantic import BaseModel, Field

# USER SCHEMAS ----------------------------------------------------------------
class UserCreate(BaseModel):
    username: str                   = Field(..., description="The username must be unique.")
    email: str                      = Field(..., description="The email must be unique.")

    image_url: Optional[str]        = Field(None, description="The URL of the user's profile picture.")
    notification: Optional[bool]    = Field(False, description="Is notification enabled.")
    localisation: Optional[bool]    = Field(False, description="Is localisation enabled.")
    langue: Optional[int]           = Field(0, description="Chosen language.")

    macro_tutoriel: Optional[bool]  = Field(True, description="Is Macro tutorial enabled.")
    micro_tutoriel: Optional[bool]  = Field(True, description="Is Micro tutorial enabled.")
    materials: Optional[bool]       = Field(True, description="Is Materials form enabled.")

    class Config:
        from_attributes = True

class UserRead(BaseModel):
    id: UUID
    username: str                   = Field(..., description="The username must be unique.")
    email: str                      = Field(..., description="The email must be unique.")

    image_url: Optional[str]        = Field(None, description="The URL of the user's profile picture.")
    notification: Optional[bool]    = Field(None, description="Is notification enabled.")
    localisation: Optional[bool]    = Field(None, description="Is localisation enabled.")
    langue: Optional[int]           = Field(None, description="Chosen language.")

    macro_tutoriel: Optional[bool]  = Field(None, description="Is Macro tutorial enabled.")
    micro_tutoriel: Optional[bool]  = Field(None, description="Is Micro tutorial enabled.")
    materials: Optional[bool]       = Field(None, description="Is Materials form enabled.")

    date_inscription: datetime      = Field(..., description="The date of the user's registration.")

    class Config:
        from_attributes = True

class UserUpdate(BaseModel):
    username: Optional[str]         = Field(None, description="The username must be unique.")
    email: Optional[str]            = Field(None, description="The email must be unique.")

    image_url: Optional[str]        = Field(None, description="The URL of the user's profile picture.")
    notification: Optional[bool]    = Field(None, description="Is notification enabled.")
    localisation: Optional[bool]    = Field(None, description="Is localisation enabled.")
    langue: Optional[int]           = Field(None, description="Chosen language.")

    macro_tutoriel: Optional[bool]  = Field(None, description="Is Macro tutorial enabled.")
    micro_tutoriel: Optional[bool]  = Field(None, description="Is Micro tutorial enabled.")
    materials: Optional[bool]       = Field(None, description="Is Materials form enabled.")