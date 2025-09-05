import { Stack } from 'expo-router';

const StatsLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="Map" options={{ headerShown: false }} />
        </Stack>
    );
}

export default StatsLayout;