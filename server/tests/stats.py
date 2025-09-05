# Description: Tests for the stats functionality of the server.
import requests
import json

from config import BASE_URL


def print_json(response):
    try:
        print(json.dumps(response.json(), indent=4, sort_keys=True))
    except json.JSONDecodeError:
        print(response.text)
    
def create_sample(user_id):
    url = f"{BASE_URL}/samples"
    sample_data = {
        "user_id": user_id,
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
        "sample_date": "2024-03-10",
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
            },
            {
                "object_row": 9,
                "amount": 10,
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
            },
            {
                "category": 2,
                "type": 2,
                "color": 3,
                "texture": 3,
                "quadra_1": 20,
                "quadra_2": 10,
                "quadra_3": 5,
                "quadra_4": 2,
            },
            {
                "category": 3,
                "type": 3,
                "color": 4,
                "texture": 4,
                "quadra_1": 30,
                "quadra_2": 15,
                "quadra_3": 10,
                "quadra_4": 5,
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
            },
            {
                "category": 6,
                "type": 6,
                "color": 3,
                "quadra_1": 60,
                "quadra_2": 50,
                "quadra_3": 40,
                "comment": "Mostly near the water line."
            },
            {
                "category": 7,
                "type": 5,
                "color": 4,
                "quadra_1": 70,
                "quadra_2": 60,
                "quadra_3": 50,
                "comment": "Mostly near the water line."
            }
        ]
    }
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, json=sample_data, headers=headers)
    print("Create Sample Response:")
    print_json(response)
    return response.json().get('id')

def create_sample_month(user_id):
    url = f"{BASE_URL}/samples"
    sample_data = {
        "user_id": user_id,
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
        "sample_date": "2024-03-01",
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
            },
            {
                "object_row": 9,
                "amount": 10,
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
            },
            {
                "category": 2,
                "type": 2,
                "color": 3,
                "texture": 3,
                "quadra_1": 20,
                "quadra_2": 10,
                "quadra_3": 5,
                "quadra_4": 2,
            },
            {
                "category": 3,
                "type": 3,
                "color": 4,
                "texture": 4,
                "quadra_1": 30,
                "quadra_2": 15,
                "quadra_3": 10,
                "quadra_4": 5,
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
            },
            {
                "category": 6,
                "type": 6,
                "color": 3,
                "quadra_1": 60,
                "quadra_2": 50,
                "quadra_3": 40,
                "comment": "Mostly near the water line."
            },
            {
                "category": 7,
                "type": 5,
                "color": 4,
                "quadra_1": 70,
                "quadra_2": 60,
                "quadra_3": 50,
                "comment": "Mostly near the water line."
            }
        ]
    }
    headers = {"Content-Type": "application/json"}
    response = requests.post(url, json=sample_data, headers=headers)
    print("Create Sample Response:")
    print_json(response)
    return response.json().get('id')

def create_sample_year(user_id):
    url = f"{BASE_URL}/samples"
    sample_data = {
        "user_id": user_id,
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
        "sample_date": "2023-05-10",
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
            },
            {
                "object_row": 9,
                "amount": 10,
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
            },
            {
                "category": 2,
                "type": 2,
                "color": 3,
                "texture": 3,
                "quadra_1": 20,
                "quadra_2": 10,
                "quadra_3": 5,
                "quadra_4": 2,
            },
            {
                "category": 3,
                "type": 3,
                "color": 4,
                "texture": 4,
                "quadra_1": 30,
                "quadra_2": 15,
                "quadra_3": 10,
                "quadra_4": 5,
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
            },
            {
                "category": 6,
                "type": 6,
                "color": 3,
                "quadra_1": 60,
                "quadra_2": 50,
                "quadra_3": 40,
                "comment": "Mostly near the water line."
            },
            {
                "category": 7,
                "type": 5,
                "color": 4,
                "quadra_1": 70,
                "quadra_2": 60,
                "quadra_3": 50,
                "comment": "Mostly near the water line."
            }
        ]
    }
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

def read_samples_count(user_id):
    url = f"{BASE_URL}/samples/count/{user_id}"
    response = requests.get(url)
    print("Read Samples Count Response:")
    print_json(response)
    return response.json()

def read_last_sample_info(user_id):
    url = f"{BASE_URL}/lastsample/info/{user_id}"
    response = requests.get(url)
    print("Read Last Sample Info Response:")
    print_json(response)

def read_popular_macros_last_sample(user_id):
    url = f"{BASE_URL}/lastsample/macros/popular/{user_id}"
    response = requests.get(url)
    print("Read Popular Macros Response:")
    print_json(response)

def read_popular_mesos_last_sample(user_id):
    url = f"{BASE_URL}/lastsample/mesos/popular/{user_id}"
    response = requests.get(url)
    print("Read Popular Mesos Response:")
    print_json(response)

def read_popular_micros_last_sample(user_id):
    url = f"{BASE_URL}/lastsample/micros/popular/{user_id}"
    response = requests.get(url)
    print("Read Popular Micros Response:")
    print_json(response)

def read_macros_weight_last_sample(user_id):
    url = f"{BASE_URL}/lastsample/macros/weight/{user_id}"
    response = requests.get(url)
    print("Read Macros Weight Response:")
    print_json(response)

def read_macros_distribution_last_sample(user_id):
    url = f"{BASE_URL}/lastsample/macros/distribution/{user_id}"
    response = requests.get(url)
    print("Read Macros Distribution Response:")
    print_json(response)

def test_get_monthly_macro_stats(user_id):
    url = f"{BASE_URL}/samples/stats/month/macrosweight/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    data = response.json()
    assert 'average_weight' in data
    assert 'total_weight' in data
    print("Read Popular Last Month Macros Response:")
    print_json(response)

def test_get_monthly_popular_macros(user_id):
    url = f"{BASE_URL}/macros/stats/month/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Popular Last Month Macros Response:")
    print_json(response)

def test_get_monthly_popular_mesos(user_id):
    url = f"{BASE_URL}/mesos/stats/month/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Popular Last Month Mesos Response:")
    print_json(response)

def test_get_monthly_popular_micros(user_id):
    url = f"{BASE_URL}/micros/stats/month/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Popular Last Month Micros Response:")
    print_json(response)

def test_get_monthly_distribution(user_id):
    url = f"{BASE_URL}/samples/stats/month/distribution/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Monthly Distribution Response:")
    print_json(response)

def test_get_monthly_samples(user_id):
    url = f"{BASE_URL}/samples/stats/month/samples/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Monthly Samples Response:")
    print_json(response)

def test_get_yearly_samples(user_id):
    url = f"{BASE_URL}/samples/stats/year/samples/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Yearly Samples Response:")
    print_json(response)

def test_get_yearly_distribution(user_id):
    url = f"{BASE_URL}/samples/stats/year/distribution/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Yearly Distribution Response:")
    print_json(response)

def test_get_yearly_popular_macros(user_id):
    url = f"{BASE_URL}/macros/stats/year/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Yearly Popular Macros Response:")
    print_json(response)

def test_get_yearly_popular_mesos(user_id):
    url = f"{BASE_URL}/mesos/stats/year/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Yearly Popular Mesos Response:")
    print_json(response)

def test_get_yearly_popular_micros(user_id):
    url = f"{BASE_URL}/micros/stats/year/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Yearly Popular Micros Response:")
    print_json(response)

def test_get_yearly_macro_stats(user_id):
    url = f"{BASE_URL}/samples/stats/year/macrosweight/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    data = response.json()
    assert 'average_weight' in data
    assert 'total_weight' in data
    print("Read Yearly Macros Weight Response:")
    print_json(response)

def test_get_every_macro_stats(user_id):
    url = f"{BASE_URL}/samples/stats/ever/macrosweight/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    data = response.json()
    assert 'average_weight' in data
    assert 'total_weight' in data
    print("Read Every Macros Weight Response:")
    print_json(response)

def test_get_every_popular_macros(user_id):
    url = f"{BASE_URL}/macros/stats/ever/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Every Popular Macros Response:")
    print_json(response)

def test_get_every_popular_mesos(user_id):
    url = f"{BASE_URL}/mesos/stats/ever/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Every Popular Mesos Response:")
    print_json(response)

def test_get_every_popular_micros(user_id):
    url = f"{BASE_URL}/micros/stats/ever/popular/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Every Popular Micros Response:")
    print_json(response)

def test_get_every_distribution(user_id):
    url = f"{BASE_URL}/samples/stats/ever/distribution/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Every Distribution Response:")
    print_json(response)

def test_get_every_samples(user_id):
    url = f"{BASE_URL}/samples/stats/ever/samples/{user_id}"
    response = requests.get(url)
    assert response.status_code == 200
    print("Read Every Samples Response:")
    print_json(response)

def test_stats(user_id):
    sample_id_start = create_sample(user_id)
    sample_id_second = create_sample_month(user_id)
    sample_id_third = create_sample_year(user_id)
    print("Sample ID Start:", sample_id_start)  
    read_samples_count(user_id)
    read_last_sample_info(user_id)
    read_popular_macros_last_sample(user_id)
    read_popular_mesos_last_sample(user_id)
    read_popular_micros_last_sample(user_id)
    read_macros_weight_last_sample(user_id)
    read_macros_distribution_last_sample(user_id)
    test_get_monthly_macro_stats(user_id)
    test_get_monthly_popular_macros(user_id)
    test_get_monthly_popular_mesos(user_id)
    test_get_monthly_popular_micros(user_id)
    test_get_monthly_distribution(user_id)
    test_get_monthly_samples(user_id)
    test_get_yearly_samples(user_id)
    test_get_yearly_distribution(user_id)
    test_get_yearly_popular_macros(user_id)
    test_get_yearly_popular_mesos(user_id)
    test_get_yearly_popular_micros(user_id)
    test_get_yearly_macro_stats(user_id)
    test_get_every_macro_stats(user_id)
    test_get_every_popular_macros(user_id)
    test_get_every_popular_mesos(user_id)
    test_get_every_popular_micros(user_id)
    test_get_every_distribution(user_id)
    test_get_every_samples(user_id)
