import React from 'react';
import { View, Text } from 'react-native';

const DetailsSection = ({ title, details }) => {
  return (
    <View>
      <Text className="text-lg font-bold mb-4">{title}</Text>
      {details.map((item, index) => (
        <View key={index} className="flex-row mb-3">
          <View className="w-1/3">
            <Text className="text-gray-500 text-xs font-medium">{item.label}:</Text>
          </View>
          <View className="w-2/3">
            <Text className="text-gray-900 text-sm">
              {item.value.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < item.value.split('\n').length - 1 && '\n'}
                </React.Fragment>
              ))}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default DetailsSection;