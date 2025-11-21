import { View, Text, Image, Pressable } from "react-native";

interface SourceListItemProps {
    logo?: any;
    name: string;
    description?: string;
    successCount: number;
    failedCount: number;
    onPress?: () => void;
}

export default function SourceListItem({
    logo,
    name,
    description,
    successCount,
    failedCount,
    onPress,
}: SourceListItemProps) {
    return (
        <Pressable
            onPress={onPress}
            className="flex-row items-center p-3 bg-white dark:bg-neutral-900"
        >
            <Image
                source={logo}
                className="w-12 h-12 rounded-lg mr-3"
            />

            <View className="flex-1">

                <Text className="text-base font-semibold text-neutral-900 dark:text-white">
                    {name}
                </Text>

                {description ? (
                    <Text className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                        {description}
                    </Text>
                ) : null}
            </View>

            <View className="flex-row items-center space-x-1">
                <Text className="text-neutral-900 dark:text-white">{successCount}</Text>
                <Text className="text-neutral-500 dark:text-neutral-400">/</Text>
                <Text className="text-neutral-900 dark:text-white">{failedCount}</Text>
            </View>
        </Pressable>
    );
}
