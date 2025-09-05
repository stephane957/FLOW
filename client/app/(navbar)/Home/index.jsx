import React, { useState, useEffect } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, Pressable } from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import styles from '../../styles/navbar.styles';
import wave from '../../assets/images/home-wave.png';
import ALaUneFLOW from '../../assets/images/FLOW_expedition.png';
import CombinedModal from '../../views/InitialSampling/CombinedModal'
import { scale } from '../../styles/screen.styles';
import { getUserAvatar, getUsername } from '../../controllers/UsersController';

export default function Home() {
    const [sampleChoiceModalVisible, setModalVisbility] = useState(false);
    const showSampleChoiceModal = () => setModalVisbility(true);
    const hideSampleChoiceModal = () => setModalVisbility(false);
    const router = useRouter();
    const [userName, setUserName] = useState('');
    const [avatarUri, setAvatarUri] = useState("");
    const homeMessage = "Bonjour, " + userName + '\n' + "Bienvenue sur FLOW !";

    async function getUsernameAndAvatar() {
        const userAvatar = await getUserAvatar();
        const username = await getUsername();
        return { username, userAvatar };
    }

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const { username, userAvatar } = await getUsernameAndAvatar();
                setAvatarUri(userAvatar); setUserName(username);
            } catch (error) {
                console.error('Error fetching username:', error.message);
            }
        };
        fetchUsername();
    }, [userName, avatarUri]);

    return (
        <View style={styles.homeView}>
            <View style={styles.imageWrapper}>
                <ImageBackground source={wave} style={styles.imageBackground}>
                    <View style={styles.imageBackgroundContent}>
                        {avatarUri === "" && <Avatar.Icon size={scale(60)} color='#232348' icon="account" style={styles.userAvatarContainer} />}
                        {avatarUri !== "" && <Avatar.Image size={scale(60)} source={{ uri: avatarUri }} />}
                    </View>
                    <Text style={styles.welcomeText}>
                        {homeMessage}
                    </Text>
                    <Button mode={"contained"}
                        style={styles.samplingButtonPosition}
                        contentStyle={styles.samplingButton}
                        buttonColor="white"
                        onPress={() => { showSampleChoiceModal() }}
                    >
                        <Text style={styles.samplingButtonText}>Nouveau prélèvement</Text>
                    </Button>
                </ImageBackground>
            </View>
            <CombinedModal isVisible={sampleChoiceModalVisible} onClose={hideSampleChoiceModal} />
            <View style={styles.homeBody}>
                <ScrollView style={styles.homeScrollView}
                    contentContainerStyle={styles.homeScrollViewContent}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    alwaysBounceVertical={false}>
                    <View style={styles.homeScrollViewHeader}>
                        <Text style={styles.homeScrollViewHeaderTitle}>Le compte rendu de votre dernière collecte est disponible !</Text>
                        <Button mode='contained'
                            buttonColor={styles.samplingSummaryButtonColor}
                            contentStyle={styles.samplingSummaryButton}
                            style={styles.samplingSummaryButtonStyle}
                            onPress={() => { router.push('/Home/SamplingSummary') }}
                        >
                            <Text style={styles.samplingSummaryButtonText}>Voir compte rendu</Text>
                        </Button>
                    </View>
                    <View style={styles.homeScrollViewFeature}>
                        <Text style={styles.homeScrollViewFeatureTitle}>A la Une de FLOW</Text>
                        <Link href={"https://www.flowproject.be/projects-6"} asChild>
                            <Pressable><Image source={ALaUneFLOW} resizeMethod='scale' style={styles.featuredFLOWImage}></Image></Pressable>
                        </Link>
                    </View>
                    <Text style={styles.partnerText}>Nos partenaires</Text>
                    <Button mode='contained'
                        buttonColor={styles.samplingSummaryButtonColor}
                        contentStyle={styles.partnersButton}
                        style={styles.samplingSummaryButtonStyle}
                        onPress={() => { router.push('/Infos/Partners') }}
                    >
                        <Text style={styles.partnersButtonText}>Voir partenaires </Text>
                    </Button>
                </ScrollView>
            </View>
        </View>
    )
}
