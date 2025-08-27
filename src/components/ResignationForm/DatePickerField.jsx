import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DateCalendar } from '../../assets';

const DatePickerField = ({ label, value, onPress }) => {
  return (
    <View className="mb-4">
      <Text className="text-gray-700 text-sm font-medium mb-2">
        {label}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center justify-between bg-[#F8FAFC] border border-gray-300 rounded-lg px-4 py-3"
      >
        <Text className="text-gray-900 text-base">
          {value}
        </Text>
        <DateCalendar width={20} height={20}/>
      </TouchableOpacity>
    </View>
  );
};

export default DatePickerField;
