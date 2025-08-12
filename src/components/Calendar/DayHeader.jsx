import React from 'react';
import { View, Text } from 'react-native';

const DayHeader = ({ day }) => {
  return (
    <View className="flex-1 h-10 justify-center items-center">
      <Text className="text-sm font-medium text-gray-600">{day}</Text>
    </View>
  );
};

export default DayHeader;
