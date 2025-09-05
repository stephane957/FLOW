# Description: This file contains the logic responsible for fetching tide data from the Storm Glass API and caching it in the database.
import os
import requests
import arrow
from math import radians, cos
from sqlalchemy.orm import Session

from database.models.models import TideDataCache
from config import TIDE_URL, RADIUS_IN_KM, TIME_RANGE_IN_DAYS

class TideClient:
    def __init__(self, db: Session):
        self.db = db
        self.base_url = TIDE_URL
        self.api_key = os.getenv('STORM_GLASS_API_KEY')

    # TODO: refactor into smaller functions
    def get_tide_data(self, lat, lng):
        radius_in_degrees = RADIUS_IN_KM / 111
        lat_range = (lat - radius_in_degrees, lat + radius_in_degrees)
        lng_range = (lng - radius_in_degrees / cos(radians(lat)), lng + radius_in_degrees / cos(radians(lat)))

        now = arrow.utcnow()
        time_threshold = now.shift(days=-TIME_RANGE_IN_DAYS).datetime

        cached_data = (
            self.db.query(TideDataCache)
            .filter(
                TideDataCache.latitude.between(*lat_range),
                TideDataCache.longitude.between(*lng_range),
                TideDataCache.last_updated >= time_threshold
            )
            .order_by(TideDataCache.last_updated.desc())
            .first()
        )

        if cached_data:
            return cached_data.data

        start = now
        end = start.shift(days=1)

        start_timestamp = start.timestamp()
        end_timestamp = end.timestamp()

        response = requests.get(
            self.base_url,
            params={
                'lat': lat,
                'lng': lng,
                'start': start_timestamp,
                'end': end_timestamp,
            },
            headers={'Authorization': self.api_key}
        )
        response.raise_for_status()
        data = response.json()

        # Cache the new data
        new_cache = TideDataCache(
            latitude=lat,
            longitude=lng,
            start_date=start.datetime,
            end_date=end.datetime,
            data=data,
            last_updated=now.datetime
        )
        self.db.add(new_cache)
        self.db.commit()

        return data
