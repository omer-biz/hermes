import React, { useState } from "react";
import { View, ScrollView, TextInput, Text, Pressable, Alert } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewSequencePage() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [phone, setPhone] = useState("");
    const [parser, setParser] = useState("");

    const handleSubmit = () => {
        if (!name.trim()) {
            Alert.alert("Validation", "Name is required.");
            return;
        }

        // Do something with the form data
        console.log({ name, description, phone, parser });

        Alert.alert("Success", "New Sequence added!");
        router.back(); // go back to previous screen
    };

    return (
        <SafeAreaView className="flex-1 bg-neutral-100 dark:bg-neutral-900">
            <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
                {/* Name */}
                <View>
                    <Text className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                        Name of the source *
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter source name"
                        className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white p-3 rounded-lg border border-neutral-300 dark:border-neutral-700"
                    />
                </View>

                {/* Description */}
                <View>
                    <Text className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                        Description (Optional)
                    </Text>
                    <TextInput
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Enter description"
                        className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white p-3 rounded-lg border border-neutral-300 dark:border-neutral-700"
                        multiline
                    />
                </View>

                {/* Phone Number */}
                <View>
                    <Text className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                        Phone Number
                    </Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        placeholder="+251..."
                        keyboardType="phone-pad"
                        className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white p-3 rounded-lg border border-neutral-300 dark:border-neutral-700"
                    />
                </View>

                {/* Parser */}
                <View>
                    <Text className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                        Parser (Lua code)
                    </Text>
                    <TextInput
                        value={parser}
                        onChangeText={setParser}
                        placeholder="Enter Lua parser code"
                        className="bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 font-mono"
                        multiline
                        numberOfLines={6}
                        onPress={() => router.push('/lua-editor')}
                    />
                </View>

                {/* Submit Button */}
                <Pressable
                    onPress={handleSubmit}
                    className="bg-blue-600 dark:bg-blue-500 p-4 rounded-lg items-center justify-center mt-4"
                >
                    <Text className="text-white font-bold text-base">Add Source</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}
