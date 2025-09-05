import React, { useEffect, useState } from 'react';
import { View, Alert, Text } from 'react-native';
import MapView, { Heatmap, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from '../../styles/views.styles'
import { getPollutionData } from '../../controllers/PollutionController';

export default function Map() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [pollutionData, setPollutionData] = useState([]);
  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Location permission not granted");
        return;
      }
      getCurrentLocation();
    };

    const fetchPollutionData = async () => {
      const data = await getPollutionData();
      setPollutionData(data.data);
    }

    fetchPollutionData();
    requestLocationPermission();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [pollutionData])

  const getCurrentLocation = async () => {
    try {
      let { coords } = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setCurrentPosition({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    } catch (error) {
      Alert.alert("Error getting location", error.message);
    }
  };

  return (
    <View style={styles.mapStyle}>
      <Text style={styles.distributionTitle}>Niveau de pollution</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={currentPosition}
          showsUserLocation={true}
          provider={MapView.PROVIDER_GOOGLE}
          pitchEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
        >
          {currentPosition && (
            <Marker coordinate={currentPosition} />
          )}
          {!isLoading && pollutionData !== undefined && pollutionData.length > 0 && (
            <Heatmap points={pollutionData.map(dataPoint => ({
              latitude: dataPoint.latitude,
              longitude: dataPoint.longitude,
              weight: dataPoint.pollution_level
            }))}
              opacity={0.7}
              radius={30}
              maxIntensity={4}
              gradientSmoothing={10}
              heatmapMode={"POINTS_WEIGHT"} />
          )}
        </MapView>
      </View>
    </View>
  );
};
