import React, { useState, useCallback } from 'react';
import { router, useFocusEffect } from "expo-router";
import { View, Text } from 'react-native';
import { Icon, TextInput, Button } from 'react-native-paper';
import viewStyle from '../../styles/views.styles';
import { scale } from '../../styles/screen.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSample, validateSampleExistence } from '../../controllers/SamplesController';
import { getMaterialsSwitch, getUserId, getMacroTutorialSwitch } from '../../controllers/UsersController';

export default function SelectionType(props) {
    const { setModalDisplayed, onClose } = props
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setDisabled] = useState(true);
    const [showMaterials, setShowMaterials] = useState(true);
    const [showMacroTutorial, setMacroTutorial] = useState(true);
    // regex for a UUID
    const regex = /^[0-9a-fA-F]{8}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{12}$/;
    const handleInputChange = (text) => {
        setInputValue(text);
        checkSampleID(text);
    };

    async function checkSampleID(text) {
        let result = text.replaceAll("-", "");
        if (regex.test(result)) {
            const res = await validateSampleExistence(result);
            setDisabled(!res);
            return;
        }
        setDisabled(true);
    }

    async function joinGroup() {
        const isValid = await validateSampleExistence(inputValue);
        if (isValid) {
            AsyncStorage.setItem('isGroupSampling', JSON.stringify(true));
            AsyncStorage.setItem('sampleid', inputValue);
            handleDisplay();
        }
    }

    async function startSolo() {
        AsyncStorage.setItem('isGroupSampling', JSON.stringify(false));
        const data = {
            "user_id": await getUserId()
        }
        await createSample(data);
        handleDisplay();
    }

    function handleDisplay() {
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

    useFocusEffect(
        useCallback(() => {
            async function fetchData() {
                try {
                    const materialsShow = await getMaterialsSwitch();
                    setShowMaterials(JSON.parse(materialsShow));
                    const switchState = await getMacroTutorialSwitch();
                    setMacroTutorial(JSON.parse(switchState));
                } catch (error) {
                    console.error('Error fetching showMaterials state in Selection Type:', error.message);
                }
            }
            fetchData();
        }, [])
    );

    return (
        <View style={viewStyle.modalContainer}>
            <View style={viewStyle.viewSampleType}>
                <Text style={viewStyle.titleSampleType}>
                    Type d'échantillonnage
                </Text>
                <Text style={viewStyle.subTitleSampleType}>
                    Allez-vous effectuer l'échantillonnage seul ou en groupe ?
                </Text>
            </View>
            <View style={viewStyle.viewSoloSampling}>
                <Text style={viewStyle.titleSoloSampling}>
                    Échantillonnage en solo
                </Text>
                <View style={viewStyle.viewSoloIconContainer}>
                    <Icon source='account' size={scale(60)} color='white' />
                    <Button
                        style={viewStyle.buttonEnabled}
                        onPress={() => { startSolo() }}>
                        <Text style={viewStyle.textEnabled}> Commencer l'échantillon</Text>
                    </Button>
                </View>
            </View>
            <View style={viewStyle.separatorSampling} />
            <View style={viewStyle.viewSoloSampling}>
                <Text style={viewStyle.titleSoloSampling}>
                    Échantillonnage en groupe
                </Text>
                <View style={viewStyle.containerGroupSampling}>
                    <Icon source='account-group' size={scale(60)} color='white' />
                    <Button
                        style={viewStyle.buttonEnabled}
                        onPress={() => { setModalDisplayed(1) }}>
                        <Text style={viewStyle.textEnabled}>Commencer en groupe</Text>
                    </Button>
                </View>
            </View>
            <View style={viewStyle.separatorSampling} />
            <View style={viewStyle.containerJoinGroup}>
                <Text style={viewStyle.titleJoinSampling}>
                    Rejoindre un groupe
                </Text>
                <View style={viewStyle.viewContainer}>
                    <Text style={viewStyle.subTextGroup}>
                        Ajoutez l'identifiant de l'échantillon pour rejoindre votre groupe
                    </Text>
                    <TextInput mode='outlined'
                        label="Identifiant de l'échantillon"
                        selectionColor="#232348"
                        style={viewStyle.inputSampling}
                        keyboardType="default"
                        activeOutlineColor="#232348"
                        value={inputValue}
                        onChangeText={handleInputChange}
                        onPaste={handleInputChange}
                        textColor="#232348" />
                </View>
                <View style={viewStyle.containerRouterButtonSample} />
                <View>
                    <Button style={isDisabled ? viewStyle.buttonDisabled : viewStyle.buttonEnabled}
                        contentStyle={isDisabled ? viewStyle.buttonDisabled : viewStyle.buttonEnabled}
                        disabled={isDisabled} onPress={() => { joinGroup() }}>
                        <Text style={isDisabled ? viewStyle.textDisabled : viewStyle.textEnabled}>
                            Rejoindre l'échantillon
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}