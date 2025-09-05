import React from 'react';
import styles from '../../styles/views.styles';
import { View, Text } from 'react-native';

export default ChartLegend = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.amount, 0);
  return (
    <View style={styles.legendContainer}>
      {data.map((item, index) => (
        <View key={index} style={styles.legendItem}>
          <View style={[styles.colorIndicator, { backgroundColor: item.color }]} />
          <Text style={styles.legendText}>
            {`${item.name}: ${(item.amount / total * 100).toFixed(1)}%`}
          </Text>
        </View>
      ))}
    </View>
  );
};