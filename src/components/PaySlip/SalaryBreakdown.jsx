import React from 'react';
import { View, Text } from 'react-native';

const TableHeader = () => (
  <View className="flex-row bg-gray-100 py-2 px-3 border-b border-gray-300">
    <Text className="flex-2 text-gray-900 text-xs font-semibold">Allowances</Text>
    <Text className="flex-1 text-gray-900 text-xs font-semibold text-center">Gross Amount</Text>
    <Text className="flex-1 text-gray-900 text-xs font-semibold text-center">Earning Amount</Text>
  </View>
);

const TableRow = ({ allowance, grossAmount, earningAmount, isTotal = false }) => (
  <View className={`flex-row py-2 px-3 border-b border-gray-200 ${isTotal ? 'bg-gray-50' : ''}`}>
    <Text className={`flex-2 text-xs ${isTotal ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
      {allowance}
    </Text>
    <Text className={`flex-1 text-xs text-center ${isTotal ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
      {grossAmount}
    </Text>
    <Text className={`flex-1 text-xs text-center ${isTotal ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
      {earningAmount}
    </Text>
  </View>
);

const SalaryBreakdown = () => {
  return (
    <View className="mb-6 border border-gray-300 rounded-md overflow-hidden">
      <TableHeader />

      <TableRow allowance="Basic" grossAmount="₹9120" earningAmount="₹8532" />
      <TableRow allowance="Dearness Allowance" grossAmount="₹5200" earningAmount="₹4865" />
      <TableRow allowance="Hardship Allowance" grossAmount="₹5728" earningAmount="₹5358" />
      <TableRow allowance="Food Allowance" grossAmount="₹3000" earningAmount="₹2806" />
      <TableRow allowance="Accomodation Allowance" grossAmount="₹9000" earningAmount="₹8419" />
      <TableRow allowance="Relocation Allowance" grossAmount="₹952" earningAmount="₹891" />
      <TableRow allowance="Special Allowance" grossAmount="₹2000" earningAmount="₹1872" />
      <TableRow allowance="Leave Surrender" grossAmount="₹1129" earningAmount="₹1129" />

      <TableRow
        allowance="Gross Allowances :"
        grossAmount="₹ 36129"
        earningAmount="₹ 33871"
        isTotal={true}
      />
    </View>
  );
};

export default SalaryBreakdown;
