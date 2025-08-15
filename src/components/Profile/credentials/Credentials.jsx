import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Credentials = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 m-4">
      <Text className="text-base font-bold text-gray-900 mb-4">Credentials</Text>

      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-gray-500 text-sm font-medium">User Name</Text>
        <Text className="text-gray-900 text-sm">Inshad@12</Text>
      </View>

      <View className="flex-row justify-between items-center">
        <Text className="text-gray-500 text-sm font-medium">Password</Text>
        <View className="flex-row items-center space-x-2">
            <Text className="text-gray-900 text-sm">
            {isPasswordVisible ? 'password123' : '•••••••••••'}
            </Text>
            <TouchableOpacity onPress={togglePasswordVisibility}>
                {/* Note: Eye icon not found, using text toggle */}
                <Text className="text-blue-600 text-sm">
                    {isPasswordVisible ? 'Hide' : 'Show'}
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Credentials;
