import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';
import { moderateScale } from '../../styles/screen.styles';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function ColorItem(props) {
    const { color, selectedColor, setSelectedColor } = props
    let isSelected = color === selectedColor;
    const containerStyle = isSelected
        ? [styles.selectedStyle, { backgroundColor: color }]
        : styles.outlineStyle;

    return (
        <TouchableOpacity onPress={() => { setSelectedColor(color) }}
            style={containerStyle}>
            <Icon source={'circle'} color={color} size={moderateScale(35)} />
        </TouchableOpacity>
    );
}

const styles = EStyleSheet.create({
    outlineStyle: {
        borderRadius: '18$rem',
        borderWidth: '1.5$rem',
        marginHorizontal: '1%',
    },
    selectedStyle: {
        borderRadius: '23$rem',
        borderWidth: '6$rem',
        marginHorizontal: '1%',
    }
})