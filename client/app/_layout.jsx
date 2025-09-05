import { Stack } from 'expo-router';
import NetInfo from '@react-native-community/netinfo'
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

const AppLayout = () => {

    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });
    });

    if (!isConnected) {
        Alert.alert("Attention !", "Connexion perdue");
    }

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="views" options={{ headerShown: false }} />
            <Stack.Screen name="(navbar)" options={{ headerShown: false }} />
        </Stack>
    );
}

export default AppLayout;