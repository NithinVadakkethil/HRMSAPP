import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SplashImage } from "../../assets";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-[#023247]">
      <SplashImage width="100%" height="100%"/>
    </SafeAreaView>
  );
};

export default SplashScreen;
