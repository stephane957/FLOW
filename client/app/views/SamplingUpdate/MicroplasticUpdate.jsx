import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { IconButton } from 'react-native-paper';
import { scale } from "../../styles/screen.styles";
import styles from '../../styles/views.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MicroPlasticItem from '../../components/MicroUpdate/MicroPlasticItem';
import CombinedModal from '../TrashSelection/CombinedModal';
import ExitPopUpModal from '../../components/Modals/ExitPopUpModal';
import { modalOptions } from '../../constants/enums';
import { RouterButton, RouterButtonStyles } from '../../components/RouterButton/RouterButton'
import { sendCollectedMicroplastics } from '../../controllers/SamplesController';

export default function MicroplasticUpdate() {
  const [visible, setVisible] = useState(false);
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [path, setPath] = useState('/views/Questionnaire/Questionnaire');

  const showModal = (displayNum) => {
    setVisible(true);
    setDisplay(displayNum);
  }
  const showPopUp = () => setPopUpVisible(true);
  const closePopUp = () => setPopUpVisible(false);
  const hideModal = () => {
    setVisible(false);
    setDisplay(modalOptions.NOTHING);
  }

  const [displayedModal, setDisplay] = useState(modalOptions.NOTHING);
  const [plastics, setPlastics] = useState([]);

  const addPlastics = (plastic) => {
    setPlastics([...plastics, plastic])
  }

  const handleIncrement = (index) => {
    const updatedPlastics = [...plastics];
    updatedPlastics[index].count++;
    setPlastics(updatedPlastics);
  };

  const handleDecrement = (index) => {
    const updatedPlastics = [...plastics];
    if (updatedPlastics[index].count > 0) {
      updatedPlastics[index].count--;
      setPlastics(updatedPlastics);
    }
  };

  const sendPlastics = async () => {
    await sendCollectedMicroplastics(plastics);
  }

  useEffect(() => {
    async function checkGroupSampling() {
      const isGroupSampling = await AsyncStorage.getItem('isGroupSampling');
      if (JSON.parse(isGroupSampling))
        setPath('/views/PostSampling/Celebration')
    }
    checkGroupSampling();
  }, []);

  return (
    <View style={styles.view}>
      <ExitPopUpModal isVisible={isPopUpVisible} onClose={closePopUp} />
      <CombinedModal trashList={plastics} isVisible={visible} onClose={hideModal} setList={addPlastics} setDisplay={setDisplay} display={displayedModal} />
      <View style={styles.headerWrap}>
        <View style={styles.arrowBackButton}>
          <Link href={'../'} asChild>
            <IconButton icon='arrow-left' iconColor='#00265A' size={scale(30)} />
          </Link>
        </View>
        <View style={styles.header}>
          <Text style={styles.textViewTitle}>Collection de données</Text>
          <Text style={styles.subTitle}>Microplastiques</Text>
        </View>
        <View style={styles.leaveTextView}>
          <TouchableOpacity onPress={showPopUp}>
            <Text style={styles.leaveText}>Quitter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dataCollectionBody}>
        <ScrollView style={styles.scrollViewModal} contentContainerStyle={styles.scrollViewContainerTrashItems}>
          {plastics.map((plastic, index) => (
            <MicroPlasticItem
              key={index}
              category={plastic.category}
              count={plastic.count}
              color={plastic.color}
              texture={plastic.texture}
              onIncrement={() => handleIncrement(index)}
              onDecrement={() => handleDecrement(index)}
            />
          ))}
          <TouchableOpacity style={styles.buttonAddPlastic} onPress={() => { showModal(modalOptions.MICRO_CATEGORY_SELECTION) }}>
            <Text style={styles.textAddPlastic}>
              +
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.dataCollectionFooter}>
        <RouterButton path={path} style={RouterButtonStyles.inverted} onPress={() => { sendPlastics() }} />
      </View>
    </View>
  )
}
