import React from 'react';
import { View, Text } from 'react-native';
import ChecklistItem from './ChecklistItem';

const OnboardingChecklist = ({ title, info = [] }) => {
  return (
    <View className="p-4 bg-[#FFF]">
      <View className="mb-6">
        <Text className="text-xl font-semibold text-gray-900">{title}</Text>
      </View>

      <View className="space-y-4">
        {info.map((item) => (
          <ChecklistItem
            key={item.id}
            label={item.item}
            isCompleted={true}
          />
        ))}
      </View>
    </View>
  );
};

export default OnboardingChecklist;
