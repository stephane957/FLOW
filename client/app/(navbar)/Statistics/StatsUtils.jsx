import { macrosubcategories } from '../Settings/index';
import microIdMappings from '../../mappings/microIdMappings';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const monthsList = ['Jan.', 'Fev.', 'Mar.', 'Avr.', 'Mai.', 'Juin.', 'Juil.', 'Août.', 'Sept.', 'Oct.', 'Nov.', 'Déc.'];

export const PopularModes = {
  macro: 0,
  micro: 1
}

export const getNameByType = (type) => {
  for (const categoryKey in macrosubcategories) {
    const items = macrosubcategories[categoryKey];
    for (const item of items) {
      if (item.type === type) {
        return item.name;
      }
    }
  }
  return 'Unknown';
};

export const getNameByTypeAndLanguage = (type, language) => {
  const matchingKey = Object.keys(microIdMappings).find(key =>
    microIdMappings[key].type === type && microIdMappings[key].language === language
  );
  return matchingKey || 'Unknown';
};

export const formatDate = (inputString) => {
  const date = new Date(inputString);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day} ${monthsList[monthIndex - 1]} ${year}`;

  return formattedDate;
};

export const formatTime = (inputString) => {
  const timePart = inputString.split('T')[1];

  const [hours, minutes, seconds] = timePart.split(':');

  const formattedTime = `${hours}:${minutes}`;

  return formattedTime
}

export const languagesList = ["en", "fr", "es", "de"];

export const getLanguage = () => {
  const storedLanguage = AsyncStorage.getItem('language');
  return languagesList.includes(storedLanguage) ? storedLanguage : 'fr'
}
