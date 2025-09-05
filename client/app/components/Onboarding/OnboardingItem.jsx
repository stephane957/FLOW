import { React } from "react";
import { Text, View, Image } from "react-native";
import { width } from '../../styles/screen.styles';
import styles from './onboardingitem.styles'

export default OnboardingItem = ({ item }) => {
    return (
        <View style={[styles.container, { width }]}>
            <Text style={styles.title}>{item.title}</Text>
            <Image resizeMethod="scale" resizeMode="contain" source={item.image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
};