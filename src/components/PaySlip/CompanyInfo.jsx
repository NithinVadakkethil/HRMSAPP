import React from 'react';
import { View, Text } from 'react-native';

const CompanyLogo = () => (
  <View className="w-70 h-24 mb-2">
    <View className="flex-row items-center">
      <View className="w-8 h-6 mr-2">
        <Text className="text-teal-600 text-2xl font-bold">V</Text>
      </View>
      <View className="flex-1">
        <Text className="text-teal-600 text-xl font-bold">ava</Text>
      </View>
    </View>
  </View>
);

const CompanyInfo = () => {
  return (
    <View className="mb-6">
      <CompanyLogo />

      <Text className="text-gray-900 text-sm font-medium mb-3">
        Capestone Ornaments Manufacturers LLP
      </Text>

      <View className="mb-4">
        <Text className="text-gray-600 text-xs leading-4">
          Ground Floor, Shop room No 7/688e{'\n'}
          AL WAHAD Chenguvetty{'\n'}
          Malappuram, Kerala, 676501
        </Text>
      </View>

      <View className="flex-row items-center mb-4">
        <Text className="text-gray-900 text-xs font-medium">LLPIN AAN 3682</Text>
        <View className="w-px h-3 bg-gray-400 mx-3" />
        <Text className="text-gray-900 text-xs font-medium">GSTIN: 32AANFC9336D1ZS</Text>
      </View>

      <Text className="text-gray-900 text-lg font-semibold text-center">
        Payslip for the month of July 2025
      </Text>
    </View>
  );
};

export default CompanyInfo;
