# Description: This script is used to populate the database with sample data (refer to the sample_data_template.txt file in the same directory).
import pandas as pd
from io import StringIO

from tests.users import create_user
from tests.samples import create_sample

def populate(username, email, image_url, file_path = "./scripts/populate/sample_data.txt"):
    user_id = create_user(username, email, image_url)
    if user_id is None:
        print("Failed to create user.")
        return

    with open(file_path, 'r') as file:
        data = file.read()

    data_io = StringIO(data)
    df = pd.read_csv(data_io)

    df = df.transpose()
    df.columns = ['long_transect', 'Poids (en kg)', 'Volume (en L)', '# Macro', '# Meso', '# Micro', 'Latitude', 'Longitude']

    for site_name, row in df.iterrows():
        sample_data = {
            "site_name": site_name,
            "start_gps_latitude": row['Latitude'],
            "start_gps_longitude": row['Longitude'],

            "macro_weight": row['Poids (en kg)'],
            "macro_volume": row['Volume (en L)'],
            "total_macro_items": row['# Macro'],

            "macros": [{"amount": row['# Macro']}],
            "mesos": [{"quadra_1": row['# Meso']}],
            "micros": [{"quadra_1": row['# Micro']}]
        }

        create_sample(user_id, sample_data)