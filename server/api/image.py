# Description: This file contains the endpoint to upload and retrieve images for a sample data.
import base64
from uuid import UUID
from fastapi import APIRouter, HTTPException, status, Depends
from fastapi.responses import Response
from pydantic import BaseModel
from sqlalchemy.orm import Session

from database.models.models import Samples
from utils.database import get_db

router = APIRouter(prefix='/api')

class ImageData(BaseModel):
    image: str

@router.post("/samples/{sample_id}/upload_image", status_code=status.HTTP_201_CREATED)
async def upload_image(sample_id: UUID, image_data: ImageData, db: Session = Depends(get_db)):
    image_bytes = base64.b64decode(image_data.image)

    sample = db.query(Samples).filter(Samples.id == sample_id).first()

    if not sample:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Sample not found")

    sample.image = image_bytes
    db.commit()

    return {"message": "Image uploaded successfully"}

@router.get("/samples/{sample_id}/image")
async def get_image(sample_id: UUID, db: Session = Depends(get_db)):
    sample = db.query(Samples).filter(Samples.id == sample_id).first()
    
    if not sample or not sample.image:
        raise HTTPException(status_code=404, detail="Image not found")
    
    return Response(content=sample.image, media_type="image/jpeg")