import React from 'react';
import { View, Text } from 'react-native';

const DetailRow = ({ label, value }) => (
  <View className="flex-row justify-between py-1">
    <Text className="text-gray-700 text-xs font-medium flex-1">{label}</Text>
    <Text className="text-gray-900 text-xs font-medium flex-1 text-right">{value}</Text>
  </View>
);

const EmployeeDetails = () => {
  return (
    <View className="mb-6">
      <View className="flex-row">
        <View className="flex-1 pr-4">
          <DetailRow label="Employee Name :" value="Binshad k" />
          <DetailRow label="Employee Code :" value="SWA034" />
          <DetailRow label="Designation :" value="Sales Manager" />
          <DetailRow label="Location :" value="Calicut" />
          <DetailRow label="Date of Joining :" value="Binshad k" />
        </View>

        <View className="flex-1 pl-4">
          <DetailRow label="UAN No. :" value="SWA034" />
          <DetailRow label="UAN No. :" value="SWA034" />
          <DetailRow label="PF No. :" value="Sales Manager" />
          <DetailRow label="ESI No. :" value="Calicut" />
          <DetailRow label="Bank Account Number :" value="Calicut" />
        </View>
      </View>
    </View>
  );
};

export default EmployeeDetails;
