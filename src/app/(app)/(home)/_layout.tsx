import { Stack } from 'expo-router';
import { DrawerToggle } from '@/src/components/DrawerToggle';
import BackToPrevious from '@/src/components/BackToPrevious';
import { useColorScheme } from 'react-native';

export default function HomeLayout() {
    const scheme = useColorScheme();
    const isDark = scheme === "dark";

    return (
        <Stack
            screenOptions={{
                headerLeft: () => <DrawerToggle />,
                headerTitleAlign: 'center',

                headerStyle: {
                    backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
                },
                headerTitleStyle: {
                    color: isDark ? "#ffffff" : "#000000",
                },
                headerTintColor: isDark ? "#ffffff" : "#000000",

            }}>

            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name="new-sequence"
                options={{
                    title: 'New Sequence',
                    headerLeft: () => <BackToPrevious />
                }}
            />
        </Stack>
    );
}
