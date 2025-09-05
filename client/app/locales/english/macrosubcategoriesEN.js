const subCategories = {
    Plastic: 
    [
        // Fishing - Color : #F92A82
        {
            name: "Locker",
            category:"Fishing",
            type: 1,
        },
        {
            name: "Brand",
            category:"Fishing",
            type: 2,
        },
        {
            name: "Octopus pot",
            category:"Fishing",
            type: 3,
        },
        {
            name: "Net/Pieces of net",
            category:"Fishing",
            type: 4,
        },
        {
            name: "Entangled net/Rope",
            category:"Fishing",
            type: 6,
        },
        {
            name: "Plastic fish crate",
            category:"Fishing",
            type: 8,
        },
        {
            name: "Expanded polystyrene fish crate",
            category:"Fishing",
            type: 9,
        },
        {
            name: "Fishing line",
            category:"Fishing",
            type: 10,
        },
        {
            name:"Glow stick",
            category:"Fishing",
            type: 11,
        },
        // Aquaculture - Color : #023C40
        {
            name:"Shellfish tools",
            category:"Aquaculture",
            type: 12,
        },
        {
            name: "Spat collectors",
            category:"Aquaculture",
            type: 13,
        },
        {
            name: "Tahitienne",
            category:"Aquaculture",
            type: 14,
        },
        // Maritime - Color : #5A3A31
        {
            name: "Rope",
            category:"Maritime",
            type: 15,
        },
        {
            name: "Buoy/Floater",
            category:"Maritime",
            type: 17,
        },
        {
            name:"Resin",
            category:"Maritime",
            type: 18,
        },
        // Dressing - Color : #FFFFFA
        {
            name:"Glove",
            category:"Dressing",
            type: 19,
        },
        {
            name:"Helmet",
            category:"Dressing",
            type: 21,
        },
        {
            name:"Shoe/Sandal",
            category:"Dressing",
            type: 22,
        },
        // Container - Color : #BC7C9C
        {
            name:"Bottle",
            category:"Container",
            type: 23,
        },
        {
            name:"Cleaner",
            category:"Container",
            type: 24,
        },
        {
            name:"Food box",
            category:"Container",
            type: 25,
        },
        {
            name:"Polystyrene box",
            category:"Container",
            type: 26,
        },
        {
            name:"Funnel and gas container",
            category:"Container",
            type: 28,
        },
        {
            name:"Square jerry can",
            category:"Container",
            type: 30,
        }, 
        {
            name:"Injection cartridge",
            category:"Container",
            type: 31,
        },
        {
            name:"Other container",
            category:"Container",
            type: 32,
        },
        {
            name:"Crate/Basket",
            category:"Container",
            type: 33,
        },
        {
            name:"Plug/Lid",
            category:"Container",
            type: 34,
        },
        {
            name:"Bucket",
            category:"Container",
            type: 35,
        },
        // Packaging : #FA7921
        {
            name:"Can packaging",
            category:"Packaging",
            type: 36,
        },
        {
            name:"Grocery bag",
            category:"Packaging",
            type: 37,
        },
        {
            name:"Plastic bag",
            category:"Packaging",
            type: 38,
        },
        {
            name:"Chip packaging",
            category:"Packaging",
            type: 40,
        },
        {
            name:"Construction bag",
            category:"Packaging",
            type: 41,
        },
        {
            name:"Vegetable pouch",
            category:"Packaging",
            type: 42,
        }, 
        {
            name:"Industrial packaging",
            category:"Packaging",
            type: 44,
        },
        {
            name:"Dog poop bag",
            category:"Packaging",
            type: 45,
        },
        // Single use plastics : #EF767A
        {
            name:"Cigarette butt",
            category:"Plastic",
            type: 46,
        },
        {
            name:"Lollipop stick",
            category:"Plastic",
            type: 47,
        },
        {
            name:"Plastic cup",
            category:"Plastic",
            type: 48,
        },
        {
            name:"Polystyrene cup",
            category:"Plastic",
            type: 49,
        },
        {
            name:"Plastic cutlery",
            category:"Plastic",
            type: 50,
        },
        {
            name:"Plastic cups/plates",
            category:"Plastic",
            type: 51,
        }, 
        {
            name:"Straw",
            category:"Plastic",
            type: 52,
        },
        {
            name:"Coffee stick",
            category:"Plastic",
            type: 53,
        },
        //Sanitary - Color : #23F0C7
        {
            name:"Condom",
            category:"Sanitary",
            type: 54,
        },
        {
            name:"Q-Tip",
            category:"Sanitary",
            type: 55,
        },
        {
            name:"Hygiene wipes",
            category:"Sanitary",
            type: 56,
        },
        {
            name:"Tampon",
            category:"Sanitary",
            type: 57,
        },
        {
            name:"Toilet bloc",
            category:"Sanitary",
            type: 58,
        },
        {
            name:"Diaper",
            category:"Sanitary",
            type: 59,
        }, 
        {
            name:"Other sanitary",
            category:"Sanitary",
            type: 60,
        },
        // Medical - Color : #ABA194
        {
            name:"Medical container",
            category:"Medical",
            type: 61,
        },
        {
            name:"Syringe",
            category:"Medical",
            type: 62,
        },
        {
            name:"Other medical",
            category:"Medical",
            type: 68,
        }, 
        // Diverse - Color : #B14AED
        {
            name:"Car piece",
            category:"Diverse",
            type: 69,
        },
        {
            name:"Lighter",
            category:"Diverse",
            type: 70,
        },
        {
            name:"Pen/Marker",
            category:"Diverse",
            type: 71,
        },
        {
            name:"Hairbrush",
            category:"Diverse",
            type: 72,
        },
        {
            name:"Toy",
            category:"Diverse",
            type: 73,
        },
        {
            name:"Gun shell",
            category:"Diverse",
            type: 74,
        }, 
        {
            name:"Biomedia/Filters",
            category:"Diverse",
            type: 75,
        },
        // Fragment - Color : #F686BD
        {
            name:"Synthetic foam",
            category:"Fragment",
            type: 76,
        },
        {
            name:"Plastic fragment (<50cm)",
            category:"Fragment",
            type: 77,
        },
        {
            name:"Plastic fragment (>50cm)",
            category:"Fragment",
            type: 78,
        },
        {
            name:"Polystyrene fragment(<50cm)",
            category:"Fragment",
            type: 79,
        },
        {
            name:"Polystyrene fragment(>50cm)",
            category:"Fragment",
            type: 80,
        },
        // Other - Color : #40434E
        {
            name:"Other plastics",
            category:"Other",
            type: 81,
        }, 
    ],
    Rubber:[
        // With plastic - Color : #BC7C9C
        {
            name:"Balloon",
            category:"Plastic",
            type: 82,
        },
        // Dressing - Color : #FA7921
        {
            name:"Boots",
            category:"Dressing",
            type: 83,
        },
        // Diverse - Color : #23F0C7
        {
            name:"Tire",
            category:"Diverse",
            type: 84,
        },
        // Other - Color : #40434E
        {
            name:"Other",
            category:"Other",
            type: 85,
        }
    ],
    Textile:[
        // Dressing - Color : #FA7921
        {
            name:"Clothing",
            category:"Dressing",
            type: 86,
        },
        // Other - Color : #40434E
        {
            name:"Other",
            category:"Other",
            type: 90,
        }
    ],
    Paper:[
        // Packaging - Color : #FA7921
        {
            name:"Bag",
            category:"Packaging",
            type: 91,
        },
        {
            name:"Carton",
            category:"Packaging",
            type: 92,
        },
        {
            name:"Cigarette pack",
            category:"Packaging",
            type: 93,
        },
        // Container - Color : #BC7C9C
        {
            name:"Milk Box",
            category:"Container",
            type: 94,
        },
        {
            name:"Food Box",
            category:"Container",
            type: 95,
        },
        {
            name:"Cup",
            category:"Container",
            type: 96,
        },
        // Diverse - Color : #B14AED
        {
            name:"Journal",
            category:"Diverse",
            type: 97,
        },
        // Other - Color : #40434E
        {
            name:"Other",
            category:"Other",
            type: 98,
        }
    ],
    Wood:[
        // Packaging - Color : #FA7921
        {
            name:"Pallet",
            category:"Packaging",
            type: 101,
        },
        // Container - Color : #BC7C9C
        {
            name:"Cork",
            category:"Container",
            type: 99,
        },
        {
            name:"Basket",
            category:"Container",
            type: 100,
        },
        // Fishing - Color : #F92A82
        {
            name:"Fish trap",
            category:"Fishing",
            type: 102,
        },
        {
            name:"Fish Basket",
            category:"Fishing",
            type: 103,
        },
        // Diverse - Color : #B14AED
        {
            name:"Utensil/Popsicle stick",
            category:"Diverse",
            type: 104,
        },
        {
            name:"Paintbrush",
            category:"Diverse",
            type: 105,
        },
        // Other - Color : #40434E
        {
            name:"Other",
            category:"Other",
            type: 106,
        }
    ],
    Metal:[
     
        // Container - Color : #BC7C9C
        {
            name:"Aerosol",
            category:"Container",
            type: 108,
        },
        {
            name:"Capsule",
            category:"Container",
            type: 109,
        },
        {
            name:"Can",
            category:"Container",
            type: 110,
        },
        {
            name:"Aluminum foil",
            category:"Container",
            type: 111,
        },
        {
            name:"Tin can",
            category:"Container",
            type: 112,
        },
        {
            name:"Funnel",
            category:"Container",
            type: 113,
        },
        {
            name:"Paint bucket",
            category:"Container",
            type: 114,
        },
        // Fishing - Color : #F92A82
        {
            name:"Fish trap",
            category:"Fishing",
            type: 115,
        },
        {
            name:"Fishing Sinker",
            category:"Fishing",
            type: 116,
        },
        // Diverse - Color : #B14AED
        {
            name:"Metal scrap",
            category:"Diverse",
            type: 117,
        },
        {
            name:"Disposable barbecue",
            category:"Diverse",
            type: 118,
        },
        {
            name:"Electric accessory",
            category:"Diverse",
            type: 110,
        },
        {
            name:"Netting",
            category:"Diverse",
            type: 120,
        },
        // Other - Color : #40434E
        {
            name:"Other",
            category:"Other",
            type: 121,
        }
    ],
    Ceramic:[
        // Diverse - Color : #B14AED
        {
            name:"Ceramic",
            category:"Diverse",
            type: 123,
        },
    ],
    Glass:[
        // Diverse - Color : #B14AED
        {
            name:"Bottle",
            category:"Diverse",
            type: 124,
        },
        {
            name:"Lightbulb",
            category:"Diverse",
            type: 125,
        },
        {
            name:"Other",
            category:"Diverse",
            type: 126,
        },
    ]
}

export default subCategories;