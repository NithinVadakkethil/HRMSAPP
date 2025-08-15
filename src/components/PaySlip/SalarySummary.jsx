import React from 'react';
import { View, Text } from 'react-native';

const SummaryRow = ({ label, amount, isHighlight = false }) => (
  <View className={`flex-row justify-between py-3 px-4 ${isHighlight ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-gray-50'}`}>
    <Text className={`text-sm ${isHighlight ? 'font-semibold text-blue-900' : 'font-medium text-gray-700'}`}>
      {label}
    </Text>
    <Text className={`text-sm ${isHighlight ? 'font-semibold text-blue-900' : 'font-medium text-gray-900'}`}>
      {amount}
    </Text>
  </View>
);

const SalarySummary = () => {
  return (
    <View className="border border-gray-300 rounded-md overflow-hidden">
      <SummaryRow label="Gross Deduction" amount="₹ 4408" />
      <SummaryRow label="Net Salary" amount="₹ 31721" isHighlight={true} />

      <View className="p-4 bg-gray-50 border-t border-gray-300">
        <Text className="text-xs text-gray-700 leading-4">
          Amount in words : Thirty One Thousand Seven Hundred Twenty One
        </Text>
      </View>
    </View>
  );
};

export default SalarySummary;
