import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5$rem',
    },

    image: {
        height: '62%',
        width: '95%',
        borderRadius: '10$rem',
        marginVertical: '10$rem',
    },

    content: {
        height: '20%',
        width: '95%',
        paddingHorizontal: '5$rem',
        justifyContent : 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontWeight: '700',
        fontSize: '20$rem',
        color: '#00265A',
        textAlign: 'center',
        marginVertical: '5$rem',
        width: '100%'
    },

    description: {
        fontWeight: '400',
        fontSize: '16$rem',
        marginVertical: '2$rem',
        color: '#0E4093',
        textAlign: 'left',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
});

