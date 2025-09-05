# Description: This file contains the Pydantic schemas for the Sample model.
from uuid import UUID
from typing import List, Optional
from datetime import datetime
from pydantic import BaseModel, Field

import database.models.enums as db_enum

# MACRO, MESO, MICRO, SAMPLE SCHEMAS -----------------------------------------
class MacroCreate(BaseModel):
    object_row: Optional[int]       = Field(None, description="MacroType enum value")
    amount: Optional[int]           = None
    comment: Optional[str]          = None

class MesoCreate(BaseModel):
    category: Optional[int]         = Field(None, description="MesoCategory enum value")
    type: Optional[int]             = Field(None, description="MesoType enum value")
    color: Optional[int]            = Field(None, description="MesoMicroColor enum value")
    texture: Optional[int]          = Field(None, description="MesoMicroTexture enum value")
    quadra_1: Optional[int]         = None
    quadra_2: Optional[int]         = None
    quadra_3: Optional[int]         = None
    quadra_4: Optional[int]         = None
    total_amount: Optional[int]     = None                                                  # <--- DO NOT USE THIS FIELD (it is calculated)
    comment: Optional[str]          = None

class MicroCreate(BaseModel):
    category: Optional[int]         = Field(None, description="MicroCategory enum value")
    type: Optional[int]             = Field(None, description="MicroType enum value")
    color: Optional[int]            = Field(None, description="MesoMicroColor enum value")
    texture: Optional[int]          = Field(None, description="MesoMicroTexture enum value")
    quadra_1: Optional[int]         = None
    quadra_2: Optional[int]         = None
    quadra_3: Optional[int]         = None
    quadra_4: Optional[int]         = None
    total_amount: Optional[int]     = None                                                  # <--- DO NOT USE THIS FIELD (it is calculated)
    comment: Optional[str]          = None

class SampleCreate(BaseModel):
    user_id: UUID = Field(..., description="The ID of the user creating the sample")

    # CONTEXT INFORMATION -----------------------------------------
    site_location: Optional[int] = Field(None, description="Site location enum value")
    seaboard: Optional[int] = Field(None, description="Seaboard enum value")
    river_name: Optional[str] = None

    # Information about the participants
    establishment_name: Optional[str] = None
    establishment_commune: Optional[str] = None
    class_level: Optional[str] = None
    number_of_students: Optional[int] = None
    academy_number: Optional[db_enum.Academy] = None
    
    # Information about the site
    site_name: Optional[str] = None
    site_code: Optional[str] = None
    department_number: Optional[str] = None
    commune_name: Optional[str] = None

    # Date and time
    sample_date: Optional[datetime] = None
    sample_time: Optional[datetime] = None

    # Tide information
    tide_coefficient: Optional[float] = None
    high_tide_time: Optional[datetime] = None

    # Collect details
    collect_participants: Optional[int] = None
    collect_duration: Optional[float] = None

    # Sorting details
    sorting_participants: Optional[int] = None
    sorting_duration: Optional[float] = None

    # Information about sampling of meso and microplastics
    bands_studied: Optional[int] = None
    drift_line_present: Optional[int] = Field(None, description="Answer enum value")
    drift_line_count: Optional[int] = None

    # CHARACTERIZATION OF THE STUDY SITE --------------------------
    # Description of the study site
    transect_length: Optional[float] = None
    back_site_type: Optional[int] = Field(None, description="EnvironmentType enum value")
    
    # GPS coordinates
    start_gps_latitude: Optional[float] = None
    start_gps_longitude: Optional[float] = None
    end_gps_latitude: Optional[float] = None
    end_gps_longitude: Optional[float] = None

    currents_direction: Optional[int] = Field(None, description="Direction enum value")
    winds_direction: Optional[int] = Field(None, description="Direction enum value")
    site_direction: Optional[int] = Field(None, description="Direction enum value")

    main_material: Optional[str] = None
    pollution_influence: Optional[str] = None

    yearly_usage: Optional[int] = Field(None, description="SiteUsage enum value")
    summer_usage: Optional[int] = Field(None, description="SiteUsage enum value")

    foot_accessibility: Optional[int] = Field(None, description="Distance enum value")

    # ENVIRONMENTAL CONTEXT ---------------------------------------
    nearest_agglomeration: Optional[str] = None
    agglomeration_type: Optional[int] = Field(None, description="AgglomerationType enum value")
    agglomeration_distance: Optional[float] = None
    immediate_infrastructure: Optional[bool] = None
    immediate_takeaway_food: Optional[int] = Field(None, description="Answer enum value")
    distance_to_coastline: Optional[float] = None

    # The nearest port
    nearest_port_distance: Optional[float] = None
    nearest_port_name: Optional[str] = None
    nearest_port_type: Optional[str] = None
    nearest_port_size: Optional[int] = None

    # The nearest estuary
    nearest_estuary_distance: Optional[float] = None
    nearest_estuary_name: Optional[str] = None
    nearest_river_name: Optional[str] = None

    # Wastewater discharges and discharges
    proximity_to_waste_disposal: Optional[int] = Field(None, description="Answer enum value")
    waste_disposal_distance: Optional[float] = None

    # Site cleanup
    recent_cleaning: Optional[int] = Field(None, description="Answer enum value")
    cleaning_frequency: Optional[int] = Field(None, description="CleaningFrequency enum value")
    cleaning_method: Optional[int] = Field(None, description="CleaningMethod enum value")
    cleaning_responsibility: Optional[int] = Field(None, description="CleaningResp enum value")
    tide_gauge_presence: Optional[int] = Field(None, description="Answer enum value")

    # Meteorological events
    recent_meteo_events: Optional[int] = Field(None, description="WeatherCondition enum value")
    meteo_interpretation: Optional[str] = None

    # Additional comments
    additional_comments: Optional[str] = None

    # panoramic photo
    image: Optional[bytes] = None
 
    # MACRO --------------------------------------------------------   
    macro_weight: Optional[float] = None
    macro_volume: Optional[float] = None
    total_macro_items: Optional[int] = None

    macros: List[MacroCreate] = []                                                      # <--- This field is required
    mesos: List[MesoCreate] = []                                                        # <--- This field is required
    micros: List[MicroCreate] = []                                                      # <--- This field is required

class SampleUpdate(BaseModel):
    user_id: Optional[UUID] = None

    # CONTEXT INFORMATION -----------------------------------------
    site_location: Optional[int] = Field(None, description="Site location enum value")
    seaboard: Optional[int] = Field(None, description="Seaboard enum value")
    river_name: Optional[str] = None

    # Information about the participants
    establishment_name: Optional[str] = None
    establishment_commune: Optional[str] = None
    class_level: Optional[str] = None
    number_of_students: Optional[int] = None
    academy_number: Optional[db_enum.Academy] = None
    
    # Information about the site
    site_name: Optional[str] = None
    site_code: Optional[str] = None
    department_number: Optional[str] = None
    commune_name: Optional[str] = None

    # Date and time
    sample_date: Optional[datetime] = None
    sample_time: Optional[datetime] = None

    # Tide information
    tide_coefficient: Optional[float] = None
    high_tide_time: Optional[datetime] = None

    # Collect details
    collect_participants: Optional[int] = None
    collect_duration: Optional[float] = None

    # Sorting details
    sorting_participants: Optional[int] = None
    sorting_duration: Optional[float] = None

    # Information about sampling of meso and microplastics
    bands_studied: Optional[int] = None
    drift_line_present: Optional[int] = Field(None, description="Answer enum value")
    drift_line_count: Optional[int] = None

    # CHARACTERIZATION OF THE STUDY SITE --------------------------
    # Description of the study site
    transect_length: Optional[float] = None
    back_site_type: Optional[int] = Field(None, description="EnvironmentType enum value")
    
    # GPS coordinates
    start_gps_latitude: Optional[float] = None
    start_gps_longitude: Optional[float] = None
    end_gps_latitude: Optional[float] = None
    end_gps_longitude: Optional[float] = None

    currents_direction: Optional[int] = Field(None, description="Direction enum value")
    winds_direction: Optional[int] = Field(None, description="Direction enum value")
    site_direction: Optional[int] = Field(None, description="Direction enum value")

    main_material: Optional[str] = None
    pollution_influence: Optional[str] = None

    yearly_usage: Optional[int] = Field(None, description="SiteUsage enum value")
    summer_usage: Optional[int] = Field(None, description="SiteUsage enum value")

    foot_accessibility: Optional[int] = Field(None, description="Distance enum value")

    # ENVIRONMENTAL CONTEXT ---------------------------------------
    nearest_agglomeration: Optional[str] = None
    agglomeration_type: Optional[int] = Field(None, description="AgglomerationType enum value")
    agglomeration_distance: Optional[float] = None
    immediate_infrastructure: Optional[bool] = None
    immediate_takeaway_food: Optional[int] = Field(None, description="Answer enum value")
    distance_to_coastline: Optional[float] = None

    # The nearest port
    nearest_port_distance: Optional[float] = None
    nearest_port_name: Optional[str] = None
    nearest_port_type: Optional[str] = None
    nearest_port_size: Optional[int] = None

    # The nearest estuary
    nearest_estuary_distance: Optional[float] = None
    nearest_estuary_name: Optional[str] = None
    nearest_river_name: Optional[str] = None

    # Wastewater discharges and discharges
    proximity_to_waste_disposal: Optional[int] = Field(None, description="Answer enum value")
    waste_disposal_distance: Optional[float] = None

    # Site cleanup
    recent_cleaning: Optional[int] = Field(None, description="Answer enum value")
    cleaning_frequency: Optional[int] = Field(None, description="CleaningFrequency enum value")
    cleaning_method: Optional[int] = Field(None, description="CleaningMethod enum value")
    cleaning_responsibility: Optional[int] = Field(None, description="CleaningResp enum value")
    tide_gauge_presence: Optional[int] = Field(None, description="Answer enum value")

    # Meteorological events
    recent_meteo_events: Optional[int] = Field(None, description="WeatherCondition enum value")
    meteo_interpretation: Optional[str] = None

    # Additional comments
    additional_comments: Optional[str] = None

    # panoramic photo
    image: Optional[bytes] = None

    # MACRO --------------------------------------------------------       
    macro_weight: Optional[float] = None
    macro_volume: Optional[float] = None
    total_macro_items: Optional[int] = None

    macros: List[MacroCreate] = None
    mesos: List[MesoCreate] = None
    micros: List[MicroCreate] = None

class SampleGroupUpdate(BaseModel):
    macro_weight: Optional[float] = Field(None, description="Total weight of macros collected (in kg)")
    macro_volume: Optional[float] = Field(None, description="Total volume of macros collected (in liters)")
    total_macro_items: Optional[int] = Field(None, description="Total number of macro items collected")

    macros: Optional[List[MacroCreate]] = None
    mesos: Optional[List[MesoCreate]] = None
    micros: Optional[List[MicroCreate]] = None