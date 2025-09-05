import { moderateScale, width } from './screen.styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../constants/enums';

EStyleSheet.build({ $rem: moderateScale(1) });

export default styles = EStyleSheet.create({
    view: {
        alignItems: 'center',
        height: "92%",
        width: width,
        paddingTop: "25$rem",
        backgroundColor: '#ffff',
    },
    aboutFLOWView: {
        alignItems: 'center',
        paddingTop: "60$rem",
        backgroundColor: '#ffff',
        height: '92%'
    },
    homeView: {
        alignItems: 'center',
        height: "92%",
        width: width,
        backgroundColor: '#ffff',
    },
    headerWrap: {
        width: '100%',
        maxHeight: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%',
        flexDirection: 'row',
    },
    arrowBackButton: {
        position: 'absolute',
        left: '0$rem',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftHeader: {
        alignItems: 'flex-start',
        width: '100%',
        maxHeight: '15%',
        flexDirection: 'row',
    },
    logoStyle: {
        width: "400$rem",
        height: "10%",
        alignSelf: 'center',
    },
    welcomeText: {
        fontWeight: 'bold',
        color: '#232348',
        fontSize: '22$rem',
        position: 'absolute',
        bottom: "65%",
        left: "2%"
    },
    tabBarStyle: {
        position: 'absolute',
        bottom: '0$rem', right: '0$rem', left: '0$rem',
        height: "8%",
        backgroundColor: COLORS.white
    },
    tabBarIconView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "10%",
        borderTopWidth: '2$rem'
    },
    tabBarIconImage: {
        height: '28$rem',
        width: '28$rem',
    },
    tabBarIconText: {
        fontSize: '12$rem'
    },
    imageWrapper: {
        height: '45%',
        width: '100%',
        overflow: 'hidden',
    },
    imageBackground: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    imageBackgroundContent: {
        position: 'absolute',
        right: "5%",
        top: "10%"
    },
    userAvatarContainer: {
        borderStyle: 'solid',
        borderColor: '#232348',
        borderWidth: '2$rem',
        backgroundColor: '#fff'
    },
    textViewTitle: {
        fontWeight: 'bold',
        color: '#232348',
        fontSize: "28$rem",
        alignSelf: 'flex-start',
        marginLeft: '50$rem',
    },
    homeBody: {
        height: "55%",
        alignItems: 'center',
        width: '100%',
        padding: "5$rem",
        marginVertical: '5$rem',
    },
    homeScrollView: {
        height: "100%",
        width: '100%',
        marginVertical: '5$rem',
        paddingHorizontal: "5$rem",
    },
    homeScrollViewContent: {
        rowGap: '5$rem',
        columnGap: '2$rem',
        justifyContent: "center",
        alignItems: "center",
    },
    homeScrollViewHeader: {
        width: '100%',
        height: '120$rem',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '5$rem',
    },
    homeScrollViewHeaderTitle: {
        fontWeight: '500',
        color: '#0E4093',
        fontSize: '18$rem',
    },
    homeScrollViewFeature: {
        height: '200$rem',
        width: '100%',
        justifyContent: 'space-between',
    },
    homeScrollViewFeatureTitle: {
        fontWeight: '500',
        color: '#0E4093',
        fontSize: '18$rem',
        textAlign: 'left',
        marginVertical: '10$rem',
        height: '15%'
    },
    featuredFLOWImage: {
        width: '100%',
        height: '85%',
        borderRadius: "20$rem"
    },
    partnersBody: {
        height: "95%",
        alignItems: 'center',
        width: '100%',
        padding: "5$rem",
        marginVertical: '5$rem',
    },
    partnerText: {
        fontSize: '18$rem',
        color: '#0E4093',
        alignSelf: 'flex-start'
    },
    partnerScrollViewContent: {
        rowGap: '10$rem',
        columnGap: '2$rem',
        justifyContent: "center",
        alignItems: "center",
    },
    partnersImageBackground: {
        width: '350$rem',
        height: '180$rem',
    },
    partnersImageBackgroundRadius: {
        borderRadius: "30$rem",
    },
    partnerImgBackgroundIconLeft: {
        position: 'absolute',
        left: "5%",
        top: "8%",
        width: '70$rem',
        height: '70$rem',
    },
    partnerJeffText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: '16$rem',
        position: 'absolute',
        bottom: "15%",
        left: "5%"
    },
    partnerImgBackgroundIconCenter: {
        position: 'absolute',
        left: "40%",
        top: "10%",
        width: '70$rem',
        height: '70$rem',
    },
    partnerImgBackgroundIconRight: {
        position: 'absolute',
        right: "5%",
        top: "10%",
        width: '200$rem',
        height: '60$rem',
    },
    rotaryFoundationLogo: {
        position: 'absolute',
        left: "5%",
        top: "5%",
        width: '100$rem',
        height: '80$rem',
    },
    partnerImgBackgroundButton: {
        position: 'absolute',
        bottom: "5%",
        right: "5%",
        width: '120$rem',
    },
    samplingButtonColor: '#fff',
    samplingSummaryButtonColor: '#232348',
    samplingButton: {
        width: '250$rem',
        height: '60$rem',
        borderRadius: '30$rem',
    },
    samplingButtonText: {
        fontSize: '18$rem',
        height: '100%',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: '#09295A',
    },
    samplingButtonPosition: {
        position: 'absolute',
        bottom: '20%',
        left: '17.7%',
        selfAlign: 'center',
        borderRadius: '30$rem'
    },
    samplingSummaryButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '250$rem',
        height: '60$rem',
        borderRadius: '30$rem'
    },
    samplingSummaryButtonText: {
        height: '100%',
        fontSize: '18$rem',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
    samplingSummaryButtonStyle: {
        alignItems: 'center',
        marginTop: '10$rem',
        borderRadius: '30$rem',
        justifyContent: 'center',
    },
    settingsView: {
        alignItems: 'center',
        height: '92%',
        width: '100%',
        paddingTop: '20$rem',
        backgroundColor: '#fff'
    },
    settingsTitle: {
        fontWeight: 'bold',
        color: '#232348',
        fontSize: "32$rem",
        marginVertical: '20$rem',
    },
    settingsScrollView: {
        padding: '5$rem',
        height: "100%",
        width: '100%',
        paddingHorizontal: "5$rem",
    },
    settingsScrollViewContent: {
        justifyContent: "center",
        alignItems: "center",
        height: 'auto'
    },
    settingsPageSection : {
        flexDirection: 'row',
        width: '95%',
        padding: '5$rem',
        maxHeight: '15%',
        justifyContent: 'space-between',
    }, 
    settingsPageSectionPseudo: {
        flexDirection: 'row',
        padding: '5$rem',
        width: '95%',
    },
    settingsTextPseudo: {
        flexDirection: 'column',
        alignContent: 'left',
        textAlignVertical: 'center',
        marginLeft: '18$rem',
    },
    settingsText: {
        fontSize: '16$rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlignVertical: 'center',
        textAlign: 'left',
        color: '#000',
    },
    settingsTextDescription: {
        fontSize: '12$rem',
        color: '#000',
        textAlign: 'left'
    },
    settingsTextContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        textAlign: 'left',
        alignSelf: 'flex-start',
        textAlignVertical: 'center',
        width: '60%',
        padding: '5$rem'
    },
    settingsTextCategory: {
        fontSize: '24$rem',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: '#232348',
        marginVertical: '5$rem',
    },
    settingsPageLogout: {
        flexDirection: 'row',
        width: '95%',
        padding: '5$rem',
        maxHeight: '10%',
    },
    settingsTextLogout: {
        fontSize: '16$rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlignVertical: 'center',
        textAlign: 'left',
        color: '#000',
        marginLeft: '13$rem'
    },
    settingsTextDescriptionLogout: {
        fontSize: '12$rem',
        color: '#000',
        textAlign: 'left',
        marginLeft: '13$rem'
    },
    settingsTextDeleteAccount: {
        fontSize: '18$rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
    },
    settingSeparator: {
        marginVertical: "2%",
        height: '2$rem',
        width: '100%',
        backgroundColor: '#0E4093',
    },
    settingSwitchText: {
        marginLeft: '10$rem',
        color: '#232348'
    },
    settingsToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    deleteAccountContainer: {
        width: '90%',
        height: '50$rem',
        padding: "5$rem",
        borderRadius: '30$rem',
        backgroundColor: "#ff6347"
    },
    userAvatarContainer: {
        borderStyle: 'solid',
        borderColor: '#232348',
        borderWidth: 3,
        backgroundColor: '#fff'
    },
    footer: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
    },
    scrollViewSummary: {
        width: '100%',
        height: '85%',
        borderRadius: '10$rem',
        marginVertical: '10$rem',
        padding: '5$rem'
    },
    scrollViewContainerSummary: {
        alignItems: 'center',
        borderRadius: '5$rem',
        width: '100%',
    },
    loadingContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    samplingTitle: {
        fontSize: '20$rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlign: 'left',
        color: '#232348',
        padding: '5$rem',
        marginLeft: '40$rem',
        width: '88%'
    },
    lastSamplingTitle: {
        fontSize: '20$rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlign: 'left',
        color: '#232348',
        padding: '5$rem',
        marginLeft: '50$rem',
        marginRight: '20$rem',
        width: '88%'
    },
    emptyStatsTitle: {
        fontSize: '24$rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlign: 'left',
        color: '#232348',
        padding: '5$rem',
        marginLeft: '20$rem',
        marginRight: '20$rem',
        marginTop: '25$rem',
        width: '88%'
    },
    emptyStatsText: {
        fontSize: '16$rem',
        textAlign: 'left',
        alignSelf: 'flex-start',
        color: 'rgba(0,0,0,0.7)',
        marginBottom: '10$rem',
        marginLeft: '25$rem',
        marginRight: '20$rem',
    },
    emptyStatsImage: {
        marginTop: '40$rem',
        width: '100%',
        height: '65%'
    },
    distributionTitle: {
        fontSize: '20$rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlignVertical: 'center',
        color: '#313131',
        marginTop: '10$rem',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '20$rem',
        width: '85%',
    },
    pieChart: {
        borderRadius: '15$rem',
        elevation: '3$rem',
        shadowOpacity: '0.1$rem',
        shadowRadius: '15$rem',
        shadowOffset: { width: '0$rem', height: '2$rem' },
        marginTop: '20$rem',
        marginBottom: '10$rem',
    },
    barChart: {
        marginBottom: '20$rem',
        paddingRight: '1$rem',
        borderRadius: '15$rem',
        elevation: '3$rem',
        shadowOpacity: '0.1$rem',
        shadowRadius: '15$rem',
        shadowOffset: { width: '0$rem', height: '2$rem' }
    },
    pageSection: {
        justifyContent: 'center',
        alignItems: 'left',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginVertical: '1%',
    },
});