# Description: This file contains the endpoint for user operations such as create, read, update and delete.
from uuid import UUID
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database.models.models import User
from database.schemas.users import UserCreate, UserRead, UserUpdate
from services.users import UserService
from utils.database import get_db

router = APIRouter(prefix='/api')

# Create Routes -------------------------------------------------------------
# create new user route
@router.post('/users', response_model=UserRead)
async def create_or_get_user_endpoint(user_data: UserCreate, db: Session = Depends(get_db)):
    user_service = UserService(db)
    
    existing_user = user_service.get_user_by_email(user_data.email)
    if existing_user:
        return existing_user
    
    new_user = user_service.create_user(
        username=user_data.username,
        email=user_data.email,
        image_url=user_data.image_url,
        notification=user_data.notification,
        localisation=user_data.localisation,
        langue=user_data.langue,
        macro_tutoriel=user_data.macro_tutoriel,
        micro_tutoriel=user_data.micro_tutoriel,
        materials=user_data.materials
    )
    
    return new_user

# Update Routes -------------------------------------------------------------
# update user route
@router.put('/users/{user_id}', response_model=UserRead)
async def update_user_endpoint(user_id: UUID, user_data: UserUpdate, db: Session = Depends(get_db)):
    user_service = UserService(db)
    user = user_service.update_user(
        user_id=user_id,
        username=user_data.username,
        email=user_data.email,
        image_url=user_data.image_url,
        notification=user_data.notification,
        localisation=user_data.localisation,
        langue=user_data.langue,
        macro_tutoriel=user_data.macro_tutoriel,
        micro_tutoriel=user_data.micro_tutoriel,
        materials=user_data.materials
    )
    if not user:
        raise HTTPException(status_code=404, detail=f"User with ID {user_id} not found")
    return user

# Check Routes --------------------------------------------------------------
# check if username is unique route
@router.get('/users/is_unique/{username}', response_model=bool)
async def check_username_uniqueness(username: str, db: Session = Depends(get_db)):
    user_service = UserService(db)
    return user_service.is_username_unique(username)

# suggest unique username route
@router.get('/users/suggest_unique/{username}', response_model=dict)
async def suggest_unique_username_endpoint(username: str, db: Session = Depends(get_db)):
    user_service = UserService(db)
    unique_username = user_service.suggest_unique_username(username)
    return {"unique username": unique_username}

# Read Routes ---------------------------------------------------------------
# read all users route
@router.get('/users', response_model=List[UserRead])
async def get_all_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

# read user by id route
@router.get('/users/id/{user_id}', response_model=UserRead)
async def get_user_by_id(user_id: UUID, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail=f"User with ID {user_id} not found")
    return user

# read user by username route
@router.get('/users/username/{username}', response_model=UserRead)
async def get_user_by_username(username: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if user is None:
        raise HTTPException(status_code=404, detail=f"User with username '{username}' not found")
    return user

# read user id by username route
@router.get("/get_user_id/{username}", response_model=int)
async def get_user_id_route(username: str, db: Session = Depends(get_db)):
    user_service = UserService(db)
    user_id = user_service.get_user_id_by_username(username)
    if user_id is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user_id

# Delete Routes -------------------------------------------------------------
# delete user by id route
@router.delete('/users/{user_id}', response_model=dict)
async def delete_user_endpoint(user_id: UUID, db: Session = Depends(get_db)):
    user_service = UserService(db)
    success = user_service.delete_user(user_id)
    if success:
        return {"message": f"User with ID {user_id} successfully deleted"}
    raise HTTPException(status_code=404, detail=f"User with ID {user_id} not found")