import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { scale } from '../../styles/screen.styles';
import { Icon, TextInput, IconButton } from 'react-native-paper';
import { Link, useFocusEffect } from 'expo-router';
import ExitPopUpModal from '../../components/Modals/ExitPopUpModal';
import { RouterButton } from '../../components/RouterButton/RouterButton';
import styles from '../../styles/views.styles';
import { sendPostCollectData } from '../../controllers/SamplesController';
import { getMicroTutorialSwitch } from '../../controllers/UsersController';

export default function PostMacroplastic() {
    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const [inputIsEmpty, setIsEmpty] = useState(true);
    const [weight, setWeight] = useState(0);
    const [showMicroTutorial, setMicroTutorial] = useState("true");
    const showPopUp = () => setPopUpVisible(true);
    const closePopUp = () => setPopUpVisible(false);

    useFocusEffect(
        useCallback(() => {
            async function fetchData() {
                try {
                    const switchState = await getMicroTutorialSwitch();
                    setMicroTutorial(switchState);
                } catch (error) {
                    console.error('Error fetching username:', error.message);
                }
            }
            fetchData();
        }, [])
    );

    function changeText(value) {
        let num = parseInt(value);
        if (value.trim() && num > 0) {
            setIsEmpty(false);
            setWeight(num);
        }
        else setIsEmpty(true);
    }

    async function sendData() {
        await sendPostCollectData(weight)
    }

    return (
        <View style={styles.view}>
            <ExitPopUpModal isVisible={isPopUpVisible} onClose={closePopUp} />
            <View style={styles.headerWrap}>
                <View style={styles.arrowBackButton}>
                    <Link href={'../'} asChild>
                        <IconButton icon='arrow-left' iconColor='#00265A' size={scale(30)}
                        ></IconButton>
                    </Link>
                </View>
                <View style={styles.header}>
                    <Text style={styles.textLongTitle}>Le prélèvement des macrodéchets est terminé !</Text>
                </View>
                <View style={styles.leaveTextView}>
                    <TouchableOpacity onPress={showPopUp}>
                        <Text style={styles.leaveText}>Quitter</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.splitter}>
                    <View style={styles.viewMargin}>
                        <Icon source="weight-kilogram" size={scale(200)} color={'#93A5BD'} />
                        <Text style={styles.subTitle}>
                            Poids total des macrodéchets
                        </Text>
                        <TextInput mode='outlined'
                            label="Poids en kilogrammes"
                            selectionColor="#061A3B"
                            style={styles.textInput}
                            keyboardType="default"
                            activeOutlineColor="#061A3B"
                            textColor="#061A3B"
                            onChangeText={changeText} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Icon source="information-outline" color="rgba(0,0,0,0.6)" size={scale(26)} />
                        <Text style={styles.subText}>
                            En fournissant des données sur le poids, les scientifiques sont en mesure de mieux comprendre si les macrodéchets sont fortement fragmentés par rapport à leur poids.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <RouterButton path={"../Tutorials/MicroTutorial"} params={{ showTuto: showMicroTutorial }} disabled={inputIsEmpty} onPress={() => { sendData() }} />
            </View>
        </View>
    );
};
