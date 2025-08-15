import React from 'react';
import { View, Text } from 'react-native';

const AttendanceRow = ({ label, value }) => (
  <View className="flex-row justify-between py-1">
    <Text className="text-gray-700 text-xs font-medium">{label}</Text>
    <Text className="text-gray-900 text-xs font-medium">{value}</Text>
  </View>
);

const AttendanceInfo = () => {
  return (
    <View className="mb-6 bg-gray-50 p-4 rounded-md">
      <AttendanceRow label="Total Working Days :" value="31 Days" />
      <AttendanceRow label="Total Leave :" value="6 Days" />
      <AttendanceRow label="LOP Days :" value="2 Days" />
      <AttendanceRow label="Off Days :" value="6 Days" />
      <AttendanceRow label="Paid Days :" value="29 Days" />
    </View>
  );
};

export default AttendanceInfo;
