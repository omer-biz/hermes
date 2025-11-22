import { ScrollView, View, Pressable } from "react-native";
import SequenceListItem from "@/src/components/sequence-list-item";
import { Plus } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

    return (
        <View className="flex-1">
            <ScrollView
                className="flex-1 bg-neutral-100 dark:bg-neutral-900"
                contentContainerStyle={{ padding: 16, gap: 12 }}
            >
                <SequenceListItem
                    logo={require("@/assets/images/cbe-logo.png")}
                    name="CBE"
                    successCount={8}
                    failedCount={9}
                    description="Commercial Bank Of Ethiopia"
                />

                <SequenceListItem
                    logo={require("@/assets/images/icon.png")}
                    name="Telebirr"
                    successCount={8}
                    failedCount={9}
                    description="A mobile money service owned and launched by Ethio Telecom"
                />
            </ScrollView>

            <Pressable
                className="absolute bottom-20 right-6 w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-500 items-center justify-center shadow-lg shadow-black/40 "
                onPress={() => router.push("/new-sequence")}
            >
                <Plus color="white" size={25} />
            </Pressable>
        </View >
    );
}
