import { React, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon, IconButton, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import styles from '../../styles/views.styles';
import { scale } from '../../styles/screen.styles';
import { RouterButton } from '../../components/RouterButton/RouterButton';
import * as ImagePicker from 'expo-image-picker';
import ExitPopUpModal from '../../components/Modals/ExitPopUpModal';
import { setSampleImage } from '../../controllers/SamplesController';

export default function ImageSelection() {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [isImageTaken, setImageTaken] = useState(true);
  const [imageBase, setImageBase] = useState("");

  const showPopUp = () => setPopUpVisible(true);
  const closePopUp = () => setPopUpVisible(false);

  async function openCamera() {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      alert(`Vous avez refusé d'autoriser cette application à accéder à votre appareil photo !`);
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!pickerResult.canceled && pickerResult.assets && pickerResult.assets[0].base64) {
      setImageBase(pickerResult.assets[0].base64);
      setImageTaken(false);
    }
  }

  const saveImage = async () => {
    await setSampleImage(imageBase);
  }

  return (
    <View style={styles.view}>
      <ExitPopUpModal isVisible={isPopUpVisible} onClose={closePopUp} />
      <View style={styles.headerWrap}>
        <View style={styles.arrowBackButton}>
          <Link href={'../'} asChild>
            <IconButton icon='arrow-left' iconColor='#00265A' size={scale(30)} />
          </Link>
        </View>
        <View style={styles.header}>
          <Text style={styles.textViewTitle}>Prise de photo de l'environnement</Text>
        </View>
        <View style={styles.leaveTextView}>
          <TouchableOpacity onPress={showPopUp}><Text style={styles.leaveText}>Quitter</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Icon source="camera-image" size={scale(200)} color={'#93A5BD'} />
        <View style={styles.viewMargin}>
          <Text style={styles.titleText}>Veuillez prendre une photo de la plage sur laquelle vous faites l'échantillonnage</Text>
          <Button
            icon="camera"
            mode="contained" onPress={() => { openCamera() }}
            buttonColor={isImageTaken ? '#D1FFBD' : '#93A5BD'}
            labelStyle={{ fontSize: scale(30) }}
            style={styles.buttonSizing}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
              Ajouter une image
            </Text>
          </Button>
        </View>
      </View>
      <View style={styles.footer}>
        <RouterButton path={"/views/InitialSampling/InitialSampling"} disabled={isImageTaken} onPress={() => { saveImage() }} />
      </View>
    </View>
  )
}

