# Description: Test the user creation, reading, updating and deletion functionality of the server.
import requests
import json

from config import BASE_URL

def print_json(response):
    try:
        print(json.dumps(response.json(), indent=4, sort_keys=True))
    except json.JSONDecodeError:
        print(response.text)

def create_user(username, email, image_url="http://example.com/profile.jpg"):
    url = f"{BASE_URL}/users"
    user_data = {
        "username": username,
        "email": email,
        "image_url": image_url
    }
    response = requests.post(url, json=user_data)
    print("Create User Response:")
    print_json(response)
    return response.json().get('id') if response.status_code == 200 else None

def update_user_by_id(user_id, image_url="http://example.com/new-profile.jpg", langue=1):
    url = f"{BASE_URL}/users/{user_id}"
    update_data = {
        "image_url": image_url,
        "langue": langue, 
        "macro_tutoriel": False,
        "micro_tutoriel": False,
        "materials": False
    }
    response = requests.put(url, json=update_data)
    print(f"Update User by ID Response (User ID: {user_id}):")
    print_json(response)

def check_username_uniqueness(username):
    url = f"{BASE_URL}/users/is_unique/{username}"
    response = requests.get(url)
    print(f"Check Username Uniqueness Response (Username: {username}):")
    print_json(response)

def suggest_unique_username(username):
    url = f"{BASE_URL}/users/suggest_unique/{username}"
    response = requests.get(url)
    print(f"Suggest Unique Username Response (Base Username: {username}):")
    print_json(response)

def get_user_by_id(user_id):
    url = f"{BASE_URL}/users/id/{user_id}"
    response = requests.get(url)
    print(f"Get User by ID Response (ID: {user_id}):")
    print_json(response)

def get_user_by_username(username):
    url = f"{BASE_URL}/users/username/{username}"
    response = requests.get(url)
    print(f"Get User by Username Response (Username: {username}):")
    print_json(response)

def delete_user(user_id):
    url = f"{BASE_URL}/users/{user_id}"
    response = requests.delete(url)
    print(f"Delete User Response (User ID: {user_id}):")
    print_json(response)

def test_users():
    username = "testuser"
    user_id_1 = create_user(username, "bob@something.com")
    user_id_2 = create_user(username, "alice@something.com")
    create_user(username, "bob@something.com")
    if user_id_1 and user_id_2:
        update_user_by_id(user_id=user_id_1, langue=2)
        check_username_uniqueness(username)
        suggest_unique_username(username)
        get_user_by_id(user_id_1)
        get_user_by_username(username)
        delete_user(user_id_2)

    return user_id_1

if __name__ == "__main__":
    test_users()
