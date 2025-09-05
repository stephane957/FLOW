# Description: Test the sample creation, reading, updating and deletion functionality of the server.
import requests
import json

from config import BASE_URL

def print_json(response):
    try:
        print(json.dumps(response.json(), indent=4, sort_keys=True))
    except json.JSONDecodeError:
        print(response.text)

def create_sample(user_id, sample):
    url = f"{BASE_URL}/samples"
    
    sample_data = sample.copy()
    sample_data["user_id"] = user_id

    headers = {"Content-Type": "application/json"}
    response = requests.post(url, json=sample_data, headers=headers)
    print("Create Sample Response:")
    print_json(response)
    return response.json().get('id')

def read_sample(sample_id):
    url = f"{BASE_URL}/samples/{sample_id}"
    response = requests.get(url)
    print("Read Sample Response:")
    print_json(response)

def update_sample(sample_id, update_data):
    url = f"{BASE_URL}/samples/{sample_id}"
    response = requests.put(url, json=update_data)
    print("Update Sample Response:")
    print_json(response)

def update_group_sampling(sample_id, entities):
    url = f"{BASE_URL}/samples/{sample_id}/group/update"
    headers = {"Content-Type": "application/json"}
    response = requests.put(url, json=entities, headers=headers)
    print("Update Group Sampling Response:")
    print_json(response)

def delete_sample(sample_id):
    url = f"{BASE_URL}/samples/{sample_id}"
    response = requests.delete(url)
    print("Delete Sample Response:", response.status_code)

def read_all_samples():
    url = f"{BASE_URL}/samples"
    response = requests.get(url)
    print("Read All Samples Response:")
    print_json(response)

def read_samples_range(start_id, end_id):
    url = f"{BASE_URL}/samples/range/{start_id}/{end_id}"
    response = requests.get(url)
    print("Read Samples Range Response:")
    print_json(response)

def create_macro(sample_id):
    url = f"{BASE_URL}/samples/{sample_id}/macros"
    macro_data = {
        "type": "Cageot",
        "amount": 20,
        "comment": "Newly found near the shoreline."
    }
    response = requests.post(url, json=macro_data)
    print("Create Macro Response:")
    print_json(response)
    return response.json().get('id')

def read_macro(macro_id):
    url = f"{BASE_URL}/macros/{macro_id}"
    response = requests.get(url)
    print("Read Macro Response:")
    print_json(response)

def update_macro(macro_id):
    url = f"{BASE_URL}/macros/{macro_id}"
    update_data = {
        "amount": 25,
        "comment": "Updated amount and observation."
    }
    response = requests.put(url, json=update_data)
    print("Update Macro Response:")
    print_json(response)

def delete_macro(macro_id):
    url = f"{BASE_URL}/macros/{macro_id}"
    response = requests.delete(url)
    print("Delete Macro Response:", response.status_code)

def test_samples(user_id):
    sample_id_1 = create_sample(user_id, sample_data)
    print("Sample ID Start:", sample_id_1)

    update_group_sampling(sample_id_1, group_update_data_1)
    update_group_sampling(sample_id_1, group_update_data_2)

    read_sample(sample_id_1)
    update_sample(sample_id_1, update_data)
    read_all_samples()
    # delete_sample(sample_id_1)

    return sample_id_1

sample_data = {
    "site_location": 1,
    "seaboard": 1,
    "river_name": "Sample River",
    "establishment_name": "Sample School",
    "establishment_commune": "Sample Commune",
    "class_level": "10th Grade",
    "number_of_students": 30,
    "academy_number": 3,
    "site_name": "Sample Beach",
    "site_code": "SB001",
    "department_number": "05",
    "commune_name": "Sample Commune",
    "sample_date": "2024-03-10T03:35:09Z",
    "sample_time": "2024-03-10T03:35:09Z",
    "tide_coefficient": 85.0,
    "high_tide_time": "2024-03-10T03:35:09Z",
    "collect_participants": 5,
    "collect_duration": 2.0,
    "macro_weight": 5.0,
    "macro_volume": 50.0,
    "total_macro_items": 100,
    "macros": [
        {
            "object_row": 7,
            "amount": 30,
            "comment": "BLOB"
        },
        {
            "object_row": 8,
            "amount": 15,
            "comment": "BEEP BOOP"
        }
    ],
    "mesos": [
        {
            "category": 1,
            "type": 1,
            "color": 2,
            "texture": 2,
            "quadra_1": 10,
            "quadra_2": 5,
            "quadra_3": 2,
            "quadra_4": 1,
        }
    ],
    "micros": [
        {
            "category": 5,
            "type": 7,
            "color": 2,
            "quadra_1": 50,
            "quadra_2": 40,
            "quadra_3": 30,
            "comment": "Mostly near the water line."
        }
    ]
}

update_data = {
    "site_location": 2,
    "macros": [
        {
            "object_row": 8,
            "amount": 1
        }
    ],
    "mesos": [
        {
            "category": 2,
            "type": 3,
            "color": 3,
            "texture": 2,
            "quadra_1": 1,
            "quadra_2": 2,
            "quadra_3": 3,
            "quadra_4": 4,
        }
    ],
    "micros": [
        {
            "category": 2,
            "type": 5,
            "color": 1,
            "quadra_1": 5,
            "quadra_2": 4,
            "quadra_3": 3,
        }
    ]
}

group_update_data_1 = {
    "macros": [
        {
            "object_row": 9,
            "amount": 5,
            "comment": "New macro item from group 1"
        }
    ],
    "mesos": [
        {
            "category": 1,
            "type": 1,
            "color": 1,
            "texture": 1,
            "quadra_1": 5,
            "quadra_2": 5,
            "quadra_3": 5,
            "quadra_4": 5,
        }
    ],
    "micros": [
        {
            "category": 1,
            "type": 2,
            "color": 3,
            "quadra_1": 10,
            "quadra_2": 10,
            "quadra_3": 5,
        }
    ]
}

group_update_data_2 = {
    "macros": [
        {
            "object_row": 9,
            "amount": 5,
            "comment": "New macro item from group 2"
        }
    ],
    "mesos": [
        {
            "category": 1,
            "type": 1,
            "color": 1,
            "texture": 1,
            "quadra_1": 5,
            "quadra_2": 5,
            "quadra_3": 5,
            "quadra_4": 5,
        }
    ],
    "micros": [
        {
            "category": 1,
            "type": 2,
            "color": 3,
            "quadra_1": 10,
            "quadra_2": 5,
            "quadra_3": 10,
        }
    ]
}