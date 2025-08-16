import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BrandLogo } from '../../assets';

const PayslipHeader = () => {
  return (
    <View className="p-4 bg-white">
      {/* Action Buttons */}
      <View className="flex-row justify-end space-x-2 mb-4">
        <TouchableOpacity className="border border-gray-300 rounded-md p-2 flex-row items-center">
          {/* Print icon would go here */}
          <Text className="text-gray-700 ml-1">Print</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-600 rounded-md p-2 flex-row items-center">
          {/* Download icon would go here */}
          <Text className="text-white ml-1">Download</Text>
        </TouchableOpacity>
      </View>

      {/* Company Info */}
      <View className="items-center">
        <BrandLogo width={80} height={40} />
        <Text className="text-lg font-bold mt-2">Capstone Ornaments Manufacturers LLP</Text>
        <Text className="text-sm text-gray-600 text-center">
          Ground Floor, Shop room No 7/688e{"\n"}
          AP Ward, Changunvetty,{"\n"}
          Malappuram, Kerala, 676501{"\n"}
          LLPIN AAH 3682{"\n"}
          GSTIN: 32AANFC9336D1ZS
        </Text>
      </View>
    </View>
  );
};

export default PayslipHeader;
