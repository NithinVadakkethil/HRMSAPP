import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-primary justify-center items-center">
      <View className="items-center px-8">
        <Text className="text-white text-3xl font-bold mb-2">
          AITS Safty LLC
        </Text>
        <Text className="text-white/80 text-base mb-6">UAE</Text>
        <Text className="text-white/70 text-sm text-center leading-5">
          Monitor services, track issues, and access reports instantly.
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
