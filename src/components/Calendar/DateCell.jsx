import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DateCell = ({ date, isCurrentMonth, isSelected, isToday, onPress }) => {
  if (!date) {
    return <View className="flex-1 h-12" />;
  }

  return (
    <View className="flex-1 h-12 justify-center items-center">
      <TouchableOpacity 
        className={`w-8 h-8 justify-center items-center rounded-full 
          ${isToday ? 'bg-blue-100' : ''}
          ${isSelected ? 'bg-green-500' : ''}`}
        onPress={onPress}
      >
        <Text className={`text-sm 
          ${isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
          ${isSelected ? 'text-white font-bold' : ''}
          ${isToday && !isSelected ? 'text-blue-600 font-bold' : ''}`}
        >
          {String(date).padStart(2, '0')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateCell;