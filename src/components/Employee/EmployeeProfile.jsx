import React from 'react';
import { View, Image, Text } from 'react-native';

const EmployeeProfile = ({ employee }) => {
  return (
    <View className="flex-row items-start mb-6">
      <Image
        source={{
          uri: employee.image || "https://via.placeholder.com/150",
        }}
        className="w-24 h-24 rounded-full mr-4"
        resizeMode="cover"
      />
      <View className="flex-1 pt-1">
        <Text className="text-2xl font-bold text-gray-900 mb-2">
          {employee.name}
        </Text>
        <View className="rounded-full px-4 py-1.5 self-start mb-3" style={{ backgroundColor: 'rgba(2, 50, 71, 0.10)' }}>
          <Text className="text-xs text-[#023247] font-inter">
            {employee.designation_name}
          </Text>
        </View>
        <Text className="text-sm text-gray-600">
          {employee.location}
        </Text>
      </View>
    </View>
  );
};

export default EmployeeProfile;
