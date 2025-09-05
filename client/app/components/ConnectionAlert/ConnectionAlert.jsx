import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import RNModal from 'react-native-modal';

export default function ConnectionAlert(props) {
    return (
        <View style={styles.modalContainer}>
            <RNModal animationType='fade' transparent={true} visible={props.isVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.textStyle}>{props.title}</Text>
                    </View>
                </View>
            </RNModal>
        </View>
    );
}
const styles = StyleSheet.create({
    modalContainer: {
        alignItems: 'center',
    },
    modalView: {
        flexDirection: 'row',
        justifyContent: 'flex-start', alignItems: 'center',
        width: '85%', height: '50$rem',
        backgroundColor: '#00265A',
        borderRadius: '8$rem'
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: '20$rem',
        marginLeft: '20$rem'
    }
});