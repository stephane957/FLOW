import { React, useState } from 'react';
import { View } from 'react-native';
import { Text, Switch, IconButton } from 'react-native-paper';
import { Link, useLocalSearchParams, Redirect } from "expo-router";
import { RouterButton } from '../../components/RouterButton/RouterButton';
import styles from '../../styles/tutorial.styles';
import { scale } from '../../styles/screen.styles';
import Onboarding from '../../components/Onboarding/Onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { width } from '../../styles/screen.styles';
import { MICRO_TUTORIAL_SLIDES } from '../../constants/object_lists';
import { setSwitches } from '../../controllers/UsersController';

export default function MicroTutorial() {
  const params = useLocalSearchParams();
  const { showTuto } = params;
  if (showTuto === 'false') {
    return <Redirect href={'/views/SamplingUpdate/MicroplasticUpdate'} />
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  function handleDataFromOnboarding(currentIndex) {
    if (currentIndex === MICRO_TUTORIAL_SLIDES.length - 1) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }

  const toggleSwitch = async () => {
    setIsEnabled(previousState => !previousState)
  };

  const saveData = async () => {
    await AsyncStorage.setItem('micro_tutoriel', JSON.stringify(!isEnabled));
    const userUpdate = { 'micro_tutoriel': !isEnabled };
    await setSwitches(userUpdate);
  }

  return (
    <View style={styles.view}>
      <View style={styles.headerWrap}>
        <View style={styles.arrowBackButton}>
          <Link href={'../'} asChild>
            <IconButton icon='arrow-left' iconColor='#00265A' size={scale(30)}
            ></IconButton>
          </Link>
        </View>
        <View style={styles.header}>
          <Text style={styles.viewTitle}>Procédure de prélèvement</Text>
        </View>
      </View>
      <View style={[styles.slidesBody, { width }]}>
        <Onboarding sendDataToPage={handleDataFromOnboarding} slides={MICRO_TUTORIAL_SLIDES} />
      </View>
      <View style={styles.footer}>
        <View style={styles.viewRow}>
          <Switch
            color={'#00265A'}
            onValueChange={toggleSwitch}
            value={isEnabled} />
          <Text style={styles.switchText}>Ne plus montrer</Text>
        </View>
        <RouterButton path={'../SamplingUpdate/MicroplasticUpdate'} text="Terminer" disabled={isButtonDisabled} onPress={saveData} />
      </View>
    </View>
  );
};

