import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SplashImage, SplashTemporary } from "../../assets";
import { retrieveToken } from "../../api/auth"; // Import the token retrieval function

const SplashScreen = () => {
  const navigation = useNavigation();
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Check if user has a valid token
        const token = await retrieveToken();
        
        if (token) {
          // User is logged in, redirect to main tabs
          const timer = setTimeout(() => {
            navigation.replace("MainTabs");
          }, 3000);

          return () => clearTimeout(timer);
        } else {
          const timer = setTimeout(() => {
            navigation.replace("Login");
          }, 3000);
          // User is not logged in, redirect to login
          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        // If there's an error, still go to login screen
        navigation.replace("Login");
      } finally {
        setCheckingToken(false);
      }
    };

    checkAuthStatus();
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-[#023247] justify-center items-center">
      <SplashTemporary width="100%" height="100%"/>
      {checkingToken && (
        <View className="absolute bottom-10">
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SplashScreen;