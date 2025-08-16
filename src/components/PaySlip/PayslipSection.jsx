import React from 'react';
import { View, Text } from 'react-native';

const PayslipSection = ({ title, data }) => {
  return (
    <View className="p-4 bg-white">
      {!!title && <Text className="text-lg font-bold mb-4">{title}</Text>}
      
      {data.map((item, index) => (
        <View key={index} className="flex-row mb-2">
          <Text className="w-1/2 text-gray-600 text-sm">{item.label}</Text>
          <Text className="w-1/12 text-gray-600 text-sm">:</Text>
          <Text className="w-5/12 text-gray-800 text-sm font-medium">{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default PayslipSection;
