# Description: This file contains functions to interact with Google Drive Excel files and populate them with data from the database.
import os, io, json, enum
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload, MediaFileUpload
from openpyxl import load_workbook
from openpyxl.styles import Font

import database.models.enums as db_enum
from utils.database import get_db
from services.samples import get_sample_data

SCOPES = ['https://www.googleapis.com/auth/drive']

def create_drive_service():
    info = json.loads(os.getenv('GOOGLE_CREDENTIALS'))
    credentials = service_account.Credentials.from_service_account_info(info, scopes=SCOPES)
    
    service = build('drive', 'v3', credentials=credentials)
    return service

def download_file_from_drive(file_id, file_path):
    service = create_drive_service()
    request = service.files().get_media(fileId=file_id)
    fh = io.BytesIO()

    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while done is False:
        _, done = downloader.next_chunk()

    with open(file_path, 'wb') as f:
        f.write(fh.getbuffer())

def upload_file_to_drive(filename, filepath, mimetype, folder_id=None):
    service = create_drive_service()
    file_metadata = {'name': filename, 'parents': [folder_id]} if folder_id else {'name': filename}
    media = MediaFileUpload(filepath, mimetype=mimetype)
    file = service.files().create(body=file_metadata, media_body=media, fields='id, webViewLink').execute()
    print(f"File ID: {file.get('id')}\nView Link: {file.get('webViewLink')}")
    return file.get('id'), file.get('webViewLink')

def populate_sample_data_to_excel(sample_id, template_file_path, output_file_path):
    db_gen = get_db()
    db = next(db_gen)
    try:
        sample_data = get_sample_data(db, sample_id)
        
        if not sample_data:
            print(f"No data found for sample ID {sample_id}")
            return

        wb = load_workbook(template_file_path)
        populate_site_info(wb, sample_data)
        if len(wb.worksheets) > 1:
            populate_macro_info(wb, sample_data)
        if len(wb.worksheets) > 2:
            populate_meso_info(wb, sample_data)
        if len(wb.worksheets) > 3:
            populate_micro_info(wb, sample_data)
        
        wb.save(output_file_path)
        print(f"Data populated and saved to {output_file_path}")
    finally:
        db.close()

def populate_site_info(workbook, sample_data):
    base_url = os.getenv('BASE_URL')
    first_sheet = workbook.active
    populate_cells(first_sheet, db_enum.info_site_mapping, sample_data)
    if sample_data.image:
        add_image_link(first_sheet, sample_data, base_url)

def populate_macro_info(workbook, sample_data):
    macro_sheet = workbook.worksheets[1]
    populate_cells(macro_sheet, db_enum.info_macro_mapping, sample_data)

    for macro in sample_data.macros:
        object_row = macro.object_row
        if object_row is not None:
            real_object_row = object_row + 10
            amount_cell = f'E{real_object_row}'
            comment_cell = f'F{real_object_row}'
            macro_sheet[amount_cell] = macro.amount
            macro_sheet[comment_cell] = macro.comment

def populate_meso_info(workbook, sample_data):
    populate_meso_micro_cells(
        workbook,
        sample_data,
        "mesos",
        db_enum.meso_enum_mappings,
        get_meso_excel_row,
        2
    )

def populate_micro_info(workbook, sample_data):
    populate_meso_micro_cells(
        workbook,
        sample_data,
        "micros",
        db_enum.micro_enum_mappings,
        get_micro_excel_row,
        3
    )

def populate_cells(sheet, mapping, sample_data):
    for attr, cell in mapping.items():
            value = getattr(sample_data, attr, None)
            if isinstance(value, enum.Enum):
                value = value.value
            sheet[cell] = value if value is not None else ''

def add_image_link(sheet, sample_data, base_url):
    image_cell = 'D67'
    image_url = f"{base_url}/samples/{sample_data.id}/image"
    sheet[image_cell].hyperlink = image_url
    sheet[image_cell].value = "Lien vers l'image"
    sheet[image_cell].font = Font(color="0000FF", underline="single")

def populate_meso_micro_cells(workbook, sample_data, data_collection, enum_mappings, get_excel_row_func, sheet_index):
    sheet = workbook.worksheets[sheet_index]
    for item in getattr(sample_data, data_collection):
        if item.category is not None and item.type is not None and item.color is not None and item.texture is not None:
            category_enum = enum_mappings["category"].from_string(item.category)
            type_enum = enum_mappings["type"].from_string(item.type)
            color_enum = enum_mappings["color"].from_string(item.color)
            texture_enum = enum_mappings["texture"].from_string(item.texture)

            row = get_excel_row_func(category_enum, type_enum, color_enum, texture_enum)

            sheet[f'G{row}'] = item.quadra_1 if item.quadra_1 is not None else ''
            sheet[f'H{row}'] = item.quadra_2 if item.quadra_2 is not None else ''
            sheet[f'I{row}'] = item.quadra_3 if item.quadra_3 is not None else ''
            sheet[f'J{row}'] = item.total_amount if item.total_amount is not None else ''
            sheet[f'K{row}'] = item.comment if item.comment is not None else ''

def get_meso_excel_row(category, type, color, texture):

    if category == db_enum.MesoCategory.EXPANDED_POLYSTYRENE:
        return 73 if color == db_enum.MesoMicroColor.WHITE else 74

    type_start_positions = {
        db_enum.MesoType.DEGRADED: 8,
        db_enum.MesoType.SHARP: 21,
        db_enum.MesoType.FILM: 34,
        db_enum.MesoType.FIBRE: 47,
        db_enum.MesoType.FOAM: 60,
    }
    
    color_offsets = {
        db_enum.MesoMicroColor.BLACK: 0,
        db_enum.MesoMicroColor.WHITE: 2,
        db_enum.MesoMicroColor.RED: 4,
        db_enum.MesoMicroColor.BLUE: 6,
        db_enum.MesoMicroColor.YELLOW: 8,
        db_enum.MesoMicroColor.GREEN: 10,
        db_enum.MesoMicroColor.OTHER: 12,
    }
    
    texture_offsets = {
        db_enum.MesoMicroTexture.OPAQUE: 0,
        db_enum.MesoMicroTexture.TRANSPARENT: 1,
    }

    type_start = type_start_positions[type]
    color_offset = color_offsets[color]

    if color == db_enum.MesoMicroColor.OTHER:
        return type_start + color_offset

    texture_offset = texture_offsets[texture]

    return type_start + color_offset + texture_offset


def get_micro_excel_row(category, type, color, texture):

    if category == db_enum.MicroCategory.EXPANDED_POLYSTYRENE:
        return 85 if color == db_enum.MesoMicroColor.WHITE else 86

    type_start_positions = {
        db_enum.MicroType.PELLET: 7,
        db_enum.MicroType.DEGRADED: 20,
        db_enum.MicroType.SHARP: 33,
        db_enum.MicroType.FILM: 46,
        db_enum.MicroType.FIBRE: 59,
        db_enum.MicroType.FOAM: 72,
    }
    
    color_offsets = {
        db_enum.MesoMicroColor.BLACK: 0,
        db_enum.MesoMicroColor.WHITE: 2,
        db_enum.MesoMicroColor.RED: 4,
        db_enum.MesoMicroColor.BLUE: 6,
        db_enum.MesoMicroColor.YELLOW: 8,
        db_enum.MesoMicroColor.GREEN: 10,
        db_enum.MesoMicroColor.OTHER: 12,
    }
    
    texture_offsets = {
        db_enum.MesoMicroTexture.OPAQUE: 0,
        db_enum.MesoMicroTexture.TRANSPARENT: 1,
    }

    type_start = type_start_positions[type]
    color_offset = color_offsets[color]

    if color == db_enum.MesoMicroColor.OTHER:
        return type_start + color_offset

    texture_offset = texture_offsets[texture]
    
    return type_start + color_offset + texture_offset