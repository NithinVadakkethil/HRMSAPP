import React from 'react';
import { View, Text } from 'react-native';
import BulletPoint from './BulletPoint';

const ExperienceItem = ({ company, position, dateRange }) => {
  return (
    <View className="mb-4">
      <View className="flex-row items-center mb-1">
        <View className="mr-2">
          <BulletPoint />
        </View>
        <Text className="text-base font-medium text-black">{company}</Text>
      </View>
      <View className="ml-4">
        <Text className="text-sm text-gray-700 mb-1">{position}</Text>
        <Text className="text-sm text-gray-600">{dateRange}</Text>
      </View>
    </View>
  );
};

export default ExperienceItem;
