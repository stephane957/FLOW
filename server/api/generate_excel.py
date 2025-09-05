# Description: This file contains the endpoint to generate an excel file (FILE_ID) for a sample data in the Google drive FOLDER_ID.
import os
import tempfile
from uuid import UUID
from datetime import datetime
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session

from services.excel import download_file_from_drive, upload_file_to_drive, populate_sample_data_to_excel
from utils.database import get_db
from services.samples import get_sample_data

router = APIRouter(prefix='/api')

@router.get("/samples/{sample_id}/generate_excel")
async def generate_excel_for_sample(sample_id: UUID, db: Session = Depends(get_db)):
    sample = get_sample_data(db, sample_id)
    if not sample:
        raise HTTPException(status_code=404, detail="Sample not found")

    template_file_id = os.getenv('FILE_ID')
    folder_id = os.getenv('FOLDER_ID')
    current_date = datetime.now().strftime("%Y-%m-%d")
    modified_filename = f"{current_date}_{sample_id}.xlsx" 

    with tempfile.NamedTemporaryFile(delete=False, suffix='.xlsx') as tmp:
        local_template_path = tmp.name

    download_file_from_drive(template_file_id, local_template_path)

    with tempfile.NamedTemporaryFile(delete=False, suffix='.xlsx') as tmp:
        output_file_path = tmp.name

    populate_sample_data_to_excel(sample_id, local_template_path, output_file_path)

    uploaded_file_id, view_link = upload_file_to_drive(modified_filename, output_file_path, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', folder_id)

    os.remove(local_template_path)
    os.remove(output_file_path)

    return {"message": "Excel generated and uploaded successfully", "file_id": uploaded_file_id, "view_link": view_link}
