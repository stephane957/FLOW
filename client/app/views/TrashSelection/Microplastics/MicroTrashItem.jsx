import { React, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from '../../../styles/screen.styles';


export default function MicroTrashItem(props) {
    const [remove, setDelete] = useState(false)
    if (remove)
        return null
    return (
        <Pressable onPress={() => {
            props.onPress(props.name)
            props.setList(props.element)
            setDelete(true)
        }}>
            <View style={styles.trashItem} >
                <View style={styles.trashItemIcon}>
                    <View style={styles.iconBackground} >
                    </View>
                </View>
                <View style={styles.trashItemViewTextContainer}>
                    <Text style={styles.trashItemTextStyle}>
                        {props.name}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = EStyleSheet.create({
    trashItem: {
        width: '80$rem',
        height: '80$rem',
        flexDirection: 'column',
        margin: '3$rem',
        backgroundColor: '#00265A',
        borderRadius: '10$rem'
    },
    trashItemIcon: {
        width: '95%',
        height: '25%',
        alignItems: 'flex-end',
        marginTop: '5$rem'
    },
    trashItemViewTextContainer: {
        width: '100%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    trashItemTextStyle: {
        fontWeight: '700',
        color: 'white',
        flexWrap: 'wrap',
        fontSize: '14$rem'
    },
    iconBackground: {
        backgroundColor: 'white',
        borderRadius: moderateScale(9)
    }
})