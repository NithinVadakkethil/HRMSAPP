import React from 'react';
import { View, Text } from 'react-native';

const DetailsSection = ({ title, details }) => {
  return (
    <View>
      {!!title && <Text className="text-base font-bold text-gray-900 mb-4">{title}</Text>}
      {details.map((item, index) => (
        <View key={index} className="flex-row justify-between items-start mb-3">
          <Text className="text-gray-500 text-sm font-medium">{item.label}</Text>
          <Text className="text-gray-900 text-sm text-right w-1/2">
            {item.value}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default DetailsSection;