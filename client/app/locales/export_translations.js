import categoriesEN from "./english/macrocategoriesEN";
import categoriesFR from "./french/macrocategoriesFR";
import categoriesDE from "./german/macrocategoriesDE";
import categoriesES from "./spanish/macrocategoriesES";
import microcategoriesEN from "./english/microcategoriesEN";
import microcategoriesFR from "./french/microcategoriesFR";
import microcategoriesDE from "./german/microcategoriesDE";
import microcategoriesES from "./spanish/microcategoriesES";
import macrosubcategoriesEN from "./english/macrosubcategoriesEN";
import macrosubcategoriesFR from './french/macrosubcategoriesFR';
import macrosubcategoriesES from './spanish/macrosubcategoriesES';
import macrosubcategoriesDE from './german/macrosubcategoriesDE';
import microsubcategoriesEN from './english/microsubcategoriesEN';
import microsubcategoriesFR from "./french/microsubcategoriesFR";
import microsubcategoriesES from "./spanish/microsubcategoriesES";
import microsubcategoriesDE from "./german/microsubcategoriesDE";
import categorymappingEN from './english/categorymappingEN';
import categorymappingFR from './french/categorymappingFR';
import categorymappingDE from './german/categorymappingDE';
import categorymappingES from './spanish/categorymappingES';
import microtexturesEN from "./english/microtextureEN";
import microtexturesES from "./spanish/microtextureES";
import microtexturesFR from "./french/microtextureFR";
import microtexturesDE from "./german/microtextureDE";
import microcolorsEN from "./english/microcolorsEN";
import microcolorsFR from "./french/microcolorsFR";
import microcolorsES from "./spanish/microcolorsES";
import microcolorsDE from "./german/microcolorsDE";

const translations = {
    en: {
        macrocategories: categoriesEN,
        microcategories: microcategoriesEN,
        microcolors:microcolorsEN,
        macrosubcategories: macrosubcategoriesEN,
        microsubcategories: microsubcategoriesEN,
        microtextures:microtexturesEN,
        categorymapping:categorymappingEN
    },
    fr: {
        macrocategories: categoriesFR,
        microcategories: microcategoriesFR,
        microcolors:microcolorsFR,
        macrosubcategories: macrosubcategoriesFR,
        microsubcategories: microsubcategoriesFR,
        microtextures:microtexturesFR,
        categorymapping:categorymappingFR
    },
    es: {
        macrocategories: categoriesES,
        microcategories: microcategoriesES,
        microcolors:microcolorsES,
        macrosubcategories: macrosubcategoriesES,
        microsubcategories: microsubcategoriesES,
        microtextures:microtexturesES,
        categorymapping:categorymappingES
    },
    de: {
        macrocategories: categoriesDE,
        microcategories: microcategoriesDE,
        microcolors:microcolorsDE,
        macrosubcategories: macrosubcategoriesDE,
        microsubcategories: microsubcategoriesDE,
        microtextures:microtexturesDE,
        categorymapping:categorymappingDE
    }
};

Object.freeze(translations);

export default translations;
