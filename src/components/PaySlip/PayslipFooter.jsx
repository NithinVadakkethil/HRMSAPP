import React from 'react';
import { View, Text } from 'react-native';

const PayslipFooter = ({ grossDeduction, netSalary, amountInWords }) => {
  return (
    <View className="p-4 bg-white">
      {/* Gross Deduction */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-gray-600 text-sm">Gross Deduction</Text>
        <Text className="text-red-600 font-bold text-lg">{grossDeduction}</Text>
      </View>

      {/* Net Salary */}
      <View className="flex-row justify-between items-center mb-4 p-2 bg-gray-100 rounded-md">
        <Text className="text-gray-800 font-bold text-lg">Net Salary</Text>
        <Text className="text-green-600 font-bold text-xl">{netSalary}</Text>
      </View>

      {/* Amount in Words */}
      <View>
        <Text className="text-gray-600 text-sm">Amount in words</Text>
        <Text className="text-gray-800 font-medium">{amountInWords}</Text>
      </View>
    </View>
  );
};

export default PayslipFooter;
