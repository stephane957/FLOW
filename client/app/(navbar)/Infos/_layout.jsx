import { Stack } from 'expo-router';

const InfosLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Quiz" options={{ headerShown: false }} />
            <Stack.Screen name="Partners" options={{ headerShown: false }} />
        </Stack>
    );
}

export default InfosLayout;