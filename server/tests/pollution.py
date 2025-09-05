# Description: Test the pollution map data fetch functionality of the server.
import requests

from config import BASE_URL

def get_pollution_map():
    response = requests.get(f"{BASE_URL}/pollution")
    if response.status_code == 200:
        pollution_data = response.json()["data"]
        print("Pollution Map Data Received:")
        for data_point in pollution_data:
            lat = data_point["latitude"]
            lon = data_point["longitude"]
            level = data_point["pollution_level"]
            print(f"Latitude: {lat}, Longitude: {lon}, Pollution Level: {level}")
    else:
        print(f"Failed to fetch pollution map data. Status Code: {response.status_code}")

if __name__ == "__main__":
    get_pollution_map()
