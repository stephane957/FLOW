# Description: Test the excel generation and upload functionality of the server.
import requests

from config import BASE_URL

def test_drive_sequence(sample_id):
    response = requests.get(f"{BASE_URL}/samples/{sample_id}/generate_excel")
    if response.status_code == 200:
        data = response.json()
        print(f"Excel generated and uploaded successfully. File ID: {data['file_id']}, View Link: {data['view_link']}")
    else:
        print(f"Failed to generate Excel. Status code: {response.status_code}")
