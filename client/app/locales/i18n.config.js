import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';  
import { getLocales } from 'expo-localization';
import english from './english/en.json';
import french from './french/fr.json';
import spanish from './spanish/es.json';
import german from './german/de.json';
import questionnaireEN from './english/questionnaireEN.json';
import questionnaireFR from './french/questionnaireFR.json';
import questionnaireES from './spanish/questionnaireES.json';
import questionnaireDE from './german/questionnaireDE.json';
import samplingSelectionEN from './english/sampleSelectionEN.json';
import samplingSelectionFR from './french/sampleSelectionFR.json';
import samplingSelectionES from './spanish/sampleSelectionES.json';
import samplingSelectionDE from './german/sampleSelectionDE.json';

const resources = {
    en: {
        translation: english,
        questionnaire: questionnaireEN,
        samplingSelection: samplingSelectionEN
    },
    fr: {
        translation: french,
        questionnaire: questionnaireFR,
        samplingSelection: samplingSelectionFR
    },
    es: {
        translation: spanish,
        questionnaire: questionnaireES,
        samplingSelection: samplingSelectionES
    },
    de: {
        translation: german,
        questionnaire: questionnaireDE,
        samplingSelection: samplingSelectionDE
    },
}

const i18n = i18next.createInstance()
    .use(initReactI18next)
    .init({ 
        compatibilityJSON: 'v3',
        debug: false,
        ns: ['translation', 'questionnaire','samplingSelection'],
        defaultNS: 'translation',
        lng: getLocales()[0].languageCode,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        returnObjects: true,
        resources,
    });

export default i18n;
