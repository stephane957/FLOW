import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Switch, Icon } from 'react-native-paper';
import { useFocusEffect } from 'expo-router';
import styles from './modal.styles';
import icons from '../../constants/icons';
import { scale } from '../../styles/screen.styles';
import { RouterButton, RouterButtonStyles } from '../RouterButton/RouterButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MATERIALS } from '../../constants/object_lists';
import { setSwitches, getMacroTutorialSwitch } from '../../controllers/UsersController';

export default function MaterialsModal(props) {
    const { onClose } = props
    const [isEnabled, setIsEnabled] = useState(false);
    const [showMacroTutorial, setMacroTutorial] = useState("true");

    const toggleSwitch = async () => {
        setIsEnabled(previousState => !previousState);
    };

    const saveData = async () => {
        await AsyncStorage.setItem('materials', JSON.stringify(!isEnabled));
        const userUpdate = { 'materials': !isEnabled };
        await setSwitches(userUpdate);
        onClose();
    }

    useFocusEffect(
        useCallback(() => {
            async function fetchData() {
                try {
                    const switchState = await getMacroTutorialSwitch();
                    setMacroTutorial(switchState);
                } catch (error) {
                    console.error('Error fetching showMacroTutorial state in Materials Modal:', error.message);
                }
            }
            fetchData();
        }, [])
    );

    return (
        <View style={styles.materialsModal.container}>
            <View style={styles.materialsModal.header}>
                <Image style={styles.materialsModal.warningIcon} resizeMethod='scale' source={icons.kitOSPAR}></Image>
                <Text style={styles.materialsModal.pageTitle}>Avertissement !</Text>
                <Text style={styles.materialsModal.pageSubTitle}>Avez-vous le bon équipement pour le prélèvement ?</Text>
                <Text style={styles.materialsModal.text}>Lors d’un prélèvement, il est important d’avoir l’équipement nécessaire afin d’assurer votre sécurité ainsi que le bon déroulement de la collecte.</Text>
            </View>
            <View style={styles.materialsModal.body}>
                <ScrollView style={styles.materialsModal.scrollViewModal}
                    contentContainerStyle={styles.materialsModal.scrollViewContent}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    alwaysBounceVertical={false}>
                    {MATERIALS.map((item, index) => {
                        return (
                            <View style={styles.materialsModal.equipmentView} key={index}>
                                <Icon style={styles.materialsModal.image} resizeMode='contain' source={item.image} size={scale(100)}></Icon>
                                <View style={styles.materialsModal.description}>
                                    <Text style={styles.materialsModal.descriptionTitle}>{item.title}</Text>
                                    <Text style={styles.materialsModal.text}>{item.description}</Text>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <View style={styles.materialsModal.footer}>
                <View style={styles.materialsModal.viewRow}>
                    <Switch
                        color={'#00265A'}
                        onValueChange={toggleSwitch}
                        value={isEnabled} />
                    <Text style={styles.materialsModal.switchText}>Ne plus montrer</Text>
                </View>
                <RouterButton path={'/views/Tutorials/MacroTutorial'}
                    params={{ showTuto: showMacroTutorial }}
                    mode={RouterButtonStyles.frontPage} text="Confirmer"
                    onPress={() => { saveData() }} />
            </View>
        </View>
    );
};
