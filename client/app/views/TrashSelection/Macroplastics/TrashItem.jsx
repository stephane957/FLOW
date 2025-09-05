import { React, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';
import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from '../../../styles/screen.styles';

export default function TrashItem(props) {
    const [remove, setDelete] = useState(false)
    if (remove)
        return null

    return (
        <Pressable onPress={() => {
            props.setList({ type: props.name, amount: 1, id: props.type })
            setDelete(true)
        }}>
            <View style={styles.trashItem}>
                <View style={styles.iconContainer}>
                    <Icon source="circle" size={moderateScale(30)} color={props.color} />
                </View>
                <View style={styles.trashItemViewTextContainer}>
                    <Text style={styles.trashItemTextStyle}>
                        {props.name}
                    </Text>
                </View>
            </View>
        </Pressable>)
}

const styles = EStyleSheet.create({
    trashItem: {
        width: '100%',
        height: '40$rem',
        flexDirection: 'row',
        paddingHorizontal: '3$rem',
        marginVertical: '5$rem',
        borderRadius: '15$rem',
        backgroundColor: '#F1F2F3'
    },
    trashItemViewTextContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    trashItemTextStyle: {
        width: '100%',
        fontWeight: '600',
        color: 'black',
        fontSize: '16$rem',
        textAlign: 'left'
    },
    iconContainer: {
        width: '20%',
        justifyContent: 'center'
    }

})