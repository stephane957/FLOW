import { React } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { scale } from '../../../styles/screen.styles';

/* 
Documentation : Styles in this page are produced dynamically based on parameters therefore
they are not assigned stylesheet styles.
*/
export default function TrashFilter(props) {
    return (
        <View style={{ margin: scale(2) }}>
            <Button icon={"circle"}
                labelStyle={{ color: props.color, fontSize: scale(14) }}
                style={{ backgroundColor: props.isPressed ? '#00265A' : '#C6D5F1' }}
                onPress={props.onPress}>
                <Text style={{ fontWeight: '600', color: props.isPressed ? 'white' : 'black', fontSize: scale(14) }}>
                    {props.category}
                </Text>
            </Button>
        </View>
    )
}
