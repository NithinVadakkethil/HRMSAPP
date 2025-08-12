import React from 'react';
import { View, Text } from 'react-native';

const HolidayEntry = ({ day, month, dayOfWeek, holidayName }) => {
  return (
    <View className="flex-row items-center mb-7">
      <View className="mr-4 bg-[#F6F8FA] py-1 px-4 rounded-[4px]">
        <Text className="text-2xl font-inter-bold text-gray-800">{day}</Text>
        <Text className="text-sm font-inter text-[#585F75]">{month}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-sm font-inter-semibold text-[#111827]">{dayOfWeek}</Text>
        <Text className="text-base font-inter text-[#FF2500]">{holidayName}</Text>
      </View>
    </View>
  );
};

export default HolidayEntry;
