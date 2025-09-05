# Description: This file contains the models for all the tables in the database (Users, Samples, Macros, Mesos, Micros, TideDataCache).
import uuid
import datetime
from datetime import timezone
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, Enum, ForeignKey, JSON, LargeBinary
from sqlalchemy.orm import relationship

from database.database import Base
from . import enums as db_enum

class Samples(Base):
    __tablename__ = 'samples'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey('users.id', ondelete='SET NULL'), nullable=True)

    # CONTEXT INFORMATION -----------------------------------------
    site_location = Column(String, nullable=True)                               # Le site de prélèvement est situé sur le littoral ou sur une berge de fleuve/rivière?
    seaboard = Column(String, nullable=True)                                    # Façade maritime (uniquement pour les littoraux)
    river_name = Column(String, nullable=True)                                  # Préciser le nom du fleuve/rivière associé au site de prélèvement? 

    # Information about the participants
    establishment_name = Column(String, nullable=True)                          # Nom de l'établissement
    establishment_commune = Column(String, nullable=True)                       # Commune de l'établissement
    class_level = Column(String, nullable=True)                                 # Niveau scolaire de la classe 
    number_of_students = Column(Integer, nullable=True)                         # Nombre d'élèves
    academy_number = Column(Enum(db_enum.Academy), nullable=True)               # N° Académie
    
    # Information about the site
    site_name = Column(String, nullable=True)                                   # Nom du site
    site_code = Column(String, nullable=True)                                   # Code numéraire attribué au site
    department_number = Column(String, nullable=True)                           # N° Département
    commune_name = Column(String, nullable=True)                                # Nom de la commune

    # Date and time
    sample_date = Column(DateTime, nullable=True)                               # Date de prélèvement
    sample_time = Column(DateTime, nullable=True)                               # Heure de prélèvement

    # Tide information
    tide_coefficient = Column(Float, nullable=True)                             # Coefficient de marée
    high_tide_time = Column(DateTime, nullable=True)                            # Heure de pleine mer

    # Collect details
    collect_participants = Column(Integer, nullable=True)                       # Nombre de participants
    collect_duration = Column(Float, nullable=True)                             # Temps de collecte (en h) (in hours)

    # Sorting details
    sorting_participants = Column(Integer, nullable=True)                       # Nombre de participants
    sorting_duration = Column(Float, nullable=True)                             # Temps de tri (en h) (in hours)

    # Information about sampling of meso and microplastics
    bands_studied = Column(Integer, nullable=True)                              # Combien de bandes de 50cm avez-vous étudiées?
    drift_line_present = Column(String, nullable=True)                          # Y avait-il une laisse de mer/fleuve sur votre site?
    drift_line_count = Column(Integer, nullable=True)                           # Combien de laisses de mer/fleuve avez-vous comptées?

    # CHARACTERIZATION OF THE STUDY SITE --------------------------
    # Description of the study site
    transect_length = Column(Float, nullable=True)                              # Longueur du transect (en m) (in meters)
    back_site_type = Column(String, nullable=True)                              # Arrière de votre site

    # GPS coordinates
    start_gps_latitude = Column(Float, nullable=True)                           # Latitude GPS du début du transect
    start_gps_longitude = Column(Float, nullable=True)                          # Longitude GPS du début du transect
    end_gps_latitude = Column(Float, nullable=True)                             # Latitude GPS de la fin du transect
    end_gps_longitude = Column(Float, nullable=True)                            # Longitude GPS de la fin du transect

    currents_direction = Column(String, nullable=True)                          # Orientation des courants dominants
    winds_direction = Column(String, nullable=True)                             # Orientation des vents dominants
    site_direction = Column(String, nullable=True)                              # Comment est orienté votre site

    main_material = Column(String, nullable=True)                               # Granulométrie : quel type de matériel principal compose le site?  TODO: to be changed to Enum(Material) 
    pollution_influence = Column(String, nullable=True)                         # Y a-t-il des éléments en mer ou dans le fleuve qui sont susceptibles d’influencer la pollution

    yearly_usage = Column(String, nullable=True)                                # Quel est l'usage principal de votre site sur l'année?
    summer_usage = Column(String, nullable=True)                                # Quel est l'usage principal de votre site en saison estivale?

    foot_accessibility = Column(String, nullable=True)                          # Accessibilité du site à pied (distance de marche nécessaire depuis la zone carrossable)

    # ENVIRONMENTAL CONTEXT ---------------------------------------
    nearest_agglomeration = Column(String, nullable=True)                       # Quelle est l'agglomération la plus proche? 
    agglomeration_type = Column(String, nullable=True)                          # Comment est qualifiée l'agglomération la plus proche du site de prelèvement?
    agglomeration_distance = Column(Float, nullable=True)                       # Distance de l'agglomération par rapport au site (km)
    immediate_infrastructure = Column(Boolean, nullable=True)                   # Y-a-t-il des infrastructures à proximité immédiate de votre site? 
    immediate_takeaway_food = Column(String, nullable=True)                     # Y-a-t-il des commerces de restauration à emporter à proximité immédiate de votre site?
    distance_to_coastline = Column(Float, nullable=True)                        # Quelle est la distance entre votre site et la ligne maritime la plus proche (en km)?

    # The nearest port
    nearest_port_distance = Column(Float, nullable=True)                        # Distance (en km)
    nearest_port_name = Column(String, nullable=True)                           # Nom de l'estuaire
    nearest_port_type = Column(String, nullable=True)                           # Type de port
    nearest_port_size = Column(Integer, nullable=True)                          # Taille du port

    # The nearest estuary
    nearest_estuary_distance = Column(Float, nullable=True)                     # Distance (en km)
    nearest_estuary_name = Column(String, nullable=True)                        # Nom de l'estuaire
    nearest_river_name = Column(String, nullable=True)                          # Nom de la rivière/du fleuve le plus proche

    # Wastewater discharges and discharges
    proximity_to_waste_disposal = Column(String, nullable=True)                 # Est-ce que votre site est situé à proximité d'une décharge ou de rejets d'eaux usées?
    waste_disposal_distance = Column(Float, nullable=True)                      # Distance (en km)

    # Site cleanup
    recent_cleaning = Column(String, nullable=True)                             # Un nettoyage du site a-t-il été effectué dans les 15 jours précédents le prélévement?
    cleaning_frequency = Column(String, nullable=True)                          # A quelle fréquence votre site est-il nettoyé?
    cleaning_method = Column(String, nullable=True)                             # Quelle méthode est utilisée?
    cleaning_responsibility = Column(String, nullable=True)                     # Qui est en charge du nettoyage?
    tide_gauge_presence = Column(String, nullable=True)                         # Y a-t-il un bac à marée sur votre site?

    # Meteorological events
    recent_meteo_events = Column(String, nullable=True)                         # Y a-t-il eu récemment des évenements météorologiques particuliers?
    meteo_interpretation = Column(String, nullable=True)                        # Comment interprétez-vous ces évenements météorologiques?

    # Additional comments
    additional_comments = Column(String, nullable=True)                         # Commentaires supplémentaires

    # panoramic photo
    image = Column(LargeBinary, nullable=True)

    # MACRO --------------------------------------------------------
    macro_weight = Column(Float, nullable=True)                                 # Poids des macrodéchets collectés (en kg)
    macro_volume = Column(Float, nullable=True)                                 # Volume des macrodéchets collectés (en L)
    total_macro_items = Column(Integer, nullable=True)                          # Nb total de macrodéchets collectés
    
    # relationship
    user = relationship('User', back_populates='samples')
    macros = relationship('Macro', back_populates='samples')
    mesos = relationship('Meso', back_populates='samples')
    micros = relationship("Micro", back_populates="samples")

class Macro(Base):
    __tablename__ = 'macro'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    samples_id = Column(UUID, ForeignKey('samples.id'))

    object_row = Column(Integer, nullable=True)                                 # Object
    amount = Column(Integer, nullable=True)                                     # Nombre
    comment = Column(String, nullable=True)                                     # Commentaires

    samples = relationship('Samples', back_populates='macros')

class Meso(Base):
    __tablename__ = 'meso'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    samples_id = Column(UUID, ForeignKey('samples.id'))

    category = Column(String, nullable=True)                                    # Catégorie
    type = Column(String, nullable=True)                                        # Type
    color = Column(String, nullable=True)                                       # Couleur
    texture = Column(String, nullable=True)                                     # Texture
    quadra_1 = Column(Integer, nullable=True)                                   # Nombre dans bande n°1 (bande de 0,5m)
    quadra_2 = Column(Integer, nullable=True)                                   # Nombre dans bande n°2 (bande de 0,5m)
    quadra_3 = Column(Integer, nullable=True)                                   # Nombre dans bande n°3 (bande de 0,5m)
    quadra_4 = Column(Integer, nullable=True)                                   # Nombre dans bande n°4 (bande de 0,5m)
    total_amount = Column(Integer, nullable=True)                               # Somme des 3 bandes (total sur 1,5m)
    comment = Column(String, nullable=True)                                     # Commentaires

    samples = relationship('Samples', back_populates='mesos')

class Micro(Base):
    __tablename__ = 'micro'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    samples_id = Column(UUID, ForeignKey('samples.id'))

    category = Column(String, nullable=True)                                    # Catégorie
    type = Column(String, nullable=True)                                        # Type
    color = Column(String, nullable=True)                                       # Couleur
    texture = Column(String, nullable=True)                                     # Texture
    quadra_1 = Column(Integer, nullable=True)                                   # Nombre dans bande n°1 (bande de 0,5m)
    quadra_2 = Column(Integer, nullable=True)                                   # Nombre dans bande n°2 (bande de 0,5m)
    quadra_3 = Column(Integer, nullable=True)                                   # Nombre dans bande n°3 (bande de 0,5m)
    quadra_4 = Column(Integer, nullable=True)                                   # Nombre dans bande n°4 (bande de 0,5m)
    total_amount = Column(Integer, nullable=True)                               # Somme des 3 bandes (total sur 1,5m)
    comment = Column(String, nullable=True)                                     # Commentaires

    samples = relationship('Samples', back_populates='micros')

class User(Base):
    __tablename__ = 'users'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String, unique=True, nullable=False)                      # Username should be unique
    email = Column(String, unique=True, nullable=False)                         # Email should be unique
    image_url = Column(String, nullable=True)                                   # User's profile image URL
    date_inscription = Column(DateTime, nullable=False, 
                          default=datetime.datetime.now(timezone.utc))          # Date of inscription
    notification = Column(Boolean, default=False)                               # Notification preference
    localisation = Column(Boolean, default=False)                               # Localization preference
    langue = Column(Integer, nullable=True)
    macro_tutoriel = Column(Boolean, default=False)
    micro_tutoriel = Column(Boolean, default=False)
    materials = Column(Boolean, default=False)

    samples = relationship('Samples', back_populates='user')

class TideDataCache(Base):
    __tablename__ = 'tide_data_cache'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    latitude = Column(Float, nullable=False)                                    # Latitude
    longitude = Column(Float, nullable=False)                                   # Longitude
    start_date = Column(DateTime, nullable=False)                               # Date de début
    end_date = Column(DateTime, nullable=False)                                 # Date de fin
    data = Column(JSON, nullable=False)                                         # Données de marée
    last_updated = Column(DateTime, nullable=False, 
                          default=datetime.datetime.now(timezone.utc))          # Date de dernière mise à jour