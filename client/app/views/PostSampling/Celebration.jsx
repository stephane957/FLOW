
import { React } from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import congratulations from '../../assets/images/congratulations.png'
import { RouterButton } from '../../components/RouterButton/RouterButton';
import styles from '../../styles/views.styles';

export default function Celebrate() {
    return (
        <View style={styles.view}>
            <View style={styles.header}>
                <Text style={styles.textTitleLarge}>
                    Félicitations !
                </Text>
            </View>
            <View style={styles.viewBodyCongratulatory}>
                <Text style={styles.textCongratulatory}>
                    Le prélèvement est terminé !
                </Text>
                <Text style={styles.textCongratulatory}>
                    Merci pour votre contribution à la cause de FLOW
                </Text>
                <Image source={congratulations} style={styles.imageCongratulatory} />
            </View>
            <View style={styles.viewFooterCongratulatory}>
                <RouterButton path={'../SamplingSummary/SamplingSummary'} text="Compléter" />
            </View>
        </View>
    );
}