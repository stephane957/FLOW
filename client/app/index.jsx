import React, { useEffect, useState } from 'react';
import { Text, Button } from 'react-native-paper';
import { Alert, View, Image } from 'react-native';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { router } from 'expo-router';
import config from '../authconfiguration';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from './controllers/ServerEndpointController';
import wave from './assets/images/wave2.png';
import styles from './styles/views.styles';
import flowLogo from './assets/images/FLOW_logo_black_baseline.png';

const USER_ENDPOINT = `${BASE_URL}/users`;

const Authentication = () => {
  const { authorize, user, getCredentials, error, isLoading } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);
  const [loginAttempted, setLoginAttempted] = useState(false);

  async function _setUserInfo(id, username, avatarUri) {
    try {
      await AsyncStorage.setItem('userid', id);
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('image_url', avatarUri);
      await AsyncStorage.setItem('language', 'fr');
    } catch (error) {
      console.log("User info couldn't be saved : ", error)
    }
  }

  async function _setSwitches(macro_tutorial, micro_tutorial, materials) {
    try {
      await AsyncStorage.setItem('macro_tutoriel', JSON.stringify(macro_tutorial));
      await AsyncStorage.setItem('micro_tutoriel', JSON.stringify(micro_tutorial));
      await AsyncStorage.setItem('materials', JSON.stringify(materials));
    } catch (error) {
      console.log("Tutorials and materials switches states couldn't be saved : ", error)
    }
  }

  useEffect(() => {
    sendUserInfo(user, loginAttempted);
  }, [user, loginAttempted]);

  const onLogin = async () => {
    setLoginAttempted(true);
    await authorize();
    let credentials = await getCredentials();
    setAccessToken(credentials.accessToken);
  };

  const sendUserInfo = async (currentUser) => {
    if (!currentUser || !loginAttempted) {
      return;
    }

    const userInfo = {
      'username': `${user.name}`,
      'image_url': `${user.picture}`,
      'email': `${user.email}`,
    };

    const headerObjectWithAuth = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(USER_ENDPOINT, userInfo, headerObjectWithAuth);
      if (response.data) {
        await _setUserInfo(response.data.id, response.data.username, response.data.image_url);
        await _setSwitches(response.data.macro_tutoriel, response.data.micro_tutoriel, response.data.materials);
        router.replace('/(navbar)/Home/')
      }
    } catch (error) {
      Alert.alert("Error sending user information.");
    } finally {
      setLoginAttempted(false);
    }
  };

  const loggedIn = user !== undefined && user !== null;

  if (isLoading) {
    return (
      <View style={styles.view}>
        <Image source={flowLogo} style={styles.logoStyle}></Image>
        <View style={{ height: '30%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Text style={styles.title}>Chargement...</Text>
        </View>
        <Image source={wave} resizeMethod='scale' style={{ width: "100%", height: "60%" }} />
      </View>);
  }
  const onLoggedIn = (loggedIn) => {
    if (loggedIn)
      router.replace('/(navbar)/Home/');
  };
  const loginText = "Se connecter / S'inscrire"; const logoutText = "Continuer";
  const choseText = loggedIn ? logoutText : loginText;
  return (
    <View style={styles.view}>
      <Image source={flowLogo} style={styles.logoStyle}></Image>
      <View style={{ height: '30%', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text style={styles.title}> {loggedIn ? `Bienvenue ${user.name}` : 'Bienvenue'} </Text>
        <Button buttonColor='#00265A' contentStyle={styles.buttonRouter} style={styles.buttonRouter} onPress={() => loggedIn ? onLoggedIn(loggedIn) : onLogin()}>
          <Text style={styles.textRouter}>{choseText}</Text>
        </Button>
      </View>
      <Image source={wave} resizeMethod='scale' style={{ width: "100%", height: "60%" }} />
    </View>
  );
};

export default App = () => {
  return (
    <Auth0Provider domain={config.domain} clientId={config.clientId}>
      <Authentication />
    </Auth0Provider>
  );
};