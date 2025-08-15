import React from 'react';
import { View, Image, Text } from 'react-native';

const DocumentItem = ({ title, imageUri, numberLabel, numberValue }) => {
  return (
    <View className="flex-row justify-between items-center mb-4">
      {/* Left side: Title and Image */}
      <View>
        <Text className="text-base font-medium text-gray-800 mb-2">{title}</Text>
        <Image
          source={{ uri: imageUri }}
          className="w-24 h-16 rounded-lg"
          resizeMode="cover"
        />
      </View>

      {/* Right side: Number and Label */}
      <View className="items-end">
        <Text className="text-sm text-gray-600 mb-1">{numberLabel}</Text>
        <Text className="text-base font-semibold text-gray-900">{numberValue}</Text>
      </View>
    </View>
  );
};

export default DocumentItem;