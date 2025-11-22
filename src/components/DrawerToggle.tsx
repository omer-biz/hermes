import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

export function DrawerToggle() {
    const scheme = useColorScheme();
    const isDark = scheme === "dark";
    const navigation = useNavigation();
    const iconColor = isDark ? '#f3f3f3' : '#171717';

    return (
        <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}  // ← Opens drawer
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} >

            <Ionicons name="menu" size={28} color={iconColor} />
        </TouchableOpacity>
    );
}
