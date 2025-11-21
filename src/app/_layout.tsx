import { Drawer } from "expo-router/drawer";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "react-native";

export default function RootLayout() {
    const scheme = useColorScheme();
    const isDark = scheme === "dark";

    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                headerTitle: "Hermes",

                headerStyle: {
                    backgroundColor: isDark ? "#0a0a0a" : "#ffffff",
                },
                headerTitleStyle: {
                    color: isDark ? "#ffffff" : "#000000",
                },
                headerTintColor: isDark ? "#ffffff" : "#000000",

                drawerStyle: {
                    backgroundColor: isDark ? "#0f0f0f" : "#f5f5f5",
                    width: 280,
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                }}
            />
        </Drawer>
    );
}

function CustomDrawerContent({ navigation }) {
    return (
        <SafeAreaView className="flex-1 bg-neutral-100 dark:bg-neutral-900">
            <View className="flex-1 p-4">

                <Text className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Hermes
                </Text>

                <Pressable
                    onPress={() => navigation.navigate("index")}
                    className="p-3 rounded-xl bg-white dark:bg-neutral-800 mb-2"
                >
                    <Text className="text-neutral-900 dark:text-white">
                        Home
                    </Text>
                </Pressable>

            </View>
        </SafeAreaView>
    );
}
