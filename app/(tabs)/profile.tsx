import { View, Text, Touchable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/(modals)/login");
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Page;
