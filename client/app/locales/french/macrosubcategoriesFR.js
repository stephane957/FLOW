const subCategories = {
    Plastique: 
    [
        // Pêche - Couleur : #F92A82
        {
            name: "Cadenas",
            category:"Peche",
            type: 1,
        },
        {
            name: "Marque",
            category:"Peche",
            type: 2,
        },
        {
            name: "Pot de poulpe",
            category:"Peche",
            type: 3,
        },
        {
            name: "Filet/Morceaux de filet",
            category:"Peche",
            type: 4,
        },
        {
            name: "Filet/Rope emmêlé",
            category:"Peche",
            type: 6,
        },
        {
            name: "Caisse en plastique",
            category:"Peche",
            type: 8,
        },
        {
            name: "Caisse en polystyrène expansé",
            category:"Peche",
            type: 9,
        },
        {
            name: "Ligne de pêche",
            category:"Peche",
            type: 10,
        },
        {
            name:"Bâton lumineux",
            category:"Peche",
            type: 11,
        },
        // Aquaculture - Couleur : #023C40
        {
            name:"Outils de mollusques",
            category:"Aquaculture",
            type: 12,
        },
        {
            name: "Collecteurs de naissains",
            category:"Aquaculture",
            type: 13,
        },
        {
            name: "Tahitienne",
            category:"Aquaculture",
            type: 14,
        },
        // Maritime - Couleur : #5A3A31
        {
            name: "Corde",
            category:"Maritime",
            type: 15,
        },
        {
            name: "Bouée/Flotteur",
            category:"Maritime",
            type: 17,
        },
        {
            name:"Résine",
            category:"Maritime",
            type: 18,
        },
        // Habillage - Couleur : #FFFFFA
        {
            name:"Gant",
            category:"Habillage",
            type: 19,
        },
        {
            name:"Casque",
            category:"Habillage",
            type: 21,
        },
        {
            name:"Chaussure/Sandale",
            category:"Habillage",
            type: 22,
        },
        // Conteneur - Couleur : #BC7C9C
        {
            name:"Bouteille",
            category:"Conteneur",
            type: 23,
        },
        {
            name:"Nettoyeur",
            category:"Conteneur",
            type: 24,
        },
        {
            name:"Boîte alimentaire",
            category:"Conteneur",
            type: 25,
        },
        {
            name:"Boîte en polystyrène",
            category:"Conteneur",
            type: 26,
        },
        {
            name:"Entonnoir et contenant de gaz",
            category:"Conteneur",
            type: 28,
        },
        {
            name:"Bidon carré",
            category:"Conteneur",
            type: 30,
        }, 
        {
            name:"Cartouche d'injection",
            category:"Conteneur",
            type: 31,
        },
        {
            name:"Autre conteneur",
            category:"Conteneur",
            type: 32,
        },
        {
            name:"Caisse/Panier",
            category:"Conteneur",
            type: 33,
        },
        {
            name:"Bouchon/Couvercle",
            category:"Conteneur",
            type: 34,
        },
        {
            name:"Seau",
            category:"Conteneur",
            type: 35,
        },
        // Emballage : #FA7921
        {
            name:"Emballage de conserve",
            category:"Emballage",
            type: 36,
        },
        {
            name:"Sac d'épicerie",
            category:"Emballage",
            type: 37,
        },
        {
            name:"Sac en plastique",
            category:"Emballage",
            type: 38,
        },
        {
            name:"Emballage de chips",
            category:"Emballage",
            type: 40,
        },
        {
            name:"Sac de construction",
            category:"Emballage",
            type: 41,
        },
        {
            name:"Pochette de légumes",
            category:"Emballage",
            type: 42,
        }, 
        {
            name:"Emballage industriel",
            category:"Emballage",
            type: 44,
        },
        {
            name:"Sac à excréments de chien",
            category:"Emballage",
            type: 45,
        },
        // Plastiques à usage unique : #EF767A
        {
            name:"Mégot de cigarette",
            category:"Plastique",
            type: 46,
        },
        {
            name:"Bâton de sucette",
            category:"Plastique",
            type: 47,
        },
        {
            name:"Gobelet en plastique",
            category:"Plastique",
            type: 48,
        },
        {
            name:"Gobelet en polystyrène",
            category:"Plastique",
            type: 49,
        },
        {
            name:"Couverts en plastique",
            category:"Plastique",
            type: 50,
        },
        {
            name:"Gobelets/assiettes en plastique",
            category:"Plastique",
            type: 51,
        }, 
        {
            name:"Paille",
            category:"Plastique",
            type: 52,
        },
        {
            name:"Bâton de café",
            category:"Plastique",
            type: 53,
        },
        // Sanitaire - Couleur : #23F0C7
        {
            name:"Préservatif",
            category:"Sanitaire",
            type: 54,
        },
        {
            name:"Coton-tige",
            category:"Sanitaire",
            type: 55,
        },
        {
            name:" Lingettes hygiéniques",
            category:"Sanitaire",
            type: 56,
        },
        {
            name:"Tampon",
            category:"Sanitaire",
            type: 57,
        },
        {
            name:"Bloc toilette",
            category:"Sanitaire",
            type: 58,
        },
        {
            name:"Couche",
            category:"Sanitaire",
            type: 59,
        }, 
        {
            name:"Autre sanitaire",
            category:"Sanitaire",
            type: 60,

        },
        // Médical - Couleur : #ABA194
        {
            name:"Conteneur médical",
            category:"Médical",
            type: 61,
        },
        {
            name:"Seringue",
            category:"Médical",
            type: 62,
        },
        {
            name:"Autre médical",
            category:"Médical",
            type: 68,
        }, 
        // Divers - Couleur : #B14AED
        {
            name:"Pièce de voiture",
            category:"Divers",
            type: 69,
        },
        {
            name:"Briquet",
            category:"Divers",
            type: 70,
        },
        {
            name:"Stylo/Feutre",
            category:"Divers",
            type: 71,
        },
        {
            name:"Brosse à cheveux",
            category:"Divers",
            type: 72,
        },
        {
            name:"Jouet",
            category:"Divers",
            type: 73,
        },
        {
            name:"Douille de fusil",
            category:"Divers",
            type: 74,
        },  
        {
            name:"Cartouche/Filtres biomédias",
            category:"Divers",
            type: 75,
        },
        // Fragment - Couleur : #F686BD
        {
            name:"Mousse synthétique",
            category:"Fragment",
            type: 76,
        },
        {
            name:"Fragment de plastique (<50cm)",
            category:"Fragment",
            type: 77,
        },
        {
            name:"Fragment de plastique (>50cm)",
            category:"Fragment",
            type: 78,
        },
        {
            name:"Fragment de polystyrène (<50cm)",
            category:"Fragment",
            type: 79,
        },
        {
            name:"Fragment de polystyrène (>50cm)",
            category:"Fragment",
            type: 80,
        },
        // Autre - Couleur : #40434E
        {
            name:"Autres plastiques",
            category:"Autre",
            type: 81,
        }, 
    ],
    Caoutchouc:[
        // Avec plastique - Couleur : #BC7C9C
        {
            name:"Ballon",
            category:"Plastique",
            type: 82,
        },
        // Habillage - Couleur : #FA7921
        {
            name:"Bottes",
            category:"Habillage",
            type: 83,
        },
        // Divers - Couleur : #23F0C7
        {
            name:"Pneu",
            category:"Divers",
            type: 84,
        },
        // Autre - Couleur : #40434E
        {
            name:"Autre",
            category:"Autre",
            type: 85,
        }
    ],
    Textile:[
        // Habillage - Couleur : #FA7921
        {
            name:"Vêtements",
            category:"Habillage",
            type: 86,
        },
        // Autre - Couleur : #40434E
        {
            name:"Autre",
            category:"Autre",
            type: 90,
        }
    ],
    Papier:[
        // Emballage - Couleur : #FA7921
        {
            name:"Sac",
            category:"Emballage",
            type: 91,
        },
        {
            name:"Carton",
            category:"Emballage",
            type: 92,
        },
        {
            name:"Paquet de cigarettes",
            category:"Emballage",
            type: 93,
        },
        // Conteneur - Couleur : #BC7C9C
        {
            name:"Brique de lait",
            category:"Conteneur",
            type: 94,
        },
        {
            name:"Boîte alimentaire",
            category:"Conteneur",
            type: 95,
        },
        {
            name:"Gobelet",
            category:"Conteneur",
            type: 96,
        },
        // Divers - Couleur : #B14AED
        {
            name:"Journal",
            category:"Divers",
            type: 97,
        },
        // Autre - Couleur : #40434E
        {
            name:"Autre",
            category:"Autre",
            type: 98,
        }
    ],
    Bois:[
        // Emballage - Couleur : #FA7921
        {
            name:"Palette",
            category:"Emballage",
            type: 101,
        },
        // Conteneur - Couleur : #BC7C9C
        {
            name:"Liège",
            category:"Conteneur",
            type: 99,
        },
        {
            name:"Panier",
            category:"Conteneur",
            type: 100,
        },
        // Pêche - Couleur : #F92A82
        {
            name:"Piège à poissons",
            category:"Peche",
            type: 102,
        },
        {
            name:"Panier à poissons",
            category:"Peche",
            type: 103,
        },
        // Divers - Couleur : #B14AED
        {
            name:"Ustensile/Bâtonnet de glace",
            category:"Divers",
            type: 104,
        },
        {
            name:"Pinceau",
            category:"Divers",
            type: 105,
        },
        // Autre - Couleur : #40434E
        {
            name:"Autre",
            category:"Autre",
            type: 106,
        }
    ],
    Metal:[
     
        // Conteneur - Couleur : #BC7C9C
        {
            name:"Aérosol",
            category:"Conteneur",
            type: 108,
        },
        {
            name:"Capsule",
            category:"Conteneur",
            type: 109,
        },
        {
            name:"Boîte de conserve",
            category:"Conteneur",
            type: 110,
        },
        {
            name:"Papier aluminium",
            category:"Conteneur",
            type: 111,
        },
        {
            name:"Boîte de conserve en fer blanc",
            category:"Conteneur",
            type: 112,
        },
        {
            name:"Entonnoir",
            category:"Conteneur",
            type: 113,
        },
        {
            name:"Seau de peinture",
            category:"Conteneur",
            type: 114,
        },
        // Pêche - Couleur : #F92A82
        {
            name:"Piège à poissons",
            category:"Peche",
            type: 115,
        },
        {
            name:"Plomb de pêche",
            category:"Peche",
            type: 116,
        },
        // Divers - Couleur : #B14AED
        {
            name:"Déchet métallique",
            category:"Divers",
            type: 117,
        },
        {
            name:"Barbecue jetable",
            category:"Divers",
            type: 118,
        },
        {
            name:"Accessoire électrique",
            category:"Divers",
            type: 110,
        },
        {
            name:"Filet",
            category:"Divers",
            type: 120,
        },
        // Autre - Couleur : #40434E
        {
            name:"Autre",
            category:"Autre",
            type: 121,
        }
    ],
    Ceramique:[
        // Divers - Couleur : #B14AED
        {
            name:"Céramique",
            category:"Divers",
            type: 123,
        },
    ],
    Verre:[
        // Divers - Couleur : #B14AED
        {
            name:"Bouteille",
            category:"Divers",
            type: 124,
        },
        {
            name:"Ampoule",
            category:"Divers",
            type: 125,
        },
        {
            name:"Autre",
            category:"Divers",
            type: 126,
        },
    ]
}

export default subCategories;
