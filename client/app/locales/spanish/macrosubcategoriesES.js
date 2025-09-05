const subCategories = {
    Plastico: 
    [
        // Pesca - Color: #F92A82
        {
            name: "Candado",
            category:"Pesca",
            type: 1,
        },
        {
            name: "Marcador",
            category:"Pesca",
            type: 2,
        },
        {
            name: "Bote de pulpo",
            category:"Pesca",
            type: 3,
        },
        {
            name: "Red/Trozos de red",
            category:"Pesca",
            type: 4,
        },
        {
            name: "Red/Cuerda enredada",
            category:"Pesca",
            type: 6,
        },
        {
            name: "Caja de pescado de plástico",
            category:"Pesca",
            type: 8,
        },
        {
            name: "Caja de pescado de poliestireno expandido",
            category:"Pesca",
            type: 9,
        },
        {
            name: "Línea de pesca",
            category:"Pesca",
            type: 10,
        },
        {
            name:"Palo luminoso",
            category:"Pesca",
            type: 11,
        },
        // Acuicultura - Color: #023C40
        {
            name:"Herramientas de moluscos",
            category:"Acuicultura",
            type: 12,
        },
        {
            name: "Recolectores de larvas",
            category:"Acuicultura",
            type: 13,
        },
        {
            name: "Tahitiana",
            category:"Acuicultura",
            type: 14,
        },
        // Marítimo - Color: #5A3A31
        {
            name: "Cuerda",
            category:"Maritimo",
            type: 15,
        },
        {
            name: "Boyas/Flotadores",
            category:"Maritimo",
            type: 17,
        },
        {
            name:"Resina",
            category:"Maritimo",
            type: 18,
        },
        // Vestimenta - Color: #FFFFFA
        {
            name:"Guante",
            category:"Vestimenta",
            type: 19,
        },
        {
            name:"Casco",
            category:"Vestimenta",
            type: 21,
        },
        {
            name:"Zapato/Sandalia",
            category:"Vestimenta",
            type: 22,
        },
        // Contenedor - Color: #BC7C9C
        {
            name:"Botella",
            category:"Contenedor",
            type: 23,
        },
        {
            name:"Limpiador",
            category:"Contenedor",
            type: 24,
        },
        {
            name:"Envase de alimentos",
            category:"Contenedor",
            type: 25,
        },
        {
            name:"Caja de poliestireno",
            category:"Contenedor",
            type: 26,
        },
        {
            name:"Embudo y recipiente de gas",
            category:"Contenedor",
            type: 28,
        },
        {
            name:"Bidón cuadrado",
            category:"Contenedor",
            type: 30,
        }, 
        {
            name:"Cartucho de inyección",
            category:"Contenedor",
            type: 31,
        },
        {
            name:"Otro contenedor",
            category:"Contenedor",
            type: 32,
        },
        {
            name:"Caja/Cesta",
            category:"Contenedor",
            type: 33,
        },
        {
            name:"Tapón/Tapa",
            category:"Contenedor",
            type: 34,
        },
        {
            name:"Cubo",
            category:"Contenedor",
            type: 35,
        },
        // Embalaje - Color: #FA7921
        {
            name:"Embalaje de conserva",
            category:"Embalaje",
            type: 36,
        },
        {
            name:"Bolsa de compra",
            category:"Embalaje",
            type: 37,
        },
        {
            name:"Bolsa de plástico",
            category:"Embalaje",
            type: 38,
        },
        {
            name:"Embalaje de patatas fritas",
            category:"Embalaje",
            type: 40,
        },
        {
            name:"Bolsa de construcción",
            category:"Embalaje",
            type: 41,
        },
        {
            name:"Bolsa de verduras",
            category:"Embalaje",
            type: 42,
        }, 
        {
            name:"Embalaje industrial",
            category:"Embalaje",
            type: 44,
        },
        {
            name:"Bolsa para excrementos de perro",
            category:"Embalaje",
            type: 45,
        },
        // Plásticos de un solo uso - Color: #EF767A
        {
            name:"Colilla de cigarrillo",
            category:"Plastico",
            type: 46,
        },
        {
            name:"Palo de chupete",
            category:"Plastico",
            type: 47,
        },
        {
            name:"Vaso de plástico",
            category:"Plastico",
            type: 48,
        },
        {
            name:"Vaso de poliestireno",
            category:"Plastico",
            type: 49,
        },
        {
            name:"Cubiertos de plástico",
            category:"Plastico",
            type: 50,
        },
        {
            name:"Vasos/platos de plástico",
            category:"Plastico",
            type: 51,
        }, 
        {
            name:"Pajita",
            category:"Plastico",
            type: 52,
        },
        {
            name:"Palo de café",
            category:"Plastico",
            type: 53,
        },
        // Sanitario - Color: #23F0C7
        {
            name:"Preservativo",
            category:"Sanitario",
            type: 54,
        },
        {
            name:"Hisopo",
            category:"Sanitario",
            type: 55,
        },
        {
            name:"Toallitas higiénicas",
            category:"Sanitario",
            type: 56,
        },
        {
            name:"Tampón",
            category:"Sanitario",
            type: 57,
        },
        {
            name:"Bloque de inodoro",
            category:"Sanitario",
            type: 58,
        },
        {
            name:"Pañal",
            category:"Sanitario",
            type: 59,
        }, 
        {
            name:"Otro sanitario",
            category:"Sanitario",
            type: 60,
        },
        // Médico - Color: #ABA194
        {
            name:"Contenedor médico",
            category:"Medico",
            type: 61,
        },
        {
            name:"Jeringa",
            category:"Medico",
            type: 62,
        },
        {
            name:"Otro médico",
            category:"Medico",
            type: 68,
        }, 
        // Diverso - Color: #B14AED
        {
            name:"Pieza de coche",
            category:"Diverso",
            type: 69,
        },
        {
            name:"Encendedor",
            category:"Diverso",
            type: 70,
        },
        {
            name:"Pluma/Marcador",
            category:"Diverso",
            type: 71,
        },
        {
            name:"Cepillo para el pelo",
            category:"Diverso",
            type: 72,
        },
        {
            name:"Juguete",
            category:"Diverso",
            type: 73,
        },
        {
            name: "Cartucho de escopeta",
            category: "Diverso",
            type: 74
        },
        {
            name:"Cartucho/Filtros biológicos",
            category:"Diverso",
            type: 75,
        },
        // Fragmento - Color: #F686BD
        {
            name:"Espuma sintética",
            category:"Fragmento",
            type: 76,
        },
        {
            name:"Fragmento de plástico (<50cm)",
            category:"Fragmento",
            type: 77,
        },
        {
            name:"Fragmento de plástico (>50cm)",
            category:"Fragmento",
            type: 78,
        },
        {
            name:"Fragmento de poliestireno (<50cm)",
            category:"Fragmento",
            type: 79,
        },
        {
            name:"Fragmento de poliestireno (>50cm)",
            category:"Fragmento",
            type: 80,
        },
        // Otro - Color: #40434E
        {
            name:"Otros plásticos",
            category:"Otro",
            type: 81,
        }, 
    ],
    Caucho:[
        // Con plástico - Color: #BC7C9C
        {
            name:"Balón",
            category:"Plastico",
            type: 82,
        },
        // Vestimenta - Color: #FA7921
        {
            name:"Botas",
            category:"Vestimenta",
            type: 83,
        },
        // Diverso - Color: #23F0C7
        {
            name:"Neumático",
            category:"Diverso",
            type: 84,
        },
        // Otro - Color: #40434E
        {
            name:"Otro",
            category:"Otro",
            type: 85,
        }
    ],
    Textil:[
        // Vestimenta - Color: #FA7921
        {
            name:"Ropa",
            category:"Vestimenta",
            type: 86,
        },
        // Otro - Color: #40434E
        {
            name:"Otro",
            category:"Otro",
            type: 90,
        }
    ],
    Papel:[
        // Embalaje - Color: #FA7921
        {
            name:"Bolsa",
            category:"Embalaje",
            type: 91,
        },
        {
            name:"Cartón",
            category:"Embalaje",
            type: 92,
        },
        {
            name:"Paquete de cigarrillos",
            category:"Embalaje",
            type: 93,
        },
        // Contenedor - Color: #BC7C9C
        {
            name:"Tetra Pak",
            category:"Contenedor",
            type: 94,
        },
        {
            name:"Envase alimentario",
            category:"Contenedor",
            type: 95,
        },
        {
            name:"Vaso",
            category:"Contenedor",
            type: 96,
        },
        // Diverso - Color: #B14AED
        {
            name:"Periódico",
            category:"Diverso",
            type: 97,
        },
        // Otro - Color: #40434E
        {
            name:"Otro",
            category:"Otro",
            type: 98,
        }
    ],
    Madera:[
        // Embalaje - Color: #FA7921
        {
            name:"Paleta",
            category:"Embalaje",
            type: 101,
        },
        // Contenedor - Color: #BC7C9C
        {
            name:"Corcho",
            category:"Contenedor",
            type: 99,
        },
        {
            name:"Cesta",
            category:"Contenedor",
            type: 100,
        },
        // Pesca - Color: #F92A82
        {
            name:"Trampa para peces",
            category:"Pesca",
            type: 102,
        },
        {
            name:"Cesto para peces",
            category:"Pesca",
            type: 103,
        },
        // Diverso - Color: #B14AED
        {
            name:"Utensilio/Palo de helado",
            category:"Diverso",
            type: 104,
        },
        {
            name:"Pincel",
            category:"Diverso",
            type: 105,
        },
        // Otro - Color: #40434E
        {
            name:"Otro",
            category:"Otro",
            type: 106,
        }
    ],
    Metal:[
     
        // Contenedor - Color: #BC7C9C
        {
            name:"Aerosol",
            category:"Contenedor",
            type: 108,
        },
        {
            name:"Cápsula",
            category:"Contenedor",
            type: 109,
        },
        {
            name:"Lata",
            category:"Contenedor",
            type: 110,
        },
        {
            name:"Papel de aluminio",
            category:"Contenedor",
            type: 111,
        },
        {
            name:"Lata de hojalata",
            category:"Contenedor",
            type: 112,
        },
        {
            name:"Embudo",
            category:"Contenedor",
            type: 113,
        },
        {
            name:"Bote de pintura",
            category:"Contenedor",
            type: 114,
        },
        // Pesca - Color: #F92A82
        {
            name:"Trampa para peces",
            category:"Pesca",
            type: 115,
        },
        {
            name:"Plomo de pesca",
            category:"Pesca",
            type: 116,
        },
        // Diverso - Color: #B14AED
        {
            name:"Desecho metálico",
            category:"Diverso",
            type: 117,
        },
        {
            name:"Barbacoa desechable",
            category:"Diverso",
            type: 118,
        },
        {
            name:"Accesorio eléctrico",
            category:"Diverso",
            type: 110,
        },
        {
            name:"Red",
            category:"Diverso",
            type: 120,
        },
        // Otro - Color: #40434E
        {
            name:"Otro",
            category:"Otro",
            type: 121,
        }
    ],
    Ceramica:[
        // Diverso - Color: #B14AED
        {
            name:"Cerámica",
            category:"Diverso",
            type: 123,
        },
    ],
    Vidrio:[
        // Diverso - Color: #B14AED
        {
            name:"Botella",
            category:"Diverso",
            type: 124,
        },
        {
            name:"Bombilla",
            category:"Diverso",
            type: 125,
        },
        {
            name:"Otro",
            category:"Diverso",
            type: 126,
        },
    ]
}

export default subCategories;
