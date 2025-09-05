import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-paper';
import { scale } from '../../styles/screen.styles';
import styles from '../../styles/views.styles';

export default InfoCard = (props) => {
  const { date, time, location, locationName } = props;
  return (
    <View style={styles.dateLocationCard}>
      <View style={styles.dateLocationRow}>
        <View style={styles.dateLocationTextWithIcon}>
          <Text style={styles.dateLocationDateText}>{date}</Text>
          <Text style={styles.dateLocationTimeText}>{time}</Text>
        </View>
        <Icon source={"calendar-month-outline"} size={scale(40)} color="#232348" style={styles.dateLocationIconRight} />
      </View>
      <View style={styles.dateLocationSeparator} />
      <View style={styles.dateLocationRow}>
        <View style={styles.dateLocationTextWithIcon}>
          <Text style={styles.dateLocationLocationText}>{location}</Text>
          <Text style={styles.dateLocationLocationNameText}>{locationName}</Text>
        </View>
        <Icon source={"map-marker-outline"} size={scale(40)} color="#232348" style={styles.dateLocationIconRight} />
      </View>
    </View>
  );
};
