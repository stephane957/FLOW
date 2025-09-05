import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import viewStyles from '../../styles/views.styles';
import navbarStyles from '../../styles/navbar.styles';
import { scale } from '../../styles/screen.styles';
import flowLogo from '../../assets/images/FLOW_logo_black.png';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function AboutFlow() {
    const router = useRouter();
    return (
        <View style={navbarStyles.aboutFLOWView}>
            <Image source={flowLogo} style={navbarStyles.logoStyle}></Image>
            <View style={navbarStyles.pageSection}>
                <Text style={viewStyles.textViewTitleAbout}>Qui sommes-nous ?</Text>
                <Text style={viewStyles.textAbout}>
                    FLOW, acronyme de “For Living Oceans and Water”, est un projet au service et en faveur d’une eau et d’océans vivants. Il s’inscrit dans une approche durable des écosystèmes et de leur protection.
                </Text>
            </View>
            <View style={viewStyles.pageSection}>
                <Text style={viewStyles.textViewTitleAbout}>Notre mission</Text>
                <Text style={viewStyles.textAbout}>
                    La mission de Flow est d’utiliser les sciences participatives ainsi que l’éducation à l’environnement afin d’accompagner le grand public et les acteurs de la préservation au travers d’actions contribuant à la lutte contre la pollution causée par les déchets plastiques.
                </Text>
            </View>
            <View style={{ height: '35%' }}>
                <Text style={viewStyles.textViewTitleAbout}>Protocole OSPAR</Text>
                <YoutubePlayer height={'80%'} width={scale(350)} play={false} videoId={'sBEFWStwS58'}></YoutubePlayer>
            </View>
            <View style={viewStyles.aboutFooter}>
                <Button mode='contained' buttonColor={navbarStyles.samplingSummaryButtonColor}
                    contentStyle={viewStyles.quizLinkBtn}
                    style={viewStyles.quizLinkBtnStyle}
                    onPress={() => { router.push('/Infos/Quiz') }}
                ><Text style={viewStyles.quizLinkBtnText}>Lancer le quiz interactif</Text>
                </Button>
            </View>
        </View>
    );
};