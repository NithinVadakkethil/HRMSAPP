import React from 'react';
import { View, Text } from 'react-native';

const Metric = ({ value, label, subtext, subtextColor }) => (
  <View
    className="flex-1 items-center bg-white rounded-lg p-2"
    style={{
      shadowColor: "rgba(0,0,0,0.3)", // works on iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4, // required for Android shadows
    }}
  >
    <Text className="text-lg font-semibold text-gray-900 mb-1">{value}</Text>
    <Text className="text-sm text-gray-600 mb-1">{label}</Text>
    <Text className={`text-xs ${subtextColor || 'text-gray-500'}`}>{subtext}</Text>
  </View>
);

const SummarySection = () => {
  return (
    <View className="m-4">
      <Text className="text-base font-bold text-gray-900 mb-4">Summary</Text>
      <View className="flex-row justify-around gap-2 items-center">
        <Metric value="215hr 15 Min" label="Worked in a month" subtext="" />
        <View className="w-px bg-gray-200 h-10" />
        <Metric
          value="1hr 30 Min"
          label="Total Shortage"
          subtext="( 5 early out )"
          subtextColor="text-red-500"
        />
        <View className="w-px bg-gray-200 h-10" />
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
