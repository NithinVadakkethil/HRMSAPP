import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RightArrow, LeftArrow } from '../../assets';

const CalendarHeader = ({ currentDate, onMonthChange, onRequestLeave }) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <View className="px-4">
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center">
          <Text className="text-xl font-bold text-gray-900 mr-4">
            {currentMonth} {currentYear}
          </Text>
          <View className="flex-row">
            <TouchableOpacity 
              className="mr-2"
              onPress={() => onMonthChange(-1)}
            >
              <LeftArrow />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onMonthChange(1)}>
              <RightArrow />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity 
          className="bg-[#002231] px-4 py-3 rounded-lg" 
          onPress={onRequestLeave}
        >
          <Text className="text-white font-inter-medium text-xs">Request Leave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarHeader;