import { React } from 'react';
import { View, Pressable } from 'react-native';
import { Text, Icon } from 'react-native-paper';
import styles from '../../../styles/views.styles';
import { scale } from '../../../styles/screen.styles';
import TrashItem from './TrashItem';
export default function MicroTrashSelection(props) {
    const { optionList, onClose, setActiveElement, categoryName } = props

    return (
        <View style={styles.modalMicroDetail}>
            <View style={styles.modalHeader}>
                <View style={styles.viewRowContainer}>
                    <Text style={styles.macroTrashSelectionTitle}>
                        Microplastiques
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
            <View style={styles.modalBody}>
                <View style={styles.viewCategoryScrollDown}>
                    {optionList.map((item, index) => {
                        return <TrashItem key={index} name={item.name} onPress={setActiveElement} />
                    })}
                </View>
            </View>
            <View style={styles.modalFooter} />
        </View>
    );
}