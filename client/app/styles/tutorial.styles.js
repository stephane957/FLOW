import { moderateScale } from './screen.styles';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({ $rem: moderateScale(1) });

const styles = EStyleSheet.create({
    view: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingTop: '20$rem',
    },
    headerWrap: {
        flexDirection: 'row',
        height: '5%',
        width: '100%',
        alignItems: 'center',
        marginTop: '20$rem',
        justifyContent: 'flex-start',
    },
    arrowBackButton: {
        position: 'relative',
        top: '5$rem',
        width: '15%',
    },
    header: {
        height: '100%',
        maxWidth: '85%',
        justifyContent: 'center',
    },
    viewTitle: {
        fontWeight: 'bold',
        color: '#00265A',
        fontSize: "24$rem",
        alignContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'left',
        marginVertical: '1%'
    },
    viewSubTitleBold: {
        fontSize: "12$rem",
        color: 'rgba(0,0,0,1)',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    viewSubTitle: {
        fontSize: "12$rem",
        color: 'rgba(0,0,0,0.6)',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginVertical: "0$rem",
    },
    slidesBody: {
        maxHeight: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '5$rem',
    },
    footer: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    viewRow: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
})

export default styles