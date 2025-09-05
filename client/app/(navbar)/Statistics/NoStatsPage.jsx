import { React } from 'react';
import { View, Text, Image } from 'react-native';
import congratulations from '../../assets/images/congratulations.png'
import styles from '../../styles/views.styles';


export default function NoStatsPage() {
    return (
        <View style={{ width: '100%' }}>
            <Text style={styles.emptyStatsTitle}>Aucune statistique disponible !</Text>
            <Text style={styles.emptyStatsText}>Revenez apres avoir effectue un prelevement</Text>
            <Image source={congratulations} style={styles.emptyStatsImage} />
        </View>
    );
}