import React from 'react';
import { View, Text } from 'react-native';
import HeaderText from '../../Common/HeaderText';
import MetricSeparator from './MetricSeparator';

const SummarySection = () => {
  return (
    <View className="p-4">
      <HeaderText text={"Summary"}/>
      <View className='flex-row items-center justify-between'>
        <View className='bg-[#FFF] p-4 rounded-lg shadow-sm shadow-black/10'>
          <Text className="text-lg font-semibold text-gray-900 mb-1">
            215hr 15 Min
          </Text>
          <Text className="text-sm text-gray-600 mb-1">
            Worked in a month
          </Text>
          <Text className="text-xs text-gray-500">

          </Text>
        </View>
        <View className='bg-[#FFF] p-4 rounded-lg shadow-sm shadow-black/10'>
          <Text className="text-lg font-semibold text-gray-900 mb-1">
            1hr 30 Min
          </Text>
          <Text className="text-sm text-gray-600 mb-1">
            Total Shortage
          </Text>
          <Text className="text-xs text-[#F43F5E]">
            ( 5 early out )
          </Text>
        </View>
        <View className='bg-[#FFF] p-4 rounded-lg shadow-sm shadow-black/10'>
          <Text className="text-lg font-semibold text-gray-900 mb-1">
            4hr 30 Min
          </Text>
          <Text className="text-sm text-gray-600 mb-1">
            Total delay
          </Text>
          <Text className="text-xs text-[#F43F5E]">
            ( 3Late in )
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SummarySection;
