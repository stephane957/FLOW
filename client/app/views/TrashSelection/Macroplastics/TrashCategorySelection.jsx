import { React, useState } from 'react'
import { View, Text, Pressable } from 'react-native';
import { Icon, Button } from 'react-native-paper';
import styles from '../../../styles/views.styles';
import TrashCategoryItem from './TrashCategoryItem';
import { macrocategories } from '../../../(navbar)/Settings/index';
import { scale } from '../../../styles/screen.styles';
import { modalOptions } from '../../../constants/enums';

export default function TrashCategorySelection(props) {
    let baseCategories = macrocategories.map(item => item.name);
    const { onClose, setCategory } = props;
    const [category, setCategories] = useState(baseCategories);

    const onCategoryPress = (category) => {
        setCategory(category, modalOptions.TRASH_SELECTION);
    };

    return (
        <View style={styles.modalTrashSelectionContainer}>
            <View style={styles.macroSelectionHeader}>
                <View style={styles.viewRowContainer}>
                    <Text style={styles.macroSelectionTitle}>
                        Macrodéchets
                    </Text>
                    <View style={styles.buttonModalExit}>
                        <Pressable onPress={onClose}>
                            <Icon source={"close-circle-outline"}
                                size={scale(30)}
                                color={'#232348'} />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.macroCategorySelectionBody}>
                <View style={styles.viewCategoryScrollDown}>
                    {macrocategories.map((item, index) => {
                        if (category.includes(item.name))
                            return <TrashCategoryItem key={index} name={item.name} icon={item.icon} onPress={onCategoryPress} />
                    })}
                </View>
            </View>
        </View>
    )
}
