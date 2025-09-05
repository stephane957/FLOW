import React from 'react';
import { View, Text } from 'react-native';
import { scale } from '../../styles/screen.styles';
import { Icon } from 'react-native-paper';
import styles from '../../styles/views.styles';

export default GenericCard = (props) => {

  const { title, logo, value, metric } = props;

  return (
    <View style={styles.polyvalentCard}>
      <View style={styles.polyvalentTopRow}>
        <Text style={styles.polyvalentTitleText}>{title}</Text>
        <Icon source={logo} size={scale(26)} color="white" />
      </View>
      <View style={styles.polyvalentBottomRow}>
        <Text>
          <Text style={styles.polyvalentNumberText}>{value}</Text>
          <Text>     </Text>
          <Text style={styles.polyvalentSubtitleText}>{metric}</Text>
        </Text>
      </View>
    </View>
  );
};