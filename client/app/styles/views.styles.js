import { moderateScale, height, width } from './screen.styles';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({ $rem: moderateScale(1) });

export default styles = EStyleSheet.create({
    view: {
        alignItems: 'center',
        paddingTop: "20$rem",
        height: height,
        width: width,
    },
    viewHalf: {
        alignItems: 'center',
        height: '50%',
        width: '100%',
        padding: '5$rem'
    },
    modalContentTrash: {
        height: '90%',
        width: '98%',
        marginBottom: '90$rem',
        backgroundColor: 'white',
        borderRadius: '10$rem',
    },
    modal: {
        backgroundColor: 'orange',
        alignItems: 'center',
        height: '65%',
        marginBottom: '90$rem',
        backgroundColor: 'white',
        borderRadius: '10$rem',
    },
    modalTrashCategory: {
        alignItems: 'center',
        height: '55%',
        marginBottom: '90$rem',
        backgroundColor: 'white',
        borderRadius: '20$rem',
    },
    modalTrashSelection: {
        alignItems: 'center',
        height: '90%',
        marginBottom: '90$rem',
        backgroundColor: 'white',
        borderRadius: '20$rem',
    },
    leftHeader: {
        alignItems: 'flex-start',
        width: '100%',
        maxHeight: '15%',
        flexDirection: 'row',
    },
    userAvatarContainer: {
        borderStyle: 'solid',
        borderColor: '#232348',
        borderWidth: 3,
        backgroundColor: '#fff'
    },
    headerWrap: {
        width: '100%',
        maxHeight: '15%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: '5%',
        flexDirection: 'row',
    },
    summaryWrap: {
        marginTop: '5%',
        width: '100%',
        maxHeight: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '1%',
        flexDirection: 'row',
    },
    arrowBackButton: {
        position: 'absolute',
        left: '0$rem',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionnaireArrowBackButton: {
        position: 'absolute',
        paddingTop: '10$rem',
        left: '0$rem',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionnairePageNum: {
        position: 'absolute',
        paddingTop: '10$rem',
        right: '0$rem',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(0, 38, 90)',
        fontSize: '20$rem',
        fontWeight: 'bold'
    },
    leaveTextView: {
        position: 'absolute',
        right: '10$rem',
        justifyContent: 'center',
    },
    leaveText: {
        color: '#232348',
        fontSize: "15$rem",
        textAlignVertical: 'center',
    },
    header: {
        width: 'auto',
        maxWidth: '70%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '10$rem',
        marginLeft: '15%',
    },
    textViewTitle: {
        fontWeight: 'bold',
        color: '#232348',
        fontSize: "28$rem",
        alignSelf: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    textModalTitle: {
        maxWidth: '80%',
        alignItems: 'flex-end',
        textAlign: 'center',
        fontSize: "30$rem",
        color: '#232348',
        fontWeight: 'bold',
    },
    buttonModalExit: {
        position: 'absolute',
        right: '0$rem',
        justifyContent: 'center',
        height: '100%',
    },
    textLongTitle: {
        fontWeight: 'bold',
        color: '#232348',
        fontSize: "22$rem",
        alignContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    subTextContainer: {
        marginHorizontal: '30$rem',
        marginVertical: '5$rem',
        fontSize: '12$rem'
    },
    microTitleText: {
        fontSize: "20$rem",
        color: 'rgba(0,0,0,0.6)',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginVertical: "3$rem",
    },
    titleText: {
        fontSize: "12$rem",
        color: 'rgba(0,0,0,0.6)',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginVertical: "3$rem",
    },
    questionnaireView: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: '5$rem',
        backgroundColor: '#EEEEEE'
    },

    textTitleBold: {
        fontSize: "12$rem",
        color: 'rgba(0,0,0,1)',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginVertical: "3$rem",
        fontWeight: 'bold'
    },
    subText: {
        fontSize: '12$rem',
        color: 'rgba(0,0,0,0.6)',
        textAlign: 'left',
        flexWrap: 'wrap',
        marginLeft: '3$rem'
    },
    switchText: {
        fontSize: '14$rem',
        color: 'rgba(0,0,0,0.6)',
        textAlign: 'left',
        flexWrap: 'wrap',
        marginLeft: '3$rem',
        fontWeight: '400'
    },
    buttonText: {
        fontSize: '18$rem',
        fontWeight: '600'
    },
    separator: {
        marginVertical: "3%",
        height: '2$rem',
        width: '85%',
        backgroundColor: '#ddd',
    },
    subTitle: {
        fontWeight: 'bold',
        color: '#061A3B',
        fontSize: '22$rem',
        alignContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    infoContainer: {
        flexDirection: 'row',
        width: '83%',
        alignItems: 'center'
    },
    textInput: {
        width: '100%',
        marginVertical: '1%'
    },
    questionContainer: {
        marginBottom: '5$rem',
        width: '100%',
        alignItems: 'center',
    },
    summaryContainer: {
        marginBottom: '5$rem',
        width: '100%',
        alignItems: 'center',
    },
    questionnaireTextInput: {
        fontSize: '18$rem',
        borderWidth: '2$rem',
        marginTop: '10$rem',
        color: '#232348',
        borderColor: '#232348',
        borderRadius: '10$rem',
        width: '360$rem',
        marginBottom: '10$rem',
        textAlignVertical: 'top',
        padding: '10$rem',
        paddingTop: '13$rem'
    },
    largeTextInput: {
        height: '300$rem',
        textAlignVertical: 'top',
        padding: '10$rem',
        borderWidth: '2$rem',
        borderColor: '#232348',
        borderRadius: '10$rem',
        fontSize: '16$rem',
        width: '300$rem',
        marginBottom: '10$rem',
    },
    frontPageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '300$rem',
        height: '50$rem',
        borderRadius: '20$rem',
        margin: '5$rem'
    },
    questionnairePickerInput: {
        borderWidth: '2$rem',
        borderColor: '#232348',
        borderRadius: '10$rem',
        fontSize: '16$rem',
        paddingVertical: '6$rem',
        paddingHorizontal: '12$rem',
        width: '300$rem',
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: '10$rem',
    },
    pickerItemStyle: {
        textAlign: 'center',
    },
    buttonsContainer: {
        width: '380$rem',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '10$rem',
    },
    questionnaireModalButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: '2$rem',
        borderColor: '#232348',
        borderRadius: '10$rem',
        paddingHorizontal: '12$rem',
        width: '300$rem',
        marginBottom: '10$rem',
    },
    questionnaireModalButtonText: {
        fontSize: '18$rem',
        textAlign: 'center',
        color: '#232348',
    },
    questionnairemodalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    questionnaireModalContent: {
        backgroundColor: 'white',
        borderRadius: '10$rem',
        padding: '10$rem',
        width: '300$rem',
        alignItems: 'center',
    },
    questionnaireModaldropdownItem: {
        paddingVertical: '10$rem',
        paddingHorizontal: '20$rem',
        width: '100%',
    },
    questionnaireModalItemText: {
        fontSize: '18$rem',
        textAlign: 'center',
        color: '#232348',
    },
    questionnaireModalSeparator: {
        height: 1,
        backgroundColor: '#232348',
        width: '100%',
    },
    textInputPartial: {
        width: '90%',
        marginVertical: '1%',
        marginHorizontal: '2%',
        height: '40$rem',
        backgroundColor: 'white',
        borderColor: '#232348',
    },
    buttonSizing: {
        padding: '5$rem',
        borderRadius: '4$rem',
        width: '350$rem',
        marginTop: '3%'
    },
    viewMargin: {
        marginBottom: '5$rem',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    splitter: {
        marginVertical: '5%',
        alignItems: 'center',
        width: '100%'
    },
    container: {
        flex: 1,
    },
    authContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
    },
    logInContainer: {
        alignItems: 'center',
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    mapContainer: {
        height: '88%',
        width: '90%',
        borderRadius: '15$rem',
        marginVertical: '5$rem',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    title: {
        fontWeight: 'bold',
        color: '#232348',
        fontSize: 24,
        alignContent: 'center',
        textAlignVertical: 'center',
    },
    pageSection: {
        justifyContent: 'center',
        alignItems: 'left',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        marginVertical: '1%',
    },
    textCategoryTitle: {
        fontWeight: 'bold',
        color: '#061A3B',
        fontSize: "24$rem",
    },
    textCategoryColor: {
        fontWeight: 'bold',
        color: '#061A3B',
        fontSize: "24$rem",
        marginLeft: "4%",
        width: '100%'
    },
    textCategoryTexture: {
        fontWeight: 'bold',
        color: '#061A3B',
        fontSize: "24$rem",
        marginLeft: "8%",
        width: '100%'
    },
    viewSamplingContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#93A5BD',
        alignItems: 'center',
        borderRadius: "4$rem",
        paddingVertical: '1%'
    },
    textDate: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.7)',
        fontSize: "20$rem",
        fontWeight: '500',
        width: '80%'
    },
    iconContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    viewTextContainer: {
        width: '80%',
    },
    viewRowContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginVertical: '5$rem',
    },
    textTitle: {
        textAlignVertical: 'center',
        color: 'white',
        fontSize: "18$rem",
        textAlign: 'left',
        fontWeight: '500',
        width: '50%',
    },
    textResult: {
        width: '50%',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: "18$rem",
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: '1%',
    },
    explanationText: {
        marginLeft: 5,
    },
    explanationTextBold: {
        fontWeight: 'bold',
        color: '#345961'
    },
    modalHeader: {
        width: '100%',
        alignItems: 'center',
        height: '20%',
        justifyContent: 'center'
    },
    body: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        marginVertical: '1%',
    },
    initialSamplingBody: {
        width: '100%',
        height: '73%',
        alignItems: 'center',
        marginVertical: '1%',
    },
    modalBody: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
    },
    footer: {
        width: '100%',
        height: '10%',
        marginBottom: '15$rem',
        alignItems: 'center',
        padding: '5%',
        position: 'absolute',
        bottom: '3%',
    },
    questionnaireFooter: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%',
        backgroundColor: '#EEEEEE',
    },
    modalFooter: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        marginVertical: '1%',
        marginBottom: '30$rem'
    },
    dataCollectionHeader: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        paddingVertical: '1%',
        marginVertical: '1%',
    },
    dataCollectionBody: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        paddingVertical: '1%',
        marginVertical: '1%',
    },
    dataCollectionFooter: {
        width: '100%',
        marginTop: '30$rem',
        height: '10%',
        alignItems: 'center',
        paddingBottom: '2%',
        marginVertical: '1%',
    },
    scrollViewModal: {
        width: '98%',
        height: '100%',
        borderRadius: '10$rem',
        marginVertical: '10$rem'
    },
    scrollViewSummary: {
        width: '100%',
        height: '85%',
        borderRadius: '10$rem',
        marginVertical: '10$rem',
        padding: '5$rem'
    },
    scrollViewContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 0,
    },
    viewFilterElements: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginLeft: '18$rem',
        width: '95%',
        alignItems: 'flex-start',
        paddingTop: '1%'
    },
    viewScrollDown: {
        flex: 1,
        width: '97%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    viewCategoryScrollDown: {
        justifyContent: 'space-evenly',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '5$rem',
    },
    buttonNext: {
        alignItems: 'flex-end',
        alignContent: 'center',
        width: '95%',
        paddingBottom: '1%',
    },
    scrollViewContainerTrashItems: {
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: '5$rem',
        width: '98%',
    },
    scrollViewContainerSummary: {
        alignItems: 'center',
        borderRadius: '5$rem',
        width: '100%',
    },
    buttonLeftEdge: {
        alignItems: 'flex-start',
        width: '45%',
    },
    buttonRightEdge: {
        alignItems: 'flex-end',
        width: '45%',
    },
    viewRow: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '300$rem',
        height: '50$rem',
        borderRadius: '20$rem',
        padding: '5$rem',
    },
    confirmButton: {
        backgroundColor: '#003851',
        alignItems: 'center',
        width: '300$rem',
        height: '50$rem',
        borderRadius: '20$rem',
        padding: '5$rem'
    },
    text: {
        fontSize: '18$rem',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
    buttonSize: {
        width: 300,
        height: 50,
        borderRadius: 20,
        margin: 20,
    },
    buttonAddPlastic: {
        backgroundColor: '#232348',
        borderRadius: '20$rem',
        marginLeft: '7$rem',
        marginBottom: '8$rem',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: '4$rem',
        shadowOffset: {
            width: '2$rem',
            height: '2$rem',
        },
        width: '95%',
        height: '100$rem',
        justifyContent: 'center'
    },
    textAddPlastic: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: '40$rem',
    },
    textTitleLarge: {
        fontSize: '40$rem',
        color: '#00265A',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
    textCongratulatory: {
        fontSize: '14$rem',
        textAlign: 'center',
        color: 'rgba(0,0,0,0.7)',
        marginBottom: '10$rem'
    },
    imageCongratulatory: {
        width: '95%',
        height: '70%'
    },
    viewBodyCongratulatory: {
        width: '100%',
        height: '70%',
        alignItems: 'center'
    },
    viewFooterCongratulatory: {
        width: '100%',
        height: '15%',
        alignItems: 'center'
    },
    textViewTitleAbout: {
        fontWeight: 'bold',
        color: '#232348',
        fontSize: "28$rem",
        alignSelf: 'flex-start',
        textAlignVertical: 'center',
        textAlign: 'left',
    },
    textAbout: {
        fontSize: '14$rem',
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginBottom: '10$rem',
        color: 'rgba(0,0,0,0.7)',
    },
    aboutContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '95%',
    },
    questionnaireContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        fontSize: '25$rem',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: '#232348',
        padding: '20$rem',
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
    questionnaireText: {
        fontSize: '18$rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlignVertical: 'top',
        color: '#232348',
        paddingTop: '15$rem',
        paddingBottom: '5$rem',
        paddingLeft: '20$rem',
        paddingRight: '20$rem',
    },
    summaryText: {
        fontSize: '18$rem',
        alignSelf: 'flex-start',
        textAlignVertical: 'top',
        color: '#232348',
        paddingTop: '15$rem',
        paddingBottom: '12$rem',
        paddingLeft: '40$rem',
        paddingRight: '40$rem',
    },
    questionnaireEndText: {
        fontSize: '18$rem',
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#232348',
        paddingTop: '15$rem',
        paddingBottom: '5$rem',
        paddingLeft: '40$rem',
        paddingRight: '40$rem',
    },
    aboutFooter: {
        height: '10%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pageSettingsSection: {
        flexDirection: 'row',
        width: '95%',
        padding: '5$rem',
        maxHeight: '15%',
        justifyContent: 'space-between',
    },
    pageSettingsLogout: {
        flexDirection: 'row',
        width: '95%',
        padding: '5$rem',
        maxHeight: '10%',
    },
    profileText: {
        fontSize: '20$rem',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'center',
        textAlign: 'left',
        color: '#0E4093'
    },
    profileAvatar: {
        width: 'auto',
        marginVertical: '5$rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
    },
    profileAvatarText: {
        alignSelf: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14$rem',
        color: '#232348'
    },
    profileUserInscriptionText: {
        marginTop: '20$rem',
        alignSelf: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '16$rem',
        color: '#232348'
    },
    profileUserInfoContainer: {
        width: '90%',
        height: '50%',
        position: 'relative',
        borderWidth: 1
    },
    profileUserInfosText: {
        textAlign: 'left',
        fontSize: '20$rem',
        fontWeight: 'bold',
        color: '#232348'
    },
    profileUserSection: {
        marginVertical: '10$rem',
    },
    questionnaireAnswer: {
        color: 'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    questionnaireButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    questionnaireButton: {
        color: 'white',
        margin: '20$rem',
        textAlign: 'center',
        width: '300$rem',
        height: '50$rem',
        borderRadius: '20$rem',
        padding: '5$rem',
    },
    iconContainerLang: {
        justifyContent: 'flex-start',
        marginLeft: '40$rem',
    },
    textLang: {
        fontSize: '18$rem',
        fontWeight: 'bold',
        textAlignVertical: 'center',
        color: '#0E4093',
    },
    centeredModalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: '20$rem',
        backgroundColor: 'white',
        borderRadius: '20$rem',
        padding: '5$rem',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: '0$rem',
            height: '2$rem',
        },
        shadowOpacity: '0.25$rem', // Note: shadowOpacity is a decimal, so using "$rem" may not make sense here.
        shadowRadius: '4$rem',
        elevation: '5$rem',
    },
    modalContent: {
        width: '100%',
        paddingHorizontal: '20$rem',
    },
    modalContentMicro: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '90%',
    },
    modalText: {
        fontSize: '18$rem',
        marginBottom: '10$rem',
        textAlign: 'left',
    },
    questionnaireHelpButton: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap'
    },
    questionnaireHelpIcon: {
        margin: '0$rem',
        marginRight: '30$rem',
        marginTop: '55$rem'
    },
    questionnaireBinaryButton: {
        width: '170$rem',
        height: '55$rem',
        borderColor: '#232348',
        borderWidth: '2$rem',
        borderRadius: '10$rem',
        justifyContent: 'center',
    },
    questionnaireBinaryLabelStyle: {
        fontSize: '18$rem',
        fontWeight: 'light'
    },
    quizHeaderView: {
        height: '10%',
        alignItems: 'center',
        paddingTop: '20$rem',
    },
    arrowBackQuiz: {
        width: '20%'
    },
    quizTitle: {
        top: '10$rem',
        fontWeight: 'bold',
        color: '#232348',
        fontSize: "30$rem",
        width: '80%'
    },
    quizCardContainer: {
        height: '70%',
        alignContent: 'flex-start',
        justifyContent: 'start',
        width: '100%',
    },
    quizPageContainer: {
        width: '100%',
        flexDirection: 'column',
    },
    quizCard: {
        borderRadius: '10$rem',
        height: '60%',
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    quizCardImage: {
        height: '100%',
        width: '100%',
        borderRadius: '10$rem',
        position: 'absolute',
        top: '0%',
    },
    quizCardDescription: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '15%',
        bottom: '0%',
        position: 'absolute',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: '5$rem',
        paddingBottom: '5$rem',
        paddingLeft: '15$rem',
        paddingRight: '15$rem',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomRightRadius: '5$rem',
        borderBottomLeftRadius: '5$rem',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: '4$rem',
        shadowOffset: {
            width: '2$rem',
            height: '2$rem',
        },
        elevation: 1,
    },
    quizCardProposition: {
        fontSize: '15$rem',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.7)',

    },
    swipeButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: '30%',
        alignItems: 'flex-start',
    },
    swipeButtonRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50$rem',
        height: '50$rem',
        backgroundColor: '#A7F3D0',
        borderRadius: '100$rem',
    },
    swipeButtonLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50$rem',
        height: '50$rem',
        backgroundColor: '#FECACA',
        borderRadius: '100$rem',
    },
    quizEndingCard: {
        borderRadius: '10$rem',
        height: '60%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quizEndingCardImage: {
        width: '80%',
        height: '80%',
        marginTop: '60$rem'
    },
    endQuizContainer: {
        bottom: '20$rem',
        padding: '1%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '70%'
    },
    quizCardEndingImage: {
        height: '50%',
        width: '50%',
        borderRadius: '10$rem',
        position: 'absolute',
        top: '0%',
    },
    quizButton: {
        backgroundColor: '#00265A',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300$rem',
        height: '50$rem',
        borderRadius: '20$rem',
    },
    quizButtonText: {
        fontWeight: 'bold',
        color: '#232348',
        fontSize: '20$rem',
        textDecorationLine: 'underline',
    },
    overLayLabelRight: {
        label: {
            textAlign: "left",
            fontSize: '20$rem',
            color: "#4DED30",
            backgroundColor: "transparent",
        },
    },
    overLayLabelLeft: {
        label: {
            textAlign: "right",
            color: "red",
            fontSize: '20$rem',
            backgroundColor: "transparent",
        },
    },
    viewTextureContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
        marginVertical: '5$rem',
    },
    viewMicroDetailsFooter: {
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },

    viewMicroDetailsHeader: {
        width: '100%',
        height: '22%',
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: '1%',
    },
    viewMicroDetailsBody: {
        width: '100%',
        height: '60%',
        alignItems: 'center',
        marginVertical: '1%',
    },
    modalMicroDetail: {
        backgroundColor: 'white',
        height: '65%',
        borderTopStartRadius: "25$rem",
        borderTopEndRadius: "25$rem",
        borderStyle: "solid",
        padding: "5$rem",
    },
    modalTrashSelectionContainer: {
        backgroundColor: 'white',
        height: '55%',
        borderTopStartRadius: "25$rem",
        borderTopEndRadius: "25$rem",
        borderStyle: "solid",
        padding: "5$rem"
    },
    viewTextPartition: {
        width: '20%',
        alignItems: 'center'
    },
    viewInputPartition: {
        width: '80%',
    },
    viewContainer: {
        width: '100%',
        alignItems: 'center'
    },
    dateLocationCard: {
        height: 'auto',
        width: '330$rem',
        backgroundColor: '#FFF',
        borderRadius: '10$rem',
        marginTop: '20$rem',
        marginLeft: '30$rem',
        marginRight: '30$rem',
        marginHorizontal: '10$rem',
        elevation: '3$rem',
        shadowOpacity: '0.1$rem',
        shadowRadius: '5$rem',
        shadowOffset: { width: '0$rem', height: '2$rem' },
    },
    dateLocationTextWithIcon: {
        flex: '0.90$rem',
    },
    dateLocationIconRight: {
        marginRight: '30$rem',
    },
    dateLocationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '5$rem',
    },
    dateLocationDateText: {
        marginLeft: '30$rem',
        color: '#232348',
        fontWeight: 'bold',
        fontSize: '18$rem',
    },
    dateLocationTimeText: {
        marginLeft: '30$rem',
        color: '#232348',
        fontSize: '18$rem',
    },
    dateLocationLocationText: {
        marginLeft: '30$rem',
        color: '#232348',
        fontWeight: 'bold',
        fontSize: '18$rem',
    },
    dateLocationLocationNameText: {
        marginLeft: '30$rem',
        color: '#232348',
        fontSize: '18$rem',
    },
    dateLocationSeparator: {
        height: 1,
        backgroundColor: '#e0e0e0',
    },
    dateLocationLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dateLocationIconAndTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateLocationTextContainer: {
        flexDirection: 'column',
    },
    dateLocationIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateLocationDivider: {
        height: '100%',
        width: '1$rem',
        backgroundColor: '#e0e0e0',
        marginHorizontal: '10$rem',
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
    buttonsContainerStats: {
        width: '100%',
        padding: '2%',
        backgroundColor: '#053D93',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statsDropdown: {
        backgroundColor: '#155CCF',
        borderBottomColor: '#232348',
        borderBottomWidth: 0.5,
        width: '40%',
        borderRadius: '10$rem',
        marginVertical: '20$rem',
    },
    statsDropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        textAlignVertical: 'center',
        width: '100%',
        backgroundColor: '#053D93',
    },
    buttonsContainerStatsPeriod: {
        width: '100%',
        padding: '2%',
        backgroundColor: '#00265A',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    statsWrap: {
        width: '100%',
        maxHeight: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    samplingNumTitle: {
        fontSize: '20$rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        textAlignVertical: 'center',
        color: '#232348',
        padding: '10$rem',
        marginTop: '10$rem',
    },
    polyvalentCard: {
        backgroundColor: '#232348',
        borderRadius: '15$rem',
        paddingHorizontal: '16$rem',
        paddingVertical: '8$rem',
        marginHorizontal: '10$rem',
        height: 'auto',
        width: '155$rem',
        alignSelf: 'center',
        elevation: '3$rem',
        shadowOpacity: '0.1$rem',
        shadowRadius: '15$rem',
        shadowOffset: { width: '0$rem', height: '2$rem' }
    },
    polyvalentTopRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    polyvalentBottomRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: '4$rem',
    },
    polyvalentTitleText: {
        color: 'white',
        fontSize: '18$rem',
        fontWeight: 'bold',
    },
    polyvalentNumberText: {
        color: 'white',
        fontSize: '18$rem',
        fontWeight: 'bold',
    },
    polyvalentSubtitleText: {
        color: 'white',
        marginTop: '24$rem',
        marginLeft: '10$rem',
        fontSize: '16$rem',
    },
    popularItemsCard: {
        height: 'auto',
        marginVertical: '10$rem',
        width: '330$rem',
        borderRadius: '15$rem',
        paddingTop: '16$rem',
        paddingBottom: '16$rem',
        elevation: '3$rem',
        shadowOpacity: '0.1$rem',
        shadowRadius: '15$rem',
        shadowOffset: { width: '0$rem', height: '2$rem' },
    },
    popularItemsTitle: {
        color: 'white',
        fontSize: '18$rem',
        fontWeight: 'bold',
        marginBottom: '8$rem',
        paddingHorizontal: '16$rem',
    },
    popularItemsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '8$rem',
        paddingHorizontal: '16$rem',
    },
    popularItemsItemText: {
        fontSize: '16$rem',
        width: '85%',
        justifyContent: 'space-between'
    },
    popularItemsItemNumberContainer: {
        alignItems: 'flex-end',
    },
    popularItemsItemNumber: {
        fontSize: '16$rem',
        fontWeight: 'bold',
    },
    popularItemsSeparator: {
        height: '1$rem',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        marginVertical: '8$rem',
    },
    statsTitle: {
        fontSize: '20$rem',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        padding: '10$rem',
        backgroundColor: '#053D93',
        width: '100%',
        textAlign: 'center'
    },
    loadingContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    chartContainer: {
        backgroundColor: '#232348',
        height: 'auto',
        marginVertical: '10$rem',
        width: '330$rem',
        borderRadius: '15$rem',
        paddingTop: '16$rem',
        paddingBottom: '16$rem',
        elevation: '3$rem',
        shadowOpacity: '0.1$rem',
        shadowRadius: '15$rem',
        shadowOffset: { width: '0$rem', height: '2$rem' },
    },
    stackedChartContainer: {
        backgroundColor: '#fff',
        height: 'auto',
        marginVertical: '10$rem',
        width: '330$rem',
        borderRadius: '15$rem',
        paddingTop: '16$rem',
        paddingBottom: '16$rem',
        elevation: '3$rem',
        shadowOpacity: '0.1$rem',
        shadowRadius: '15$rem',
        shadowOffset: { width: '0$rem', height: '2$rem' },
    },
    legendContainer: {
        alignItems: 'flex-start',
        width: '100%'
    },
    areaLegendContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginVertical: '5$rem',
    },
    colorIndicator: {
        marginLeft: "20$rem",
        width: '20$rem',
        height: '20$rem',
        marginRight: '10$rem',
        borderRadius: '5$rem',
    },
    legendText: {
        fontSize: '14$rem',
        color: '#313131',
        flexWrap: 'wrap',
        textAlign: 'left',
    },
    mapView: {
        width: '85%',
        height: '450$rem'
    },
    mapStyle: {
        backgroundColor: '#232348',
        alignItems: 'center',
        borderRadius: '15$rem',
        paddingBottom: '20$rem'
    },
    progressButtonText: {
        color: '#232348',
        fontWeight: 'bold',
        fontSize: '18$rem',
        textAlign: 'center',
    },
    questionnaireAnswerContainer: {
        marginTop: '10$rem',
        width: '360$rem',
    },
    questionnaireAnswerContainerStyle: {
        fontSize: '18$rem',
        borderBottomLeftRadius: '10$rem',
        borderBottomRightRadius: '10$rem',
        borderWidth: '2$rem',
        borderTopWidth: '0$rem',
        borderColor: '#232348',
        marginLeft: '0.2$rem',
        marginTop: '7$rem',
        width: '360$rem',
        backgroundColor: '#EEEEEE',
    },
    questionnaireAnswerPlaceholderStyle: {
        fontSize: '18$rem',
        color: '#232348',
        fontWeight: 500
    },
    questionnaireAnswerSelectedTextStyle: {
        fontWeight: 500, // the font weight doesn't accept rem values, i tried it.
        color: '#232348',
        fontSize: '18$rem',
    },
    selectedStyle: {
        backgroundColor: '#232348',
        color: 'blue',
    },
    questionnaireAnswerDropdown: {
        height: '55$rem',
        borderColor: '#232348',
        borderWidth: '2$rem',
        borderRadius: '10$rem',
        paddingHorizontal: '12$rem',
    },
    viewSampleType: {
        height: '20%',
        width: '100%',
        justifyContent: 'center'
    },
    titleSampleType: {
        width: '100%',
        fontSize: '30$rem',
        fontWeight: 'bold',
        color: '#00265A',
        marginBottom: '3%'
    },
    subTitleSampleType: {
        width: '100%',
        fontSize: '20$rem',
        fontWeight: '400',
        color: '#00265A'
    },
    viewSoloSampling: {
        height: '24%',
        width: '100%',
        backgroundColor: '#00265A',
        borderRadius: '15$rem'
    },
    titleSoloSampling: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: '24$rem',
        fontWeight: 'bold',
        marginVertical: '2%'
    },
    titleJoinSampling: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: '24$rem',
        fontWeight: 'bold',
        marginVertical: '0%'
    },
    viewSoloIconContainer: {
        width: '100%',
        alignItems: 'center',
        height: '80%'
    },
    separatorSampling: {
        height: '2%',
        width: '100%'
    },
    containerGroupSampling: {
        width: '100%',
        alignItems: 'center',
        height: '40%'
    },
    containerJoinGroup: {
        height: '29%',
        width: '100%',
        backgroundColor: '#00265A',
        borderRadius: '15$rem',
        alignItems: 'center'
    },
    subTextGroup: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontSize: '16$rem',
        fontWeight: '300',
        marginVertical: '1%'
    },
    inputSampling: {
        width: '90%',
        height: '32$rem',
        marginVertical: '1%'
    },
    containerRouterButtonSample: {
        height: '5%',
        width: '100%'
    },
    seperatorLarge: {
        height: '10%',
        width: '100%'
    },
    clipboardButton: {
        width: '100%',
        height: '15%',
        backgroundColor: '#00265A',
        borderRadius: '15$rem',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    clipboardButtonText: {
        color: 'white',
        fontSize: '16$rem',
        fontWeight: 'bold',
        marginRight: '10$rem'
    },
    sampleRouterContainer: {
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    samplingButtonText: {
        fontSize: '18$rem',
        height: '100%',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlignVertical: 'center',
        color: '#09295A',
    },
    quizLinkBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '350$rem',
        height: '50$rem',
    },
    quizLinkBtnText: {
        height: '100%',
        fontSize: '18$rem',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
    quizLinkBtnStyle: {
        alignItems: 'center',
        marginTop: '10$rem',
    },
    quizFooter: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '10$rem',
    },
    quizFooterText: {
        fontSize: '18$rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#232348',
    },
    imagesurfQuiz: {
        width: '10%',
        height: '10%',
    },
    buttonDisabled: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '300$rem',
        height: '45$rem',
        backgroundColor: 'white',
    },
    buttonEnabled: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '300$rem',
        height: '45$rem',
        backgroundColor: 'white',
    },
    textEnabled: {
        color: '#09295A',
        fontSize: '18$rem',
        fontWeight: 'bold',
    },
    textDisabled: {
        color: 'gray',
        fontSize: '18$rem',
        fontWeight: 'bold',
    },
    modalContainer: {
        height: "90%",
        backgroundColor: "#ffffff",
        borderTopStartRadius: "25$rem",
        borderTopEndRadius: "25$rem",
        borderStyle: "solid",
        padding: "10$rem",
    },
    modalHalfContainer: {
        height: "60%",
        backgroundColor: "#ffffff",
        borderTopStartRadius: "25$rem",
        borderTopEndRadius: "25$rem",
        borderStyle: "solid",
        padding: "10$rem",
    },
    samplingModalContainer: {
        height: "90%",
        backgroundColor: "#ffffff",
        borderTopStartRadius: "25$rem",
        borderTopEndRadius: "25$rem",
        borderStyle: "solid",
        padding: "5$rem",
    },
    modalViewPage: {
        justifyContent: 'flex-end',
        margin: "0$rem",
        height: "100%",
    },
    buttonRouter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '300$rem',
        height: '50$rem',
        borderRadius: '30$rem',
        padding: '5$rem',
    },
    textRouter: {
        color: 'white',
        fontSize: '18$rem',
        fontWeight: 'bold',
    },
    samplingButton: {
        width: '350$rem',
        height: '50$rem',
        borderRadius: '15$rem',
    },
    macroSelectionFooter: {
        width: '100%',
        marginTop: '10$rem',
        justifyContent: 'center',
        alignItems: 'center'
    },
    macroSelectionBody: {
        width: '100%',
        height: '74%',
        alignItems: 'center'
    },
    macroCategorySelectionBody: {
        width: '100%',
        height: '80%',
        alignItems: 'center'
    },
    selectionBody: {
        marginTop: '35$rem',
        width: '100%',
        height: '70%',
        alignItems: 'center'
    },
    macroSelectionHeader: {
        width: '100%',
        alignItems: 'center',
        height: '10%',
        justifyContent: 'center'
    },
    macroSelectionTitle: {
        width: '80%',
        alignItems: 'flex-end',
        textAlign: 'left',
        fontSize: 32,
        color: '#232348',
        fontWeight: 'bold'
    },
    macroTrashSelection: {
        width: '100%',
        alignItems: 'center',
        height: '15%',
        justifyContent: 'center',
    },
    macroTrashSelectionTitle: {
        width: '90%',
        alignItems: 'flex-end',
        textAlign: 'left',
        fontSize: '36$rem',
        color: '#232348',
        fontWeight: 'bold'
    },
    macroTrashSelectionSubTitle: {
        color: '#174EB2',
        fontSize: '26$rem',
        fontWeight: 'bold',
        width: '90%',
        textAlign: 'left'
    },
    horizontalScrollViewTrashSelection: {
        maxHeight: '50$rem',
        width: '95%'
    }
});