import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function BackToPrevious() {
    const scheme = useColorScheme();
    const isDark = scheme === "dark";
    const iconColor = isDark ? '#f3f3f3' : '#171717';

    return (
        <TouchableOpacity
            onPress={() => router.back()}
        >
            <Ionicons name="arrow-back" size={28} color={iconColor} />
        </TouchableOpacity>
    )
}
