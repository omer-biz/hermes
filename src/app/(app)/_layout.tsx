import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, } from 'react-native-safe-area-context';
import { View, Text, useColorScheme, TouchableOpacity } from 'react-native';
import { router, usePathname } from 'expo-router';

export default function RootLayout() {
    const scheme = useColorScheme();
    const isDark = scheme === "dark";

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerShown: false,

                    drawerStyle: {
                        backgroundColor: isDark ? "#0f0f0f" : "#f5f5f5",
                        width: 280,
                    },
                }}
                drawerContent={() => <CustomDrawerContent />}
            >
            </Drawer>
        </GestureHandlerRootView >
    );
}

function CustomDrawerContent() {
    const pathname = usePathname();

    const DrawerItem = ({
        label,
        iconName,
        target,
    }: {
        label: string;
        iconName: React.ComponentProps<typeof Ionicons>["name"];
        target: string;
    }) => {
        const isActive = pathname === target;
        console.log(pathname);

        return (
            <TouchableOpacity
                onPress={() => router.push(target)}
                className={`flex-row items-center p-3 rounded-xl mb-2 ${isActive
                    ? "bg-blue-600 dark:bg-blue-500"
                    : "bg-white dark:bg-neutral-800"
                    }`}
            >
                <Ionicons
                    name={iconName}
                    size={20}
                    className={`mr-3 ${isActive ? "text-white" : "text-neutral-900 dark:text-white"}`} />
                <Text
                    className={`text-base font-medium ${isActive ? "text-white" : "text-neutral-900 dark:text-white"}`} >
                    {label}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView className="flex-1 bg-neutral-100 dark:bg-neutral-900">
            <View className="flex-1 p-4">
                <Text className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Hermes
                </Text>

                <DrawerItem label="Home" iconName="home-outline" target="/" />
                <DrawerItem label="Settings" iconName="settings-outline" target="/settings" />
            </View>
        </SafeAreaView>
    );
}
