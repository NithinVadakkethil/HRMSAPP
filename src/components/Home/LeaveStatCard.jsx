import React from 'react';
import { View, Text } from 'react-native';

const LeaveStatCard = ({ IconComponent, label, value }) => {
  return (
    <View className="flex-1 bg-[#FFF] rounded-lg p-4 shadow-sm items-start" style={{
      shadowColor: "rgba(0,0,0,1)",
      shadowOffset: { width: 0, height: 1 }, // equivalent to (0 1px)
      shadowOpacity: 0.1,
      shadowRadius: 2, // blur radius
      elevation: 3, // Android
    }}>
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