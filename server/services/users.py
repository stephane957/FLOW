# Description: This file contains service functions for creating, reading, updating and deleting users in the database.
from typing import Optional
from sqlalchemy.orm import Session

from database.models.models import User
from database.models.enums import UserLanguage

class UserService:
    def __init__(self, db: Session):
        self.db = db

    def is_username_unique(self, username: str) -> bool:
        return not self.db.query(User).filter(User.username == username).first()

    # TODO: refactor to use random suffixes
    def suggest_unique_username(self, username: str) -> str:
        if self.is_username_unique(username):
            return username
        
        suffix = 1
        new_username = f"{username}_{suffix}"

        while not self.is_username_unique(new_username):
            suffix += 1
            new_username = f"{username}_{suffix}"
            
        return new_username

    def create_user(self, 
                    username: str, 
                    email: str, 
                    image_url: Optional[str] = None, 
                    notification: Optional[bool] = False, 
                    localisation: Optional[bool] = False, 
                    langue: Optional[int] = None,
                    macro_tutoriel: Optional[bool] = True,
                    micro_tutoriel: Optional[bool] = True,
                    materials: Optional[bool] = True
                    ):
        unique_username = self.suggest_unique_username(username)
        new_user = User(username=unique_username, 
                        email=email, 
                        image_url=image_url, 
                        notification=notification, 
                        localisation=localisation, 
                        langue=langue, 
                        macro_tutoriel=macro_tutoriel,
                        micro_tutoriel=micro_tutoriel, 
                        materials=materials)
        self.db.add(new_user)
        self.db.commit()
        self.db.refresh(new_user)
        return new_user

    def get_user_by_email(self, email: str):
        user = self.db.query(User).filter(User.email == email).first()
        if user:
            return self.get_user_by_id(user.id)
        return None
    
    def get_user_by_id(self, user_id: int):
        return self.db.query(User).filter(User.id == user_id).first()

    def update_user(self, 
                    user_id: int,
                    email: str,
                    username: Optional[str] = None, 
                    image_url: Optional[str] = None, 
                    notification: Optional[bool] = None, 
                    localisation: Optional[bool] = None, 
                    langue: Optional[UserLanguage] = None,
                    macro_tutoriel: Optional[bool] = None,
                    micro_tutoriel: Optional[bool] = None,
                    materials: Optional[bool] = None):
        user = self.db.query(User).filter(User.id == user_id).first()
        
        if not user:
            return None
        
        if username and username != user.username:
            user.username = self.suggest_unique_username(username)

        if email is not None:
            user.email = email
        
        if image_url is not None:
            user.image_url = image_url
        
        if notification is not None:
            user.notification = notification
        
        if localisation is not None:
            user.localisation = localisation
        
        if langue is not None:
            user.langue = langue

        if macro_tutoriel is not None:
            user.macro_tutoriel = macro_tutoriel
        
        if micro_tutoriel is not None:
            user.micro_tutoriel = micro_tutoriel
        
        if materials is not None:
            user.materials = materials

        self.db.commit()
        return user

    def delete_user(self, user_id: int) -> bool:
        user = self.db.query(User).filter(User.id == user_id).first()
        if user:
            self.db.delete(user)
            self.db.commit()
            return True
        return False