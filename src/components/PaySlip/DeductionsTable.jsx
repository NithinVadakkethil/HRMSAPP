import React from 'react';
import { View, Text } from 'react-native';

const DeductionHeader = () => (
  <View className="flex-row bg-gray-100 py-2 px-3 border-b border-gray-300">
    <Text className="flex-2 text-gray-900 text-xs font-semibold">Deductions</Text>
    <Text className="flex-1 text-gray-900 text-xs font-semibold text-center">Amount</Text>
  </View>
);

const DeductionRow = ({ deduction, amount }) => (
  <View className="flex-row py-2 px-3 border-b border-gray-200">
    <Text className="flex-2 text-gray-700 text-xs">{deduction}</Text>
    <Text className="flex-1 text-gray-700 text-xs text-center">{amount}</Text>
  </View>
);

const DeductionsTable = () => {
  return (
    <View className="mb-6 border border-gray-300 rounded-md overflow-hidden">
      <DeductionHeader />

      <DeductionRow deduction="EPF" amount="₹1800" />
      <DeductionRow deduction="Professional Tax" amount="₹200" />
      <DeductionRow deduction="Labour Welfare" amount="₹50" />
      <DeductionRow deduction="Salary Advance" amount="₹100" />
      <DeductionRow deduction="LOP" amount="₹2258" />
    </View>
  );
};

export default DeductionsTable;
