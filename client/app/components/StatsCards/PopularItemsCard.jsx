import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/views.styles';
import { PopularModes } from '../../(navbar)/Statistics/StatsUtils';

export default PopularItemsCard = (props) => {
  const { items, mode } = props;
  const numberContainerWidth = 50;
  const currentModeStyle = getModeStyles(mode);

  return (
    <View style={[styles.popularItemsCard, { backgroundColor: currentModeStyle.color }]}>
      <Text style={[styles.popularItemsTitle, { color: currentModeStyle.textColor }]}>{currentModeStyle.title}</Text>
      <View style={styles.popularItemsSeparator} />
      {items.map((item, index) => (
        <View key={index} style={styles.popularItemsItem}>
          <Text style={[styles.popularItemsItemText, { color: currentModeStyle.textColor }]}>{item.name}</Text>
          <View style={[styles.popularItemsItemNumberContainer, { width: numberContainerWidth }]}>
            <Text style={[styles.popularItemsItemNumber, { color: currentModeStyle.textColor }]}>{item.number}</Text>
          </View>
          {index < items.length - 1 && <View style={[styles.popularItemsSeparator, { backgroundColor: currentModeStyle.textColor }]} />}
        </View>
      ))}
    </View>
  );
};

export function getModeStyles(mode) {
  switch (mode) {
    case PopularModes.micro:
      return {
        color: '#09519a',
        textColor: 'white',
        title: "Micro/Meso les plus collectés",
      };
    case PopularModes.macro:
      return {
        color: '#b3d4fb',
        textColor: '#232348',
        title: "Macroplastiques les plus collectés",
      };
    default:
      return {
        color: 'grey',
        textColor: '#232348',
        title: 'Default Title',
      };
  }
};