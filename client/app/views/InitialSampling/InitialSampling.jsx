import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { Text, Icon, IconButton } from 'react-native-paper';
import ExitPopUpModal from '../../components/Modals/ExitPopUpModal';
import { scale } from '../../styles/screen.styles';
import { Link } from 'expo-router';
import styles from '../../styles/views.styles';
import { RouterButton } from '../../components/RouterButton/RouterButton';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { genericSampleDataSetter } from '../../controllers/SamplesController';
import { getTideData } from '../../controllers/TideController';

export default function InitialSampling() {
    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const showPopUp = () => setPopUpVisible(true);
    const closePopUp = () => setPopUpVisible(false);
    const iconSize = scale(40);
    const [date, setDate] = useState(new Date());
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [tides, setTides] = useState({ low: '', high: '', lowTideDate: new Date(), highTideDate: new Date() });

    useEffect(() => {
        fetchLocationAndTideData();
    }, []);

    const fetchLocationAndTideData = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            const coords = (await Location.getCurrentPositionAsync()).coords;
            const { latitude, longitude } = coords;

            setLocation({ latitude, longitude });

            await AsyncStorage.setItem('latitude', JSON.stringify(coords.latitude));
            await AsyncStorage.setItem('longitude', JSON.stringify(coords.longitude));
            fetchTideData(latitude, longitude);

        } catch (error) {
            console.error('Failed to fetch location:', error);
        }
    };

    const fetchTideData = async (latitude, longitude) => {
        try {
            const { lowTide, highTide } = await getTideData(latitude, longitude);

            const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
                weekday: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });

            setTides({
                low: lowTide ? dateTimeFormatter.format(new Date(lowTide.time)) : '',
                high: highTide ? dateTimeFormatter.format(new Date(highTide.time)) : '',
                highTideDate: highTide ? new Date(highTide.time) : new Date(),
                lowTideDate: lowTide ? new Date(lowTide.time) : new Date(),
            });
        } catch (error) {
            console.error('Failed to fetch tide data:', error);
        }
    };

    const saveData = async () => {
        const data = {
            "sample_date": date,
            "sample_time": date,
            "high_tide_time": tides.highTideDate,
            "start_gps_latitude": location.latitude,
            "start_gps_longitude": location.longitude
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
                    <Text style={styles.textViewTitle}>Informations sur le prélèvement</Text>
                </View>
                <View style={styles.leaveTextView}>
                    <TouchableOpacity onPress={showPopUp}>
                        <Text style={styles.leaveText}>Quitter</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.initialSamplingBody}>
                <View style={styles.pageSection}>
                    <Text style={styles.textCategoryTitle}>Date</Text>
                    <View style={styles.viewSamplingContainer}>
                        <View style={styles.iconContainer}>
                            <Icon source="calendar-check-outline" color={'white'} size={iconSize} />
                        </View>
                        <Text style={styles.textDate}>
                            {date.toLocaleDateString()}
                        </Text>
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.pageSection}>
                    <Text style={styles.textCategoryTitle}>Location</Text>
                    <View style={styles.viewSamplingContainer}>
                        <View style={styles.iconContainer}>
                            <Icon source="map-marker" color={'white'} size={iconSize} />
                        </View>
                        <View style={styles.viewTextContainer}>
                            <View style={styles.viewRowContainer}>
                                <Text style={styles.textTitle}>Latitude :</Text>
                                <Text style={styles.textResult}>{location.latitude || "Chargement ..."}</Text>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.viewRowContainer}>
                                <Text style={styles.textTitle}>Longitude :</Text>
                                <Text style={styles.textResult}>{location.longitude || "Chargement ..."}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.pageSection}>
                    <Text style={styles.textCategoryTitle}>Marées</Text>
                    <View style={styles.viewSamplingContainer}>
                        <View style={styles.iconContainer}>
                            <Icon source="waves" color={'white'} size={iconSize} />
                        </View>
                        <View style={styles.viewTextContainer}>
                            <View style={styles.viewRowContainer}>
                                <Text style={styles.textTitle}>Basse :</Text>
                                <TextInput style={styles.textResult} editable={false}>{tides.low || "Chargement .."}</TextInput>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.viewRowContainer}>
                                <Text style={styles.textTitle}>Haute :</Text>
                                <TextInput style={styles.textResult} editable={false}>{tides.high || "Chargement .."}</TextInput>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.separator} />
            </View>
            <View style={styles.footer}>
                <RouterButton path={'/views/SamplingUpdate/MacroplasticUpdate'} text="Confirmer" onPress={() => { saveData() }} />
            </View>
        </View>
    );
};