import { React, useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { IconButton } from 'react-native-paper';
import { router } from 'expo-router';
import { scale } from '../../styles/screen.styles';
import GenericCard from '../../components/StatsCards/PolyvalentCard';
import styles from '../../styles/views.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomPieChart from '../../components/StatsCharts/CustomPieChart';
import { getUserId } from '../../controllers/UsersController';
import PopularItemsCardWrapper from '../../components/StatsCards/PopularItemsCardWrapper';
import WeightCard from '../../components/StatsCards/WeightCard';
import InfoCardWrapper from '../../components/StatsCards/InfoCardWrapper';
import { PopularModes } from '../../(navbar)/Statistics/StatsUtils';
import { getLanguage } from '../../(navbar)/Statistics/StatsUtils';

export default function SamplingSummary() {

  const [userId, setUserId] = useState("");
  const [language, setLanguage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      try {
        await AsyncStorage.removeItem('sampleid');
        setLanguage(getLanguage());
      } catch (error) {
        console.error("Key couldn't be saved : ", error)
      }
      try {
        setUserId(await getUserId());
      } catch (error) {
        console.log("Failed to initialize data in summary:", error);
      } finally {
        setLoading(false);
      }
    };
    initializeData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.view}>
      <View style={styles.headerWrap}>
        <View style={styles.arrowBackButton}>
          <IconButton onPress={() => { router.push("/(navbar)/Home/") }} icon="arrow-left" iconColor={'#232348'} size={scale(30)} />
        </View>
        <Text style={styles.lastSamplingTitle}>Voici le compte rendu de ta dernière collecte !</Text>
      </View>
      <ScrollView style={styles.scrollViewSummary}
        contentContainerStyle={styles.scrollViewContainerSummary}
        showsVerticalScrollIndicator={false}>

        <InfoCardWrapper
          userID={userId}
        />

        <View style={styles.cardContainer}>
          <GenericCard
            title="Participants"
            logo="account"
            value="1"
            metric="Personnes"
          />
          <WeightCard
            userID={userId}
            lastSample={true}
          />
        </View>

        <PopularItemsCardWrapper
          mode={PopularModes.macro}
          userID={userId}
          lastSample={true}
        />

        <PopularItemsCardWrapper
          mode={PopularModes.micro}
          userID={userId}
          lastSample={true}
          language={language}
        />

        <CustomPieChart
          userID={userId}
          lastSample={true}
          style={styles.pieChart}
        />

      </ScrollView>
    </View>
  );
}
