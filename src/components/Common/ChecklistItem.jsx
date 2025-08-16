import React from 'react';
import { View, Text } from 'react-native';
import Checkmark from './Checkmark';

const ChecklistItem = ({ label, isCompleted = true }) => {
  return (
    <View className="flex-row items-center mb-4">
      <View className="relative mr-3">
        <View className="w-5 h-5 border-2 border-gray-300 rounded bg-white" />
        {isCompleted && <Checkmark />}
      </View>
      <View className="flex-1">
        <Text className="text-base text-gray-800">{label}</Text>
      </View>
    </View>
  );
};

export default ChecklistItem;
