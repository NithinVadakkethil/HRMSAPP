import React from 'react';
import { View, Text } from 'react-native';

const StatusChip = ({ text }) => {
  return (
    <View className="bg-blue-100 px-3 py-1 rounded-full">
      <Text className="text-blue-800 text-sm font-medium">{text}</Text>
    </View>
  );
};

export default StatusChip;
