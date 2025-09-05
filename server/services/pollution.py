# Description: This file contains the logic for the pollution service. It calculates the pollution score for each sample and assigns a pollution level based on the score.
import numpy as np
from typing import List
from sqlalchemy.orm import Session

from database.models.models import Samples
from database.schemas.pollution import PollutionData, PollutionMapResponse
from database.models.enums import PollutionLevel

def calculate_pollution_score(sample: Samples) -> float:
    macro_score = sample.total_macro_items if sample.total_macro_items else 0
    meso_score = sum(meso.total_amount for meso in sample.mesos)
    micro_score = sum(micro.total_amount for micro in sample.micros)
    return macro_score + meso_score + micro_score

def assign_color(score: float, thresholds: List[float]) -> int:
    if score <= thresholds[0]:
        return PollutionLevel.LOW.num
    elif score <= thresholds[1]:
        return PollutionLevel.MEDIUM.num
    elif score <= thresholds[2]:
        return PollutionLevel.HIGH.num
    else:
        return PollutionLevel.VERY_HIGH.num

def get_pollution_levels(db: Session) -> PollutionMapResponse:
    samples = db.query(Samples).all()

    scores = [calculate_pollution_score(sample) for sample in samples]
    thresholds = np.percentile(scores, [25, 50, 75])

    pollution_data_list = []

    for sample, score in zip(samples, scores):
        if sample.start_gps_latitude is not None and sample.start_gps_longitude is not None:
            pollution_level = assign_color(score, thresholds)
            pollution_data_list.append(
                PollutionData(
                    latitude=sample.start_gps_latitude,
                    longitude=sample.start_gps_longitude,
                    pollution_level=pollution_level
                )
            )

    return PollutionMapResponse(data=pollution_data_list)
