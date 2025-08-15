import React from 'react';
import { View, Text } from 'react-native';

const Metric = ({ value, label, subtext, subtextColor }) => (
  <View className="flex-1 items-center">
    <Text className="text-lg font-semibold text-gray-900 mb-1">{value}</Text>
    <Text className="text-sm text-gray-600 mb-1">{label}</Text>
    <Text className={`text-xs ${subtextColor || 'text-gray-500'}`}>{subtext}</Text>
  </View>
);

const SummarySection = () => {
  return (
    <View className="bg-white rounded-lg p-4 m-4 shadow-sm">
      <Text className="text-base font-bold text-gray-900 mb-4">Summary</Text>
      <View className="flex-row justify-around">
        <Metric
          value="215hr 15 Min"
          label="Worked in a month"
          subtext=""
        />
        <View className="w-px bg-gray-200" />
        <Metric
          value="1hr 30 Min"
          label="Total Shortage"
          subtext="( 5 early out )"
          subtextColor="text-red-500"
        />
        <View className="w-px bg-gray-200" />
        <Metric
          value="4hr 30 Min"
          label="Total delay"
          subtext="( 3 Late in )"
          subtextColor="text-red-500"
        />
      </View>
    </View>
  );
};

export default SummarySection;
