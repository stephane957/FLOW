# Description: This file contains the configuration settings for the server.
import os

# Database settings
def get_database_url():
    return os.getenv('DATABASE_URL', "sqlite:///sqlalchemy_example.db")

# Server settings
def get_base_url():
    return os.getenv('BASE_URL', "http://127.0.0.1:8080/api")

BASE_URL = get_base_url()

# Tide data settings
TIDE_URL = "https://api.stormglass.io/v2/tide/extremes/point"
RADIUS_IN_KM = 0.5
TIME_RANGE_IN_DAYS = 7
