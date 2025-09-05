import icons from './icons';
import { tuto_images, quiz_images } from './images'

export const MACRO_TUTORIAL_SLIDES = [
    {
        id: 1,
        title: "Trouver le site d'étude",
        description: "Trouvez un site accessible à pied (entre 30m et 100m).",
        image: tuto_images.tutoStep1
    },
    {
        id: 2,
        title: "Trouver la laisse de berge/mer",
        description: "Sélectionnez la zone la plus polluée du site.",
        image: tuto_images.tutoStep2
    },
    {
        id: 3,
        title: "Photo panoramique",
        description: "Prenez une photo du site de prélèvement (la laisse de berge/mer et la pollution).",
        image: tuto_images.tutoStep3
    },
    {
        id: 4,
        title: "Délimiter la zone de prélèvement",
        description: "Déroulez la corde ou le mètre entre 30m et (idéalement) 100m.",
        image: tuto_images.tutoStep4
    },
    {
        id: 5,
        title: "Collecter les macrodéchets",
        description: "Inscrire les déchets ramassés dans l'application.\n\nPlacez les macrodéchets dans des sacs poubelles après les avoir enregistré.",
        image: tuto_images.tutoStep5
    },
    {
        id: 6,
        title: "Peser les déchets",
        description: "Mesurez le poids total des déchets.\n\nEstimez également le volume.",
        image: tuto_images.tutoStep6
    },
    {
        id: 7,
        title: "Jeter les déchets",
        description: "Disposer des déchets dans une poubelle appropriée",
        image: tuto_images.tutoStep7
    },
]

export const MICRO_TUTORIAL_SLIDES = [
    {
        id: 1,
        title: "En plaçant la corde",
        description: "Ajoutez des quadrats de 50x50 cm uniformément le long de votre corde.\n\nTrois si la longueur < 75m, quatre si la longueur > 75m.",
        image: tuto_images.tutoStep4a
    },
    {
        id: 2,
        title: "En collectant les déchets",
        description: "Utilisez les pincettes pour trier les méso/microplastiques.\n\nPlacez les dans deux pots séparés après les avoir mesurés.",
        image: tuto_images.microTutoStep5
    },
]

export const MATERIALS = [
    {
        image: icons.rubberBoots,
        title: "Vêtements",
        description: "Porter des chaussures épaisses ou des bottes, des gants anti-coupure et un gilet de sécurité."
    },
    {
        image: icons.rope,
        title: "Corde et plots",
        description: "Apporter de quoi delimiter l'espace. Une corde d'au moins 30m de long pouvant aller jusqu'à 100m et des plots colorés."
    },
    {
        image: icons.trashBag,
        title: "Sacs poubelles",
        description: "Sacs poubelle à poignée coulissante."
    },
    {
        image: icons.jar,
        title: "Deux pots",
        description: "Un pot pour stocket les macroplastiques et un pot pour stocker les méso/microplastiques."
    },
    {
        image: icons.tweezers,
        title: "Pinces à épiler",
        description: "Pour trier et diviser les déchets plastiques ramassés en deux catégories de taille."
    },
    {
        image: icons.scaleRuler,
        title: "Règle ou gabarits",
        description: "Pour vérifier la taille des déchets ramassés macrodéchets (> 2.5cm)."
    },
    {
        image: icons.scale,
        title: "Balance portable",
        description: "Mesurer la masse totale des déchets en utilisant une balance."
    }
]

export const colorPalette = [
    '#EF9A9A',
    '#880E4F',
    '#4A148C',
    '#AB47BC',
    '#2196F3',
    '#303F9F',
    '#009688',
    '#C6FF00',
    '#43A047',
    '#FF7043',
    '#795548',
    '#546E7A'
]

export const QUIZ_DATA = [
    {
        id: 0,
        answer: 'Bouteille',
        propositon: 'Autre verre',
        photoUrl: quiz_images.bottleImage,
        type: 'Verre',
        macroOrMicro: 'Macroplastique',
    },
    {
        id: 1,
        answer: 'Papier carton',
        propositon: 'Papier carton',
        photoUrl: quiz_images.cardboard,
        type: 'Papier carton',
        macroOrMicro: 'Macroplastique',
    },
    {
        id: 2,
        answer: 'Tissu ameublement',
        propositon: 'Tissu ameublement',
        photoUrl: quiz_images.fabric,
        type: 'Textile',
        macroOrMicro: 'Macroplastics',
    },
    {
        id: 3,
        answer: 'Fragment de fibre',
        propositon: 'Film plastique',
        photoUrl: quiz_images.fiber,
        type: 'Film',
        macroOrMicro: 'Microplastiques',
    },
    {
        id: 4,
        answer: 'Film plastique',
        propositon: 'Fragment de fibre',
        photoUrl: quiz_images.plasticfilm,
        type: 'Fibre',
        macroOrMicro: 'Microplastiques',
    },
    {
        id: 5,
        answer: 'Granules',
        propositon: 'Granules',
        photoUrl: quiz_images.granule,
        type: 'Plastiques durs',
        macroOrMicro: 'Microplastiques',
    },
    {
        id: 6,
        answer: 'Mégots',
        propositon: 'Mégots',
        photoUrl: quiz_images.megots,
        type: 'Plastiques à usage unique',
        macroOrMicro: 'Macroplastiques',
    },
    {
        id: 7,
        answer: 'Mousse',
        propositon: 'Mousse',
        photoUrl: quiz_images.mousse,
        type: 'Polysteren',
        macroOrMicro: 'Microplastiques',
    },
    {
        id: 8,
        answer: 'Caoutchouc',
        propositon: 'Autre Caoutchouc',
        photoUrl: quiz_images.autreCaoutchouc,
        type: 'Caoutchouc',
        macroOrMicro: 'Macroplastiques',
    },
    {
        id: 9,
        answer: 'Paille',
        propositon: 'Paille',
        photoUrl: quiz_images.paille,
        type: 'Plastiques à usage unique',
        macroOrMicro: 'Macroplastiques',
    }
]