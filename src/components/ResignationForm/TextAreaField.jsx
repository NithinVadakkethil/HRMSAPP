import React from 'react';
import { View, Text, TextInput } from 'react-native';

const TextAreaField = ({ label, placeholder, value, onChangeText }) => {
  return (
    <View className="mb-6">
      <Text className="text-gray-700 text-sm font-medium mb-2">
        {label}
      </Text>
      <View className="bg-[#F8FAFC] border border-gray-300 rounded-lg p-4 min-h-[120px]">
        <TextInput
          multiline
          numberOfLines={6}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="text-gray-900 text-base flex-1"
          textAlignVertical="top"
          placeholderTextColor="#9CA3AF"
        />
      </View>
    </View>
  );
};

export default TextAreaField;
