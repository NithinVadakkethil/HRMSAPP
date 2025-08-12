import React from 'react';
import { View, Text } from 'react-native';

const PerformanceCard = ({ title, iconColor = '#3B82F6' }) => {
  return (
    <View className="flex-row items-center space-x-3 p-3">
      <View
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: iconColor }}
      />
      <Text className="text-gray-800 text-sm font-medium">
        {title}
      </Text>
    </View>
  );
};

export default PerformanceCard;
