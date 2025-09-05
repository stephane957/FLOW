import React, { useState, useEffect } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import { router } from "expo-router";
import { Switch, Avatar, Button } from 'react-native-paper';
import styles from '../../styles/navbar.styles'
import { Icon } from 'react-native-paper';
import { scale } from '../../styles/screen.styles';
import translations from '../../locales/export_translations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../../authconfiguration';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { saveSwitches, getUserAvatar, deleteUser, getDateInscription, getUsername } from '../../controllers/UsersController';
import DeleteAccountModal from '../../components/Modals/DeleteAccountModal';

const userLngCode = 'fr';
export let macrocategories = translations[userLngCode].macrocategories;
export let microcategories = translations[userLngCode].microcategories;
export let microsubcategories = translations[userLngCode].microsubcategories;
export let macrosubcategories = translations[userLngCode].macrosubcategories;
export let microtextures = translations[userLngCode].microtextures;
export let macromaterials = translations[userLngCode].macromaterials;
export let micromaterials = translations[userLngCode].micromaterials;
export let categorymapping = translations[userLngCode].categorymapping;
export let microcolors = translations[userLngCode].microcolors;
export let samplingsummary = translations[userLngCode].samplingsummary;

function SettingsPage() {
    const { clearSession, clearCredentials } = useAuth0();

    const [date_inscription, setDateInscription] = useState("AAAA-MM-JJ");
    const [isVisible, setIsVisible] = useState(false);
    const [avatarUri, setAvatarUri] = useState("");
    const [username, setUsername] = useState("");

    const [isNotifEnabled, setNotifIsEnabled] = useState(false);
    const toggleSwitchNotif = () => setNotifIsEnabled(previousState => !previousState);

    const [isLocEnabled, setLocifIsEnabled] = useState(false);
    const toggleSwitchLoc = () => setLocifIsEnabled(previousState => !previousState);


    const [isMacroEnabled, setMacroEnabled] = useState(false);
    AsyncStorage.getItem('macro_tutoriel').then((value) => value === 'false' ? setMacroEnabled(false) : setMacroEnabled(true));
    const toggleSwitchMacro = async () => {
        setMacroEnabled(previousState => !previousState);
        await AsyncStorage.setItem('macro_tutoriel', JSON.stringify(!isMacroEnabled));
    }

    const [isMicroEnabled, setMicroEnabled] = useState(false);
    AsyncStorage.getItem('micro_tutoriel').then((value) => value === 'false' ? setMicroEnabled(false) : setMicroEnabled(true));
    const toggleSwitchMicro = async () => {
        setMicroEnabled(previousState => !previousState);
        await AsyncStorage.setItem('micro_tutoriel', JSON.stringify(!isMicroEnabled));
    }

    const [isMaterialsEnabled, setMaterialsEnabled] = useState(false);
    AsyncStorage.getItem('materials').then((value) => value === 'false' ? setMaterialsEnabled(false) : setMaterialsEnabled(true));
    const toggleSwitchMaterials = async () => {
        setMaterialsEnabled(previousState => !previousState);
        await AsyncStorage.setItem('materials', JSON.stringify(!isMaterialsEnabled));
    }

    const showDeleteAccountModal = () => setIsVisible(true);
    const hideDeleteAccountModal = () => setIsVisible(false);


    useEffect(() => {
        const fetchAvatarUri = async () => {
            try {
                const userAvatar = await getUserAvatar();
                setAvatarUri(userAvatar);
                setDateInscription(await getDateInscription().then((date) => date.split('T')[0]));
                setUsername(await getUsername());
            } catch (error) {
                console.error('Error fetching user avatar:', error.message);
            }
        };
        fetchAvatarUri();
    }, [avatarUri]);

    const deleteAccount = async () => {
        try {
            await deleteUser();
            await clearSession();
            await AsyncStorage.multiRemove(['userid', 'language', 'username', 'image_url', 'macro_tutoriel', 'micro_tutoriel', 'materials', 'sampleid', 'isGroupSampling']);
            router.replace('/');
        } catch (error) {
            console.error("Account deletion failed: ", error.message);
        }
    };

    const logout = async () => {
        try {
            await clearSession();
            await saveSwitches();
            await AsyncStorage.multiRemove(['userid', 'language', 'username', 'image_url', 'macro_tutoriel', 'micro_tutoriel', 'materials', 'sampleid', 'isGroupSampling']);
            router.replace('/');
        } catch (error) {
            console.error("Logout failed: ", error);
        }
    };

    return (
        <View style={styles.settingsView}>
            <View style={styles.leftHeader}>
                <Text style={styles.settingsTitle}>Paramètres</Text>
            </View>
            <ScrollView style={styles.settingsScrollView}
                contentContainerStyle={styles.settingsScrollViewContent}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                bounces={false}
                alwaysBounceVertical={false}>
                <View style={styles.settingsPageSectionPseudo}>
                    <View style={styles.iconContainer}>
                        {avatarUri === "" && <Avatar.Icon size={scale(50)} color='#232348' icon="account" style={styles.userAvatarContainer} />}
                        {avatarUri !== "" && <Avatar.Image size={scale(50)} source={{ uri: avatarUri }} />}
                    </View>
                    <View style={styles.settingsTextPseudo}>
                        <Text style={styles.settingsText}>{{ username }}</Text>

                        <Text style={styles.settingsText}>{`Inscrit depuis le ${date_inscription}`}</Text>
                    </View>
                </View>
                <View style={styles.settingSeparator}></View>
                <Text style={styles.settingsTextCategory}> {"Permissions"} </Text>
                <View style={styles.settingsPageSection}>
                    <View style={styles.iconContainer}>
                        <Icon source="bell" color={'#000'} size={scale(50)} />
                    </View>
                    <View style={styles.settingsTextContainer}>
                        <Text style={styles.settingsText}>Notifications</Text>
                        <Text style={styles.settingsTextDescription}>Recevoir des notifications pour rester informé</Text>
                    </View>
                    <View style={styles.settingsToggle}>
                        <Switch
                            color={'#0E4093'}
                            onValueChange={toggleSwitchNotif}
                            value={isNotifEnabled} />
                        <Text style={styles.settingSwitchText}></Text>
                    </View>
                </View>
                <View style={styles.settingsPageSection}>
                    <View style={styles.iconContainer}>
                        <Icon source="map-marker" color={'#000'} size={scale(50)} />
                    </View>
                    <View style={styles.settingsTextContainer}>
                        <Text style={styles.settingsText}>Localisation</Text>
                        <Text style={styles.settingsTextDescription}>Autoriser l'application à accéder à votre localisation </Text>
                    </View>
                    <View style={styles.settingsToggle}>
                        <Switch
                            color={'#0E4093'}
                            onValueChange={toggleSwitchLoc}
                            value={isLocEnabled} />
                        <Text style={styles.settingSwitchText}></Text>
                    </View>
                </View>
                <View style={styles.settingSeparator}></View>
                <Text style={styles.settingsTextCategory}> {"Visibilité des tutoriels"} </Text>
                <View style={styles.settingsPageSection}>
                    <View style={styles.settingsTextContainer}>
                        <Text style={styles.settingsText}>Tutoriel Macroplastiques</Text>
                    </View>
                    <View style={styles.settingsToggle}>
                        <Switch
                            color={'#0E4093'}
                            onValueChange={toggleSwitchMacro}
                            value={isMacroEnabled} />
                        <Text style={styles.settingSwitchText}></Text>
                    </View>
                </View>
                <View style={styles.pageSettingsSection}>
                    <View style={styles.textSettingsContainer}>
                        <Text style={styles.textSettings}>Tutoriel Meso/Microplastiques</Text>
                    </View>
                    <View style={styles.settingsToggle}>
                        <Switch
                            color={'#0E4093'}
                            onValueChange={toggleSwitchMicro}
                            value={isMicroEnabled} />
                        <Text style={styles.settingSwitchText}></Text>
                    </View>
                </View>
                <View style={styles.pageSettingsSection}>
                    <View style={styles.textSettingsContainer}>
                        <Text style={styles.textSettings}>Matériel de prélèvement</Text>
                    </View>
                    <View style={styles.settingsToggle}>
                        <Switch
                            color={'#0E4093'}
                            onValueChange={toggleSwitchMaterials}
                            value={isMaterialsEnabled} />
                        <Text style={styles.settingSwitchText}></Text>
                    </View>
                </View>
                <View style={styles.settingSeparator}></View>
                <View style={styles.settingsPageLogout}>
                    <View style={styles.iconContainer}>
                        <Pressable onPress={logout}>
                            <Icon source="logout" color={'#000'} size={scale(50)} />
                        </Pressable>
                    </View>
                    <View style={styles.settingsTextContainer}>
                        <Text style={styles.settingsTextLogout}>Déconnexion</Text>
                        <Text style={styles.settingsTextDescriptionLogout}>Fermer l'application FLOW</Text>
                    </View>
                </View>
                <View style={styles.settingSeparator}></View>
                <Button style={styles.deleteAccountContainer} onPress={showDeleteAccountModal}>
                    <Text style={styles.settingsTextDeleteAccount}> Supprimer mon compte</Text>
                </Button>
            </ScrollView>
            <DeleteAccountModal isVisible={isVisible} onClose={hideDeleteAccountModal} deleteAccount={deleteAccount} />
        </View>
    );
}

export default Settings = () => {
    return (
        <Auth0Provider domain={config.domain} clientId={config.clientId}>
            <SettingsPage />
        </Auth0Provider>
    );
}