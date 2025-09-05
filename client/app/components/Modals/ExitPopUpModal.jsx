import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { router } from 'expo-router';
import RNModal from 'react-native-modal';
import styles from './modal.styles';
import { height, width } from '../../styles/screen.styles';
import { deleteSample, _getSampleId } from '../../controllers/SamplesController';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ExitPopUpModal({ isVisible = false, onClose }) {
    const leave = async () => {
        await deleteSample();
        AsyncStorage.removeItem('sampleid');
        router.push("/(navbar)/Home/");
    }

    return (
        <RNModal
            isVisible={isVisible}
            animationInTiming={500}
            animationOutTiming={500}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            animationIn={"zoomInDown"}
            animationOut={"zoomOutUp"}
            deviceHeight={height}
            deviceWidth={width}
        >
            <View style={styles.exitPopUpModal.content}>
                <View style={styles.exitPopUpModal.header}>
                    <Text style={styles.exitPopUpModal.text}>Êtes vous sûr de vouloir arrêter le prélèvement ?</Text>
                    <Text style={styles.exitPopUpModal.subText}>Toutes les données de ce prélèvement seront perdues.</Text>
                </View>
                <View style={styles.exitPopUpModal.footer}>
                    <Button onPress={onClose} mode={"contained"}
                        buttonColor={styles.exitPopUpModal.buttonColor}
                        contentStyle={styles.exitPopUpModal.cancelButton}>
                        <Text style={styles.exitPopUpModal.cancelButtonText}>{"Annuler"}</Text>
                    </Button>
                    <Button mode={"contained"}
                        buttonColor={styles.exitPopUpModal.confirmButtonColor}
                        contentStyle={styles.exitPopUpModal.confirmButton}
                        onPress={leave}>
                        <Text style={styles.exitPopUpModal.confirmButtonText}>{"Confirmer"}</Text>
                    </Button>
                </View>
            </View>
        </RNModal>
    );
};