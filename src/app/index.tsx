import { ScrollView } from "react-native";
import SourceListItem from "../components/source-list-item";

export default function Index() {
    return (
        <ScrollView
            className="flex-1 bg-neutral-100 dark:bg-neutral-900"
            contentContainerStyle={{ padding: 16, gap: 12 }}
        >
            <SourceListItem
                logo={require("../../assets/images/cbe-logo.png")}
                name="CBE"
                successCount={8}
                failedCount={9}
                description="Commercial Bank Of Ethiopia"
            />

            <SourceListItem
                logo={require("../../assets/images/icon.png")}
                name="Telebirr"
                successCount={8}
                failedCount={9}
                description="A mobile money service owned and launched by Ethio Telecom"
            />
        </ScrollView>
    );
}
