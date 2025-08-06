import React from 'react';
import { View, Text } from 'react-native';

const WelcomeSection = () => {
  return (
    <View className="mb-8">
      <Text className="text-3xl font-bold text-gray-900 mb-2">
        Welcome Back!
      </Text>
      <Text className="text-base text-gray-600">
        Please enter your details to login
      </Text>
    </View>
  );
};

export default WelcomeSection;
