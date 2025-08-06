import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputField = ({ label, placeholder, value, onChangeText, secureTextEntry = false, ...props }) => {
  return (
    <View className="mb-4">
      <Text className="text-sm font-medium text-gray-700 mb-2">
        {label}
      </Text>
      <TextInput
        className="w-full px-3 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
    </View>
  );
};

export default InputField;
