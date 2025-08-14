import React from 'react';
import { View, Image, Text } from 'react-native';

const DocumentItem = ({ title, imageUri, numberLabel, numberValue }) => {
  return (
    <View className="flex-row items-center gap-28 mb-6">
      <View className="flex-row items-center space-x-4">
        <View>
          <Text className="text-lg font-medium text-gray-800">{title}</Text>
          <Image
            source={{ uri: imageUri }}
            className="w-20 h-20 rounded-lg"
            resizeMode="contain"
          />
        </View>
      </View>
      <View className="text-right">
        <Text className="text-sm text-gray-600 mb-1">{numberLabel}</Text>
        <Text className="text-base font-semibold text-gray-900">{numberValue}</Text>
      </View>
    </View>
  );
};

export default DocumentItem;