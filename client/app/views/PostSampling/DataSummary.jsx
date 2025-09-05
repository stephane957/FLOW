
import { React, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';
import styles from '../../styles/views.styles';
import routerStyles from '../../components/RouterButton/RouterButton.styles';
import TrashSummaryItem from '../../components/MacroUpdate/TrashSummaryItem';

export default function DataSummary(props) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.view}>
            <View style={styles.dataCollectionHeader}>
                <Text style={styles.textViewTitle}>Résumé</Text>
                <Text style={styles.subTitle}>Collection de données</Text>
            </View>
            {!visible && <View style={styles.dataCollectionBody}>
                <ScrollView style={styles.scrollViewModal} contentContainerStyle={styles.scrollViewContainerTrashItems}>
                    {props.plastics.map((plastic, index) => (
                        <TrashSummaryItem
                            key={index}
                            name={plastic.name}
                            count={plastic.count}
                            category={plastic.category}
                        />
                    ))}
                </ScrollView>
            </View>}
            {!visible && <View style={styles.dataCollectionFooter}>
                <Link href={'../PostSampling/PostMacroplastic'} asChild>
                    <Button mode="contained"
                        buttonColor={'white'}
                        style={routerStyles.buttonInvertedColor}
                        contentStyle={routerStyles.buttonInvertedColor}>
                        <Text style={routerStyles.textInvertedColor}>
                            Confirmer
                        </Text>
                    </Button>
                </Link>
            </View>}
        </View>
    )
}
