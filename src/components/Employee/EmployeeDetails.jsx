import React from 'react';
import { View, Text } from 'react-native';

const DetailRow = ({ label, value }) => (
  <View className="flex-row justify-between items-center py-3.5">
    <Text className="text-base text-gray-600">
      {label}
    </Text>
    <Text className="text-base text-gray-900 font-semibold">
      {value}
    </Text>
  </View>
);

const EmployeeDetails = ({ employee }) => {
  const details = [
    { label: "Employee ID", value: employee.employee_id },
    { label: "ESSL ID", value: employee.essl_id },
    { label: "Division", value: employee.division_name },
    { label: "Join date", value: employee.joining_date }
  ];

  return (
    <View className="mb-6">
      {details.map((detail, index) => (
        <DetailRow
          key={index}
          label={detail.label}
          value={detail.value}
        />
      ))}
    </View>
  );
};

export default EmployeeDetails;
