import React from 'react';
import { View, Image, Text } from 'react-native';

const LeaveStatCard = ({ iconUri, label, value }) => {
  return (
    <View className="flex-1 bg-white rounded-lg p-4 m-2 shadow-sm">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center flex-1">
          <Image
            source={{ uri: iconUri }}
            className="w-6 h-6 mr-3"
            resizeMode="contain"
          />
          <Text className="text-gray-700 text-sm font-medium flex-1">
            {label}
          </Text>
        </View>
        <Text className="text-gray-900 text-lg font-bold ml-2">
          {value}
        </Text>
      </View>
    </View>
  );
};

export default LeaveStatCard;
