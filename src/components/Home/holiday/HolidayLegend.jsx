import React from 'react';
import { View, Text } from 'react-native';

const HolidayLegend = () => {
  return (
    <View className="flex-row items-center mb-6">
      <View className="flex-row items-center mr-6">
        <View className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
        <Text className="text-sm text-gray-700">Public holiday</Text>
      </View>
      <View className="flex-row items-center">
        <View className="w-3 h-3 bg-orange-500 rounded-full mr-2" />
        <Text className="text-sm text-gray-700">Restricted Holiday</Text>
      </View>
    </View>
  );
};

export default HolidayLegend;
