import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PrintIcon = () => (
  <View className="w-6 h-5">
    <View className="border-2 border-black rounded-sm w-full h-full">
      <View className="absolute top-1 left-1 right-1 bottom-2">
        <View className="border border-black rounded-xs h-2 mb-1" />
        <View className="border border-black rounded-xs h-1 mb-1" />
        <View className="border border-black rounded-xs h-1" />
      </View>
      <View className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-b-sm" />
    </View>
  </View>
);

const DownloadIcon = () => (
  <View className="w-4 h-4">
    <View className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white" />
    <View className="absolute top-1.5 left-1/2 transform -translate-x-1/2">
      <View className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-white" />
    </View>
    <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
  </View>
);

const PayslipHeader = () => {
  return (
    <View className="flex-row justify-between mb-6">
      <TouchableOpacity className="flex-row items-center bg-white border border-gray-300 px-4 py-2 rounded-md">
        <PrintIcon />
        <Text className="ml-2 text-black font-medium">Print</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row items-center bg-blue-600 px-4 py-2 rounded-md">
        <DownloadIcon />
        <Text className="ml-2 text-white font-medium">Download</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PayslipHeader;
