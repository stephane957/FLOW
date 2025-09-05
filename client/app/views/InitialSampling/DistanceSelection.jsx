import { React, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, TextInput, Icon, IconButton } from 'react-native-paper';
import { Link } from 'expo-router';
import styles from '../../styles/views.styles';
import { scale } from '../../styles/screen.styles';
import { RouterButton } from '../../components/RouterButton/RouterButton';
import ExitPopUpModal from '../../components/Modals/ExitPopUpModal';
import { genericSampleDataSetter } from '../../controllers/SamplesController';

const DistanceSelection = () => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [inputIsEmpty, setIsEmpty] = useState(true);
  const [length, setLength] = useState(0);

  const showPopUp = () => setPopUpVisible(true);
  const closePopUp = () => setPopUpVisible(false);
  const checkText = (value) => {
    let num = parseInt(value);
    if (value.trim() && num >= 30 && num <= 100) {
      setIsEmpty(false);
      setLength(num);
    }
    else setIsEmpty(true);
  }

  const saveData = async () => {
    const data = {
      "transect_length": length.toFixed(2),
    }
    await genericSampleDataSetter(data);
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
          <Text style={styles.textViewTitle}>Distance de prélèvement</Text>
        </View>
        <View style={styles.leaveTextView}>
          <TouchableOpacity onPress={showPopUp}><Text style={styles.leaveText}>Quitter</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Icon source="map-marker-distance" size={scale(200)} color={'#93A5BD'} />
        <View style={styles.viewMargin}>
          <Text style={styles.titleText}>La distance devrait être comprise entre 30m et 100m</Text>
          <TextInput mode='outlined'
            label={"Distance de prélèvement en mètres"}
            selectionColor="#232348"
            style={styles.textInput}
            keyboardType="default"
            activeOutlineColor="#232348"
            textColor="#232348"
            onChangeText={checkText} />
        </View>
      </View>
      <View style={styles.footer}>
        <RouterButton path={"/views/InitialSampling/ImageSelection"} disabled={inputIsEmpty} onPress={() => { saveData() }} />
      </View>
    </View>
  )
}

export default DistanceSelection;