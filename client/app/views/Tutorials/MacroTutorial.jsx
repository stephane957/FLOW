import { React, useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Switch, IconButton } from 'react-native-paper';
import { Link, useLocalSearchParams, Redirect, router } from "expo-router";
import styles from '../../styles/tutorial.styles';
import Onboarding from '../../components/Onboarding/Onboarding';
import { RouterButton } from '../../components/RouterButton/RouterButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { width } from '../../styles/screen.styles';
import { MACRO_TUTORIAL_SLIDES } from '../../constants/object_lists';
import { setSwitches } from '../../controllers/UsersController';
import { deleteSample } from '../../controllers/SamplesController';

export default function MacroTutorial() {
  const params = useLocalSearchParams();
  const { showTuto } = params;
  if (showTuto === 'false') {
    return <Redirect href={'/views/InitialSampling/DistanceSelection'} />
  }

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [path, setPath] = useState('/views/InitialSampling/DistanceSelection');

  useEffect(() => {
    async function checkGroupSampling() {
      const isGroupSampling = await AsyncStorage.getItem('isGroupSampling');
      if (JSON.parse(isGroupSampling))
        setPath('/views/SamplingUpdate/MacroplasticUpdate')
    }
    checkGroupSampling();
  }, []);

  function handleDataFromOnboarding(currentIndex) {
    if (currentIndex === MACRO_TUTORIAL_SLIDES.length - 1) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const saveData = async () => {
    await AsyncStorage.setItem('macro_tutoriel', JSON.stringify(!isEnabled));
    const userUpdate = { 'macro_tutoriel': !isEnabled };
    await setSwitches(userUpdate);
  }

  return (
    <View style={styles.view}>
      <View style={styles.headerWrap}>
        <View style={styles.arrowBackButton}>
          <Link href={'/Home'} asChild>
            <IconButton icon='arrow-left' onPress={deleteSample} iconColor='#00265A' size={30}
            ></IconButton>
          </Link>
        </View>
        <View style={styles.header}>
          <Text style={styles.viewTitle}>Procédure de prélèvement</Text>
        </View>
      </View>
      <View style={[styles.slidesBody, { width }]}>
        <Onboarding sendDataToPage={handleDataFromOnboarding} slides={MACRO_TUTORIAL_SLIDES} />
      </View>
      <View style={styles.footer}>
        <View style={styles.viewRow}>
          <Switch
            color={'#00265A'}
            onValueChange={toggleSwitch}
            value={isEnabled} />
          <Text>Ne plus montrer</Text>
        </View>
        <View style={styles.viewRow}>
          <RouterButton path={path} text="Continuer" disabled={isButtonDisabled} onPress={saveData} />
        </View>
      </View>
    </View>
  );
};


