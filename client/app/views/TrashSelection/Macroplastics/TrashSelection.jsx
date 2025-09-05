import { React, useState } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { Button, Text, Icon } from 'react-native-paper';
import styles from '../../../styles/views.styles'
import { scale } from '../../../styles/screen.styles';
import TrashFilter from './TrashFilter';
import TrashItem from './TrashItem';
import { categorymapping } from '../../../(navbar)/Settings/index';

export default function TrashSelection(props) {
    const { optionList, onClose, setList, trashList, categoryName } = props
    const baseCategories = [...new Set(optionList.map(item => item.category))];
    const currentList = [...new Set(trashList.map(item => item.name))];
    const categoriesMapped = baseCategories.map(category => ({
        category: category,
        color: categorymapping[category]
    }));

    const [pressedFilters, setPressedFilters] = useState([]);
    const [categories, setCategories] = useState(baseCategories);

    function toggleFilter(category) {
        if (pressedFilters.includes(category)) {
            setPressedFilters(pressedFilters.filter(filter => filter !== category));
            if (pressedFilters.length === 1) setCategories(baseCategories)
            else setCategories(categories.filter(filter => filter !== category));
            return;
        }
        setPressedFilters([...pressedFilters, category]);
        if (categories.length === baseCategories.length)
            setCategories([category]);
        else setCategories([...categories, category])
    };


    return (
        <View style={styles.samplingModalContainer}>
            <View style={styles.macroTrashSelection}>
                <View style={styles.viewRowContainer}>
                    <Text style={styles.macroTrashSelectionTitle}>
                        Macroplastiques
                    </Text>
                    <View style={styles.buttonModalExit}>
                        <Pressable onPress={onClose}>
                            <Icon source={"close-circle-outline"}
                                size={scale(30)}
                                color={'#232348'} />
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.macroTrashSelectionSubTitle}>{categoryName}</Text>
            </View>
            <View style={styles.macroSelectionBody}>
                <ScrollView style={styles.horizontalScrollViewTrashSelection} horizontal={true}>
                    {categoriesMapped.map((plastic, index) => (
                        <TrashFilter
                            key={index}
                            color={categorymapping[plastic.category]}
                            category={plastic.category}
                            isPressed={pressedFilters.includes(plastic.category)}
                            onPress={() => toggleFilter(plastic.category)}
                        />
                    ))}
                </ScrollView>
                <View style={styles.viewScrollDown}>
                    <ScrollView style={styles.scrollViewModal} contentContainerStyle={styles.scrollViewContainer}>
                        {optionList.map((item, index) => {
                            if (categories.includes(item.category) && !currentList.includes(item.name))
                                return <TrashItem key={index} color={categorymapping[item.category]} name={item.name} type={item.type} setList={setList} />
                        })}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.macroSelectionFooter}>
                <Button buttonColor='#00265A' contentStyle={styles.samplingButton} style={styles.samplingButton} onPress={onClose}>
                    <Text style={styles.textRouter}>Confirmer</Text>
                </Button>
            </View>
        </View>
    );
}