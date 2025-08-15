import React from 'react';
import { View, Text } from 'react-native';

const LeaveStatCard = ({ IconComponent, label, value }) => {
  return (
    <View className="flex-1 bg-white rounded-lg p-4 shadow-sm items-start">
      <View className="mb-2">
        <IconComponent width={24} height={24} />
      </View>
      <Text className="text-gray-500 text-xs font-medium mb-1">
        {label}
      </Text>
      <Text className="text-gray-900 text-xl font-bold">
        {value}
      </Text>
    </View>
  );
};

export default LeaveStatCard;