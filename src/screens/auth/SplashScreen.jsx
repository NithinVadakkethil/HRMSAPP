import React, { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import { SplashTemporary } from "../../assets";

const SplashScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#023247] justify-center items-center">
      <SplashTemporary width="100%" height="100%"/>
    </SafeAreaView>
  );
};

export default SplashScreen;