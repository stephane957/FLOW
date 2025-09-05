import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import RNModal from 'react-native-modal';
import styles from './modal.styles';
import { height, width } from '../../styles/screen.styles';

export default function ExitPopUpModal({ isVisible = false, onClose, deleteAccount }) {
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
            <View style={styles.deleteAccountModal.content}>
                <View style={styles.deleteAccountModal.header}>
                    <Text style={styles.deleteAccountModal.text}>{"Supprimer le compte"}</Text>
                    <Text style={styles.deleteAccountModal.subText}>{"Êtes-vous sûr que vous voulez supprimer votre compte ?\nSi vous le supprimez, vous perdrez définitivement accès à votre profil et tous vos prélèvements"}</Text>
                </View>
                <View style={styles.deleteAccountModal.footer}>
                    <Button onPress={onClose} mode={"contained"}
                        buttonColor='#fff'
                        contentStyle={styles.deleteAccountModal.cancelButton}>
                        <Text style={styles.deleteAccountModal.cancelButtonText}>Annuler</Text>
                    </Button>
                    <Button mode={"contained"}
                        buttonColor={styles.deleteAccountModal.buttonColor}
                        contentStyle={styles.deleteAccountModal.deleteButton}
                        style={styles.deleteAccountModal.deleteButtonStyle}
                        onPress={deleteAccount}>
                        <Text style={styles.deleteAccountModal.deleteButtonText}>{"Confimer"}</Text>
                    </Button>
                </View>
            </View>
        </RNModal>
    );
};