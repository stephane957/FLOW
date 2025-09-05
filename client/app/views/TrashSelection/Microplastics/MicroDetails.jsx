import React, { useState, useEffect } from 'react';
import { View, Pressable } from 'react-native';
import { Text, Icon, TextInput, Button } from 'react-native-paper';
import styles from '../../../styles/views.styles';
import { scale, width, height } from '../../../styles/screen.styles';
import { microcolors, microtextures } from '../../../(navbar)/Settings/index';
import routerStyles from '../../../components/RouterButton/RouterButton.styles'
import ColorItem from '../../../components/MicroUpdate/ColorItem';
import microTypesMap from '../../../mappings/microIdMappings';
import microColorMap from '../../../mappings/colorMapping';

export default function MicroDetails(props) {
    const { onClose, selectedElement, setList } = props;
    const colorList = microcolors[selectedElement];
    const [size, setSize] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedTexture, setSelectedTexture] = useState('');
    const [isDisabled, setDisabled] = useState(true);
    const [inputSize, setInputSize] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (selectedColor && selectedTexture && size)
            setDisabled(false);
    }, [selectedColor, selectedTexture, size]);

    const addMicroPlastic = (() => {
        setList({
            category: selectedElement,
            color: selectedColor,
            texture: selectedTexture.name,
            count: 1,
            mappings: {
                types: microTypesMap[selectedElement],
                colorid: microColorMap[selectedColor],
                textureid: selectedTexture.id
            },
            size: size,
        });
        onClose();
    });

    useEffect(() => {
        if (selectedColor && selectedTexture && inputSize)
            setDisabled(false);
    }, [selectedColor, selectedTexture, inputSize]);

    const onChangedText = (text) => {
        if (text.trim() === '') {
            setInputSize('');
            setErrorMessage('');
        } else {
            const val = parseInt(text, 10);
            if (!isNaN(val) && val >= 0 && val <= 25) {
                setInputSize(text);
                setErrorMessage('');
            } else {
                setErrorMessage("Veuillez entrer une valeur entre 0 et 25");
            }
        }
    };

    return (
        <View style={styles.modalMicroDetail}>
            <View style={styles.viewMicroDetailsHeader}>
                <View style={styles.viewRowContainer}>
                    <Text style={styles.textModalTitle}>
                        {selectedElement}
                    </Text>
                    <View style={styles.buttonModalExit}>
                        <Pressable onPress={onClose}>
                            <Icon source={"close-circle-outline"}
                                size={scale(30)}
                                color={'#232348'} />
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.microTitleText}>
                    Sélection des détails
                </Text>
            </View>
            <View style={styles.viewMicroDetailsBody}>
                <View style={styles.viewRowContainer}>
                    <View style={styles.viewTextPartition}>
                        <Text style={styles.textCategoryTitle}>
                            Taille
                        </Text>
                    </View>
                    <View style={styles.viewInputPartition}>
                        <TextInput
                            mode='outlined'
                            selectionColor="#061A3B"
                            style={styles.textInputPartial}
                            keyboardType="numeric"
                            activeOutlineColor="#061A3B"
                            textColor="#061A3B"
                            onChangeText={onChangedText}
                            placeholder="Taille en millimètres"
                            value={inputSize}
                        />
                    </View>

                </View>
                {errorMessage && (
                    <Text style={{ color: 'red', fontSize: 12 }}>{errorMessage}</Text>
                )}
                <View style={styles.separator} />
                <View style={styles.textInput}>
                    <Text style={styles.textCategoryColor}>
                        Couleur
                    </Text>
                    <View style={styles.viewRowContainer}>
                        {colorList.map((color, index) => (<ColorItem key={index} color={color.name} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />))}
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.viewContainer}>
                    <Text style={styles.textCategoryTexture}>
                        Texture
                    </Text>
                    <View style={styles.viewTextureContainer}>
                        {microtextures.map((texture, index) =>
                        (<Button key={index} mode="outlined"
                            style={{ width: scale(150) }}
                            contentStyle={{ width: scale(150) }}
                            onPress={() => {
                                setSelectedTexture({ name: texture.name, id: index + 1 })
                            }}
                            buttonColor={selectedTexture.name === texture.name ? '#232348' : '#FFFFFF'}
                            textColor={selectedTexture.name === texture.name ? '#FFFFFF' : '#232348'}>
                            {texture.name}
                        </Button>))}
                    </View>
                </View>
                <View style={styles.separator} />
            </View>
            <View style={styles.viewMicroDetailsFooter}>
                <Button style={routerStyles.frontPageStyle}
                    contentStyle={routerStyles.frontPageStyle}
                    onPress={() => { !isDisabled && addMicroPlastic() }}
                    buttonColor={isDisabled ? '#A9A9A9' : '#00265A'}
                    textColor={isDisabled ? '#FFFFFF' : '#232348'}>
                    <Text style={routerStyles.text}>
                        Ajouter
                    </Text>
                </Button>
            </View>
        </View>
    );
}
