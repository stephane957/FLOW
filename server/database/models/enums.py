# Description: This file contains all the enums used in the database.
import enum
from utils.enum import BaseEnum

# Sample enums ================================================================

class Academy(enum.Enum):
    OTHER                       = 1
    INTERNATIONAL               = 2
    AIX_MARSEILLE               = 3
    AMIENS                      = 4
    BESANCON                    = 5
    BORDEAUX                    = 6
    CLERMONT_FERRAND            = 7
    CORSE                       = 8
    CRETEIL                     = 9
    DIJON                       = 10
    GRENOBLE                    = 11
    GUADELOUPE                  = 12
    GUYANE                      = 13
    LA_REUNION                  = 14
    LILLE                       = 15
    LIMOGES                     = 16
    LYON                        = 17
    MARTINIQUE                  = 18
    MAYOTTE                     = 19
    MONTPELLIER                 = 20
    NANCY_METZ                  = 21
    NANTES                      = 22
    NICE                        = 23
    NORMANDIE                   = 24
    NOUVELLE_CALEDONIE          = 25
    ORLEANS_TOURS               = 26
    PARIS                       = 27
    POITIERS                    = 28
    POLYNESIE_FRANCAISE         = 29
    REIMS                       = 30
    RENNES                      = 31
    SAINT_PIERRE_ET_MIQUELON    = 32
    STRASBOURG                  = 33
    TOULOUSE                    = 34
    VERSAILLES                  = 35
    WALLIS_ET_FUTUNA            = 36

class AgglomerationType(BaseEnum):
    HAMLE                       = (1, "Hameau")
    VILLAGE                     = (2, "Village")
    BOROUGH                     = (3, "Bourg")
    SMALL_TOWN                  = (4, "Petite ville")
    MEDIUM_TOWN                 = (5, "Ville moyenne")
    LARGE_CITY                  = (6, "Grande ville")
    METROPOLIS                  = (7, "Métropole")

class Answer(BaseEnum):
    YES                         = (1, "Oui")
    NO                          = (2, "Non")
    UNKNOWN                     = (3, "Ne sait pas")

class CleaningFrequency(BaseEnum):
    NO_CLEANING                 = (1, "Pas de nettoyage")
    RARELY                      = (2, "Rarement")
    OCCASIONALLY                = (3, "Occasionnellement")
    REGULARLY                   = (4, "Régulièrement")
    DAILY                       = (5, "Journalier")
    UNKNOWN                     = (6, "Ne sait pas")

class CleaningMethod(BaseEnum):
    MANUAL                      = (1, "Manuelle")
    MECHANICAL                  = (2, "Mécanique")
    MANUAL_AND_MECHANICAL       = (3, "Manuelle et mécanique")
    UNKNOWN                     = (4, "Ne sait pas")

class CleaningResp(BaseEnum):
    MUNICIPALITY                = (1, "Municipalité")
    ASSOCIATION                 = (2, "Association")
    PRIVATE_BODY                = (3, "Organisme privé")
    INDIVIDUALS                 = (4, "Particuliers")
    UNKNOWN                     = (5, "Ne sait pas")

class Direction(BaseEnum):
    NORTH                       = (1, "Nord")
    SOUTH                       = (2, "Sud")
    EAST                        = (3, "Est")
    WEST                        = (4, "Ouest")
    NORTHEAST                   = (5, "Nord-Est")
    NORTHWEST                   = (6, "Nord-Ouest")
    SOUTHEAST                   = (7, "Sud-Est")
    SOUTHWEST                   = (8, "Sud-Ouest")
    UNKNOWN                     = (9, "Ne sait pas")

class Distance(BaseEnum):
    DIRECT                      = (1, "Directe (<200m)")
    CLOSE                       = (2, "200m < d < 1km")
    NEAR                        = (3, "1km < d < 5km")
    FAR                         = (4, "> 5km")

class EnvironmentType(BaseEnum):
    DUNE                        = (1, "Dune")
    FOREST                      = (2, "Forêt")
    VEGETATION                  = (3, "Végétation")
    ROAD                        = (4, "Route")
    CONSTRUCTIONS               = (5, "Constructions")
    OTHER                       = (6, "Autre")
    UNKNOWN                     = (7, "Ne sait pas")

class MacroCategory(BaseEnum):
    PLASTIC                     = (1, "Plastique")
    RUBBER                      = (2, "Caoutchouc")
    TEXTILE                     = (3, "Textile")
    PAPER                       = (4, "Papiers/cartons")
    WOOD                        = (5, "Bois  (usiné, travaillé)")  # Note: les débris naturels de bois, comme le bois flotté, ne sont pas considérés comme un déchet.
    METAL                       = (6, "Métal")
    CERAMIC                     = (7, "Céramique/poterie")
    GLASS                       = (8, "Verre")

class MacroType(enum.Enum):
    # PLASTIC -----------------------------------------------------
    # Lié à la pêche
    FISH_BASKET                 = (1, "Casier (pêche)")
    SEAFOOD_TAG                 = (2, "Marque (crustacés, poissons,...)")
    OCTOPUS_POT                 = (3, "Pot à pieuvre")
    SMALL_NET_FRAGMENT          = (4, "Filet et morceaux de filet (< à 50 cm)")
    LARGE_NET_FRAGMENT          = (5, "Filet et morceaux de filet (> 50 cm)")
    TANGLED_NETS_ROPES          = (6, "Filet et cordage emmêlés")
    WIG                         = (7, "Perruque de chalut")
    PLASTIC_FISH_BOX            = (8, "Caisse à poissons en plastique")
    STYROFOAM_FISH_BOX          = (9, "Caisse à poissons en polystyrène expansé")
    FISHING_LINE_END            = (10, "Bas de ligne (pêche à la ligne)")
    GLOWSTICK                   = (11, "Bâtonnet lumineux (type cyalum)")

    # Aquaculture
    AQUACULTURE_NETS_BAGS       = (12, "Matériels de conchyliculture (Sac/filet/poche pour huîtres, moules,…)")
    OYSTER_SPAT_COLLECTOR       = (13, "Collecteurs à naissains (ostréiculture)")
    FISHING_TRAP                = (14, "Tahitienne (mytiliculture)")

    # Divers maritime
    THICK_ROPE                  = (15, "Cordage (diamètre > 1 cm)")
    THIN_ROPE                   = (16, "Cordage (diamètre < 1 cm)")
    BUOYS_FLOATS                = (17, "Flotteur et bouée (filet, amarrage, etc.)")
    BOAT_RESIN                  = (18, "Résine (coque de bateau)")

    # Habillement
    CLEANING_GLOVE              = (19, "Gant (ménager)")
    INDUSTRIAL_GLOVE            = (20, "Gant (professionnel hors médical)")
    SAFETY_HELMET               = (21, "Casque de chantier")
    FOOTWEAR                    = (22, "Chaussure, sandale")

    # Contenant
    BEVERAGE_CONTAINER          = (23, "Contenant de boisson (bouteille, bidon, contenant divers)")
    CLEANING_SUPPLIES_CONTAINER = (24, "Produit de nettoyage (bouteille, fût, contenant divers)")
    PLASTIC_MEAL_CONTAINER      = (25, "Contenant alimentaire incl. restauration rapide en plastique")
    STYROFOAM_MEAL_CONTAINER    = (26, "Contenant alimentaire incl. restauration rapide en polystyrène expansé")
    BEAUTY_PRODUCT_CONTAINER    = (27, "Contenant de cosmétique (ex : lotion, gel douche, déodorant …)")
    SMALL_OIL_BARREL            = (28, "Bidon et fût d'huile moteur < 50cm")
    LARGE_OIL_BARREL            = (29, "Bidon et fût d'huile moteur > 50cm")
    JERRYCAN                    = (30, "Jerrycan carré, avec poignée")
    INJECTION_CARTRIDGE         = (31, "Cartouche pour injection (ex : silicones, etc.)")
    OTHER_CONTAINER_ITEM        = (32, "Contenant autres usages")
    CRATES_BASKET               = (33, "Caisse, panier, cageot")
    COVERS_LID                  = (34, "Bouchon, capsule, couvercle")
    BUCKET                      = (35, "Seau")

    # Sac/emballage
    CAN_WRAPPER                 = (36, "Emballage de cannette (serre-pack, film plastiques, etc.)")
    SHOPPING_BAG                = (37, "Sac plastique de magasin, de course")
    SMALL_BAG                   = (38, "Petit sac plastique (ex : sachet congélation, sachet de mouchoirs, etc.)")
    BAG_DISPENSER_ROLL          = (39, "Souche de sacs plastiques (distribution)")
    SNACK_PACKAGING             = (40, "Emballage fin/paquets de confiserie et chips")
    HEAVY_DUTY_BAG              = (41, "Sacs résistants (> 25kg, ex : pour engrais, aliment animaux)")
    PRODUCE_NETS                = (42, "Sac/filet à légumes (ex : filet à pomme de terre)")
    BUNDLING_STRAP              = (43, "Feuillard / cercle d’emballage")
    BULK_WRAP                   = (44, "Emballage de produits industriels, film plastique, bâche")
    PET_WASTE_BAG               = (45, "Sac à crotte de chien")

    # Plastique à usage unique "de bouche"
    CIGARETTE_BUTT              = (46, "Mégots")
    LOLLIPOP_STICK              = (47, "Bâton de sucette/glace")
    PLASTIC_CUP                 = (48, "Gobelet en plastique")
    STYROFOAM_CUP               = (49, "Gobelet en polystyrène expansé")
    SINGLE_USE_CUTLERY          = (50, "Couvert jetable")
    SINGLE_USE_PLATE            = (51, "Assiette et plat jetables")
    DRINKING_STRAW              = (52, "Paille")
    COFFEE_STIRRER              = (53, "Touillette de café")

    # Sanitaire
    CONDOM                      = (54, "Préservatif")
    COTTON_SWAB                 = (55, "Coton-tige")
    SANITARY_PAD                = (56, "Serviette hygiénique, protège-slip")
    TAMPON                      = (57, "Tampon périodique, applicateur")
    TOILET_FRESHENER            = (58, "Bloc WC")
    DIAPER                      = (59, "Couches")
    OTHER_SANITARY_ITEM         = (60, "Autre objet sanitaire")

    # Médical
    MEDICINE_PACKAGING          = (61, "Emballage de Médicaments (boite, bocal, tube, plaquette, etc.)")
    SYRINGE                     = (62, "Seringue")
    COVID_FACE_MASK             = (63, "Spécial crise covid19 : Masque jetable (inclus élastiques)")
    COVID_DISPOSABLE_GLOVE      = (64, "Spécial crise covid19 : Gant jetable")
    COVID_FACE_SHIELDS          = (65, "Spécial crise covid19 : Visière")
    COVID_HAND_SANITIZER        = (66, "Spécial crise covid19 : Flacon de solution hydroalcoolique")
    OTHER_COVID_ITEM            = (67, "Spécial crise covid19 : autre objet lié à la crise sanitaire")
    OTHER_MEDICAL_ITEM          = (68, "Autre objet médical (compresse, bandage, pansement, etc.)")

    # Divers
    CAR_PART                    = (69, "Pièces d’automobile")
    LIGHTER                     = (70, "Briquet")
    PEN                         = (71, "Crayon-feutre, stylo")
    COMB                        = (72, "Peigne, brosse à cheveux")
    TOY                         = (73, "Jouet et accessoire festif")
    HUNTING_CARTRIDGE           = (74, "Cartouche de chasse")
    FILTER                      = (75, "Média filtrant / biomédia")
    SYNTHETIC_FOAM              = (76, "Fragment en mousse synthétique")

    # Fragment
    SMALL_PLASTIC_PIECE         = (77, "Fragment non identifiable en plastique (2,5 - 50cm)")
    LARGE_PLASTIC_PIECE         = (78, "Fragment non identifiable en plastique  (> 50 cm)")
    SMALL_STYROFOAM_PIECE       = (79, "Fragment non identifiable en polystyrène expansé (2,5-50 cm)")
    LARGE_STYROFOAM_PIECE       = (80, "Fragment non identifiable en polystyrène expansé (> 50 cm)")

    # Autre
    OTHER_PLASTIC_ITEM          = (81, "Autre objet en plastique (veuillez préciser en commentaires)")

    # CAOUTCHOUC -----------------------------------------------------
    # Avec éléments plastique
    RUBBER_BALLOON              = (82, "Ballon de baudruche")

    # Habillement
    RUBBER_BOOT                 = (83, "Botte")

    # Divers
    RUBBER_TIRE                 = (84, "Pneus et courroies")

    # Autre
    OTHER_RUBBER_ITEM           = (85, "Autre objet en caoutchouc")

    # TEXTILE -----------------------------------------------------
    # Habillement
    APPAREL                     = (86, "Vêtement")

    # Divers
    FURNISHING_TEXTILE          = (87, "Tissu d’ameublement")
    BAG                         = (88, "Sac à dos, à main, …")

    # Medical
    COVID_REUSABLE_MASK         = (89, "Spécial crise covid19 : Masque en tissu")

    # Autre
    OTHER_TEXTILE_ITEM          = (90, "Autre textile (veuillez préciser)")

    # PAPIER -----------------------------------------------------
    # Sac/emballage
    PAPER_BAG                   = (91, "Sac")
    CARDBOARD                   = (92, "Carton")
    CIGARETTE_PACK              = (93, "Paquet de cigarettes")
    
    # Contenant
    MILK_CONTAINER              = (94, "Boîte / Pack de lait")
    OTHER_FOOD_CONTAINER        = (95, "Boîte / Pack alimentaire autre")
    PAPER_CUP                   = (96, "Gobelet")

    # Divers
    PRINT                       = (97, "Journaux, revues")

    # Autre
    OTHER_PAPER_ITEM            = (98, "Autre objet (veuillez préciser)")

    # BOIS -----------------------------------------------------
    # Contenant
    CORK                        = (99, "Bouchon de liège")
    WOODEN_CRATE                = (100, "Cageot")

    # Sac/emballage
    WOOD_PALLET                 = (101, "Palette")

    # Lié à la pêche
    FISHING_CRATE               = (102, "Casier (pêche)")
    FISH_CRATE                  = (103, "Caisse à poissons")

    # Divers
    WOODEN_STICK                = (104, "Bâton de glace, pique, fourchette")
    PAINTBRUSHE                 = (105, "Pinceaux (peinture)")

    # Autre
    SMALL_WOODEN_ITEM           = (106, "Autre pièce/objet < 50 cm (veuillez préciser)")
    LARGE_WOODEN_ITEM           = (107, "Autre pièce/objet > 50 cm (veuillez préciser)")

    # METAL -----------------------------------------------------
    # Contenant
    AEROSOL_CAN                 = (108, "Bombe aérosol, vaporisateur")
    METAL_CAP                   = (109, "Capsule")
    CAN                         = (110, "Canette")
    ALUMINUM_FOIL               = (111, "Emballage aluminium")
    FOOD_CAN                    = (112, "Boîte de conserve")
    STEEL_DRUM                  = (113, "Fût métallique")
    PAINT_CAN                   = (114, "Pot de peinture")

    # Lié à la pêche
    CRUSTACEAN_TRAP             = (115, "Casier à crustacés")
    FISHING_WEIGHT              = (116, "Plomb/lest (pêche à la ligne)")

    # Divers
    SCRAP_METAL                 = (117, "Morceau de ferraille (industriel)")
    DISPOSABLE_GRILL            = (118, "Barbecue jetable")
    ELECTRICAL_COMPONENT         =(119,  "Accessoire électrique")
    WIRE_FENCING                = (120, "Fil de fer, grillage, fil barbelé")

    # Autre
    SMALL_METAL_ITEM            = (121, "Autre pièce/objet métallique < 50 cm (veuillez préciser)")
    LARGE_METAL_ITEM            = (122, "Autre pièce/objet métallique > 50 cm (veuillez préciser)")

    # CERAMIQUE -----------------------------------------------------
    # Divers
    CERAMIC_ITEM                = (123, "Objet/pièce en céramique/poterie (gravats inclus)")

    # VERRE -----------------------------------------------------
    # Divers
    GLASS_BOTTLE                = (124, "Bouteille (inclus fragments)")
    NEON_LIGHT                  = (125, "Ampoule / tube néon")
    OTHER_GLASS_ITEM            = (126, "Autre pièce/objet en verre (veuillez préciser)")

class MacroUsage(BaseEnum):
    FISHING                     = (1, "Lié à la pêche")
    AQUACULTURE                 = (2, "Aquaculture")
    MARINE_MISC                 = (3, "Divers maritime")
    CLOTHING                    = (4, "Habillement")
    CONTAINER                   = (5, "Contenant")
    BAG_WRAPPER                 = (6, "Sac/emballage")
    DISPOSABLE                  = (7, "Plastique à usage unique 'de bouche'")
    SANITARY                    = (8, "Sanitaire")
    MEDICAL                     = (9, "Médical")
    MISCELLANEOUS               = (10, "Divers")
    FRAGMENT                    = (11, "Fragment")
    OTHER                       = (12, "Autre")
    PLASTIC_COMPONENT           = (13, "avec éléments plastique")

class MesoCategory(BaseEnum):
    HARD_PLASTIC                = (1, "Plastique dur")
    FILM                        = (2, "Film")
    FIBRE                       = (3, "Fibre")
    OTHER_FOAM                  = (4, "Autre mousse")
    EXPANDED_POLYSTYRENE        = (5, "Polystyrène expansé")

class MesoType(BaseEnum):
    DEGRADED                    = (1, "Fragment dégradé (vieilli, arrondi, abimé par le temps)")
    SHARP                       = (2, "Fragment anguleux (cassé net, coupant, brut)")
    FILM                        = (3, "Fragment de film plastique")
    FIBRE                       = (4, "Fragment de fibre")
    FOAM                        = (5, "Fragment de mousse")
    POLYSTYRENE                 = (6, "Fragment et bille de polystyrène expansé")

class MesoMicroColor(BaseEnum):
    BLACK                       = (1, "Noir")
    WHITE                       = (2, "Blanc")
    RED                         = (3, "Rouge")
    BLUE                        = (4, "Bleu")
    YELLOW                      = (5, "Jaune")
    GREEN                       = (6, "Vert")
    OTHER                       = (7, "Autre")

class MesoMicroTexture(BaseEnum):
    OPAQUE                      = (1, "Opaque")
    TRANSPARENT                 = (2, "Transparent")

class MicroCategory(BaseEnum):
    HARD_PLASTIC                = (1, "Plastique dur")
    FILM                        = (2, "Film")
    FIBRE                       = (3, "Fibre")
    OTHER_FOAM                  = (4, "Autre mousse")
    EXPANDED_POLYSTYRENE        = (5, "Polystyrène expansé")

class MicroType(BaseEnum):
    PELLET                      = (1, "Granulés")
    DEGRADED                    = (2, "Fragment dégradé (vieilli, arrondi, abimé par le temps)")
    SHARP                       = (3, "Fragment anguleux (cassé net, coupant, brut)")
    FILM                        = (4, "Fragment de film plastique")
    FIBRE                       = (5, "Fragment de fibre")
    FOAM                        = (6, "Fragment de mousse")
    POLYSTYRENE                 = (7, "Fragment et bille de polystyrène expansé")

class PollutionLevel(BaseEnum):
    LOW                         = (1, "Faible")
    MEDIUM                      = (2, "Moyen")
    HIGH                        = (3, "Elevé")
    VERY_HIGH                   = (4, "Très élevé")

class Seaboard(BaseEnum):
    MEDITERRANEAN               = (1, "Mer Méditerrannée")
    ATLANTIC                    = (2, "Atlantique")
    MANCHE                      = (3, "Manche")
    NORTH                       = (4, "Mer du Nord")
    OTHER                       = (5, "Autre")

class SiteLocation(BaseEnum):
    LITTORAL                    = (1, "Littoral")
    RIVER                       = (2, "Berge")

class SiteUsage(BaseEnum):
    NO_USAGE                    = (1, "Pas d'usage")
    WALKING                     = (2, "Balade")
    SWIMMING                    = (3, "Baignade")
    WATER_ACTIVITY              = (4, "Activité nautique")
    FISHING                     = (5, "Pêche")
    OTHERS                      = (6, "Autres")

class WeatherCondition(BaseEnum):
    NO_SPECIAL_CONDITION        = (1, "Pas de conditions météo particulières")
    FLOOD                       = (2, "Crue")
    HEAVY_RAIN                  = (3, "Fortes pluies")
    STORM                       = (4, "Tempête")
    HURRICANE                   = (5, "Ouragan")
    OTHER                       = (6, "Autre")
    UNKNOWN                     = (7, "Ne sait pas")

sample_enum_mappings = {
    'site_location': SiteLocation,
    'seaboard': Seaboard,
    'drift_line_present': Answer,
    'back_site_type': EnvironmentType,
    'currents_direction': Direction,
    'winds_direction': Direction,
    'site_direction': Direction,
    'yearly_usage': SiteUsage,
    'summer_usage': SiteUsage,
    'foot_accessibility': Distance,
    'agglomeration_type': AgglomerationType,
    'immediate_takeaway_food': Answer,
    'proximity_to_waste_disposal': Answer,
    'recent_cleaning': Answer,
    'cleaning_frequency': CleaningFrequency,
    'cleaning_method': CleaningMethod,
    'cleaning_responsibility': CleaningResp,
    'tide_gauge_presence': Answer,
}

meso_enum_mappings = {
    'category': MesoCategory,
    'type': MesoType,
    'color': MesoMicroColor,
    'texture': MesoMicroTexture,
}

micro_enum_mappings = {
    'category': MicroCategory,
    'type': MicroType,
    'color': MesoMicroColor,
    'texture': MesoMicroTexture,
}

info_site_mapping = {
    'site_location'                 : 'D6',
    'seaboard'                      : 'D7',
    'river_name'                    : 'D8',

    'establishment_name'            : 'D9',
    'establishment_commune'         : 'D10',
    'class_level'                   : 'D11',
    'number_of_students'            : 'D12',
    'academy_number'                : 'D13',

    'site_name'                     : 'D14',
    'site_code'                     : 'D15',
    'department_number'             : 'D16',
    'commune_name'                  : 'D17',

    'sample_date'                   : 'D18',
    'sample_time'                   : 'D19',

    'tide_coefficient'              : 'D20',
    'high_tide_time'                : 'D21',

    'collect_participants'          : 'D22',
    'collect_duration'              : 'D23',

    'sorting_participants'          : 'D24',
    'sorting_duration'              : 'D25',

    'bands_studied'                 : 'D26',
    'drift_line_present'            : 'D27',
    'drift_line_count'              : 'D28',

    'transect_length'               : 'D30',
    'back_site_type'                : 'D31',

    'start_gps_latitude'            : 'D32',
    'start_gps_longitude'           : 'D33',
    'end_gps_latitude'              : 'D34',
    'end_gps_longitude'             : 'D35',

    'currents_direction'            : 'D36',
    'winds_direction'               : 'D37',
    'site_direction'                : 'D38',

    'main_material'                 : 'D39',
    'pollution_influence'           : 'D40',

    'yearly_usage'                  : 'D41',
    'summer_usage'                  : 'D42',

    'foot_accessibility'            : 'D43',

    'nearest_agglomeration'         : 'D44',
    'agglomeration_type'            : 'D45',
    'agglomeration_distance'        : 'D46',
    'immediate_infrastructure'      : 'D47',
    'immediate_takeaway_food'       : 'D48',
    'distance_to_coastline'         : 'D49',

    'nearest_port_distance'         : 'D50',
    'nearest_port_name'             : 'D51',
    'nearest_port_type'             : 'D52',
    'nearest_port_size'             : 'D53',

    'nearest_estuary_distance'      : 'D54',
    'nearest_estuary_name'          : 'D55',
    'nearest_river_name'            : 'D56',

    'proximity_to_waste_disposal'   : 'D57',
    'waste_disposal_distance'       : 'D58',

    'recent_cleaning'               : 'D59',
    'cleaning_frequency'            : 'D60',
    'cleaning_method'               : 'D61',
    'cleaning_responsibility'       : 'D62',
    'tide_gauge_presence'           : 'D63',

    'recent_meteo_event'            : 'D64',
    'meteo_interpretation'          : 'D65',
    
    'additional_comments'           : 'D66',
}

info_macro_mapping = {
    'macro_weight'      : 'E7',
    'macro_volume'      : 'E8',
    'total_macro_items' : 'E9',
}

# User enums ==================================================================
class UserLanguage(BaseEnum):
    FRENCH                      = (1, "fr")
    ENGLISH                     = (2, "en")
    SPANISH                     = (3, "es")
    GERMAN                      = (4, "de")
