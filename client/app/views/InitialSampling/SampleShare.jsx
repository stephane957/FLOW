import React, { useState, useEffect, useCallback } from 'react';
import { router, useFocusEffect } from "expo-router";
import { scale } from '../../styles/screen.styles';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon, Button } from 'react-native-paper';
import viewStyle from '../../styles/views.styles';
import * as Clipboard from 'expo-clipboard';
import { createSample } from '../../controllers/SamplesController';
import { getUserId, getMaterialsSwitch, getMacroTutorialSwitch } from '../../controllers/UsersController';

export default function SampleShare(props) {
    const { setModalDisplayed, onClose } = props
    const [sampleId, setSampleId] = useState('Fetching');
    const [showMaterials, setShowMaterials] = useState(true);
    const [showMacroTutorial, setMacroTutorial] = useState(true);
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(sampleId);
    };

    useEffect(() => {
        const getSampleID = async () => {
            const data = {
                "user_id": await getUserId()
            }
            const id = await createSample(data);
            setSampleId(id);
        }

        getSampleID();
        AsyncStorage.setItem('isGroupSampling', JSON.stringify(false));
    }, []);

    useFocusEffect(
        useCallback(() => {
            async function fetchData() {
                try {
                    const materialsShow = JSON.parse(await getMaterialsSwitch());
                    setShowMaterials(materialsShow)
                    const switchState = await getMacroTutorialSwitch();
                    setMacroTutorial(JSON.parse(switchState));
                } catch (error) {
                    console.error('Error fetching showMaterials state in Sample Share:', error.message);
                }
            }
            fetchData();
        }, [])
    );

    function handleClick() {
        if (!showMaterials && showMacroTutorial) {
            router.push('/views/Tutorials/MacroTutorial')
            onClose();
        }
        if (!showMaterials && !showMacroTutorial) {
            router.push('/views/InitialSampling/DistanceSelection')
            onClose();
        }
        if (showMaterials) {
            setModalDisplayed(2);
        }
    }

    return (
        <View style={viewStyle.modalContainer}>
            <View style={{ height: '80%' }}>
                <Text style={viewStyle.titleSampleType}>
                    Group Sampling
                </Text>
                <Text style={viewStyle.subTitleSampleType}>
                    Voici votre identifiant d'échantillon, cliquez sur le bouton ci-dessous pour le copier et le partager !
                </Text>
                <View style={viewStyle.seperatorLarge} />
                <TouchableOpacity
                    style={viewStyle.clipboardButton}
                    onPress={() => { copyToClipboard() }}>
                    <Text style={viewStyle.clipboardButtonText}>
                        {sampleId}
                    </Text>
                    <Icon source='content-copy' size={scale(16)} color='white' />
                </TouchableOpacity>
            </View>
            <View style={viewStyle.sampleRouterContainer}>
                <Button contentStyle={viewStyle.buttonRouter} style={viewStyle.buttonRouter} buttonColor='#232348' onPress={() => { handleClick() }}>
                    <Text style={viewStyle.textRouter}>
                        Commencer l'échantillon !
                    </Text>
                </Button>
            </View>
        </View>
    );
}