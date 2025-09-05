import { React, useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import GenericCard from '../../components/StatsCards/PolyvalentCard';
import { statsTypes } from '../../constants/enums';
import { statsPeriods } from '../../constants/enums';
import styles from '../../styles/views.styles';
import navbarStyles from '../../styles/navbar.styles';
import { ApiServices } from '../../controllers/SummaryController';
import { PopularModes } from './StatsUtils';
import CustomPieChart from '../../components/StatsCharts/CustomPieChart';
import { getUserId } from '../../controllers/UsersController';
import WeightCard from '../../components/StatsCards/WeightCard';
import PopularItemsCardWrapper from '../../components/StatsCards/PopularItemsCardWrapper';
import CustomBarChart from '../../components/StatsCards/CustomBarChart';
import SamplingsCountCard from '../../components/StatsCards/SamplingsCountCard';
import CustomStackedAreaChart from '../../components/StatsCards/CustomStackedAreaChart';
import NoStatsPage from './NoStatsPage';
import { getLanguage } from './StatsUtils';
import { Dropdown } from 'react-native-element-dropdown';

export default function StatsView() {
  const [type, setType] = useState(statsTypes.AVG);
  const [period, setPeriod] = useState(statsPeriods.MONTH);
  const [loading, setLoading] = useState(true);
  const [isNoStats, setIsNoStats] = useState(true);
  const [userId, setUserId] = useState("");
  const [language, setLanguage] = useState(null);
  const typeData = [
    { label: `Moyenne`, value: statsTypes.AVG },
    { label: `Total`, value: statsTypes.TOTAL }
  ];
  const periodData = [
    { label: `Mois`, value: statsPeriods.MONTH },
    { label: `Année`, value: statsPeriods.YEAR },
    { label: `Toujours`, value: statsPeriods.ALLTIME }
  ];

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      try {
        setLanguage(getLanguage());
      } catch (error) {
        console.error("Key couldn't be saved : ", error)
      }
      try {
        setUserId(await getUserId());
      } catch (error) {
        console.log("Failed to initialize data:", error);
      } finally {
        setLoading(false);
      }
    };
    initializeData();
  }, []);

  useEffect(() => {
    const checkSampleHistory = async () => {
      try {
        const responses = await Promise.all([
          ApiServices.getLastSampleGenInfo(userId),
        ]);

        if (responses[0].data !== undefined) {
          setIsNoStats(false);
        }

      } catch (error) {
        console.log("Failed to get last sample :", error);
      }
    };
    checkSampleHistory();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={navbarStyles.view}>
      <Text style={styles.statsTitle}>Statistiques utilisateur</Text>
      <View style={styles.statsWrap}>
        <View style={styles.statsDropdownContainer}>
          <Dropdown
            style={styles.statsDropdown}
            labelField="label"
            valueField="value"
            data={typeData}
            value={type}
            onChange={(value) => setType(value.value)}
            selectedTextStyle={{ color: '#fff', textAlign: 'center' }}
            iconColor='#fff'
            dropdownPosition='auto'
          />
          <Dropdown
            style={styles.statsDropdown}
            labelField="label"
            valueField="value"
            data={periodData}
            value={period}
            onChange={(value) => setPeriod(value.value)}
            selectedTextStyle={{ color: '#fff', textAlign: 'center' }}
            iconColor='#fff'
            dropdownPosition='auto'
          />
        </View>
      </View>
      {isNoStats ?
        <NoStatsPage /> :
        <ScrollView style={styles.scrollViewSummary} contentContainerStyle={styles.scrollViewContainerSummary}>
          <Text style={styles.samplingTitle}>{type == statsTypes.AVG ? "Voici la moyenne de tes collectes !" : "Voici le total de tes collectes !"}</Text>
          <View style={styles.cardContainer}>
            {type ?
              <SamplingsCountCard
                period={period}
                userID={userId}
              /> :
              <GenericCard
                title={"Participants"}
                logo="account"
                value="1"
                metric={"Personnes"}
              />
            }

            <WeightCard
              type={type}
              period={period}
              userID={userId}
              lastSample={false}
            />
          </View>

          <PopularItemsCardWrapper
            mode={PopularModes.macro}
            type={type}
            period={period}
            userID={userId}
            lastSample={false}
          />

          <PopularItemsCardWrapper
            mode={PopularModes.micro}
            type={type}
            period={period}
            userID={userId}
            lastSample={false}
            language={language}
          />

          <CustomPieChart
            period={period}
            userID={userId}
            lastSample={false}
            style={styles.pieChart}
          />

          {type &&
            <View>
              <CustomBarChart
                period={period}
                userID={userId}
              />

              <CustomStackedAreaChart
                userID={userId}
                period={period}
              />
            </View>
          }
        </ScrollView>
      }
    </View>
  );
}
