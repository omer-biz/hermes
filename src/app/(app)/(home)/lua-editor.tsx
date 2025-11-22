import LuaCodeEditor from "@/src/components/LuaCodeEditor";
import { View } from "react-native";

export default function CodeEditor() {
    return (
        <View className="flex-1">
            <LuaCodeEditor />
        </View>
    );
}
