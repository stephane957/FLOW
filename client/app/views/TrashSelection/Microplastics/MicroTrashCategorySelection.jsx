import { React, useState } from 'react'
import { View, Text, Pressable } from 'react-native';
import { Icon } from 'react-native-paper';
import styles from '../../../styles/views.styles';
import TrashCategoryItem from '../Macroplastics/TrashCategoryItem';
import { scale } from '../../../styles/screen.styles';
import { microcategories } from '../../../(navbar)/Settings/index';
import { modalOptions } from '../../../constants/enums';

export default function MicroTrashCategorySelection(props) {
    const { onClose, setCategory } = props;
    let baseCategories = microcategories.map(item => item.name);
    const [category, setCategories] = useState(baseCategories);

    const onCategoryPress = (category) => {
        setCategory(category, modalOptions.MICRO_SELECTION);
    };

    return (
        <View style={styles.modalTrashSelectionContainer}>
            <View style={styles.modalHeader}>
                <View style={styles.viewRowContainer}>
                    <Text style={styles.textModalTitle}>
                        Microplastiques
                    </Text>
                    <View style={styles.buttonModalExit}>
                        <Pressable onPress={() => { onClose() }}>
                            <Icon source={"close-circle-outline"}
                                size={scale(30)}
                                color={'#232348'} />
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.modalBody}>
                <View style={styles.viewCategoryScrollDown}>
                    {microcategories.map((item, index) => {
                        if (category.includes(item.name))
                            return <TrashCategoryItem key={index} name={item.name} icon={item.icon} onPress={onCategoryPress} />
                    })}
                </View>
            </View>
            <View style={styles.modalFooter} />
        </View>
    )
}
