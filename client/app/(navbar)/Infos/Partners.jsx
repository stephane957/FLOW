import React from 'react';
import { View, ImageBackground, Text, ScrollView, Image } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { router, Link } from 'expo-router';
import styles from '../../styles/navbar.styles';
import { scale } from '../../styles/screen.styles';
import { partners_images } from '../../constants/images';

const Partners = () => {
    return (
        <View style={styles.view}>
            <View style={styles.leftHeader}>
                <View style={styles.arrowBackButton}>
                    <IconButton onPress={() => { router.back() }} icon="arrow-left" iconColor={'#232348'} size={scale(30)} />
                </View>
                <Text style={styles.textViewTitle}>Nos partenaires</Text>
            </View>
            <View style={styles.partnersBody}>
                <ScrollView style={styles.homeScrollView}
                    contentContainerStyle={styles.partnerScrollViewContent}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    alwaysBounceVertical={false}>
                    <ImageBackground imageStyle={styles.partnersImageBackgroundRadius}
                        source={partners_images.jeffImgBackground}
                        style={styles.partnersImageBackground}>
                        <Image source={partners_images.cnrsLogo} resizeMethod='scale' style={styles.partnerImgBackgroundIconLeft} />
                        <Text style={styles.partnerJeffText}>{"Jean-François Ghiglione\nCNRS & CEDRE"}</Text>

                    </ImageBackground>
                    <ImageBackground imageStyle={styles.partnersImageBackgroundRadius}
                        source={partners_images.taraImgBackground}
                        style={styles.partnersImageBackground}>
                        <Image source={partners_images.taraFondationLogo} resizeMethod='scale' style={styles.partnerImgBackgroundIconRight} />
                        <Link href={"https://fondationtaraocean.org/en/home/"} asChild>
                            <Button mode='contained' textColor='#0E4093'
                                buttonColor='#fff'
                                icon="arrow-right"
                                style={styles.partnerImgBackgroundButton}
                                contentStyle={{ flexDirection: 'row-reverse' }}> Site web </Button>
                        </Link>
                    </ImageBackground>
                    <ImageBackground imageStyle={styles.partnersImageBackgroundRadius}
                        source={partners_images.shakeImgBackground}
                        style={styles.partnersImageBackground}>
                        <Image source={partners_images.shakeLogo} resizeMethod='scale' style={styles.partnerImgBackgroundIconLeft} />
                        <Link href={"https://shake.be/"} asChild>
                            <Button mode='contained' textColor='#0E4093'
                                buttonColor='#fff'
                                rippleColor={"red"}
                                icon="arrow-right"
                                contentStyle={{ flexDirection: 'row-reverse' }}
                                style={styles.partnerImgBackgroundButton}> Site web </Button>
                        </Link>
                    </ImageBackground>
                    <ImageBackground resizeMode='cover' imageStyle={styles.partnersImageBackgroundRadius}
                        source={partners_images.betreeImgBackground}
                        style={styles.partnersImageBackground}>
                        <Image source={partners_images.betreeLogo} resizeMethod='scale' style={styles.partnerImgBackgroundIconCenter} />
                        <Link href={"https://www.wearebetree.com/"} asChild>
                            <Button mode='contained' textColor='#0E4093'
                                buttonColor='#fff'
                                rippleColor={"green"}
                                icon="arrow-right"
                                contentStyle={{ flexDirection: 'row-reverse' }}
                                style={styles.partnerImgBackgroundButton}> Site web </Button>
                        </Link>
                    </ImageBackground>
                    <ImageBackground imageStyle={styles.partnersImageBackgroundRadius} source={partners_images.rotaryImgBackground} style={styles.partnersImageBackground}>
                        <Image source={partners_images.rotaryFoundationLogo} resizeMode='contain' resizeMethod='scale' style={styles.rotaryFoundationLogo} />
                    </ImageBackground>
                </ScrollView>
            </View>
        </View>
    );
};

export default Partners;