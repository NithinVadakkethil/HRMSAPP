import React from 'react';
import { View } from 'react-native';
import HolidayEntry from './HolidayEntry';

const HolidayColumn = ({ holidays }) => {
  return (
    <View className="flex-1">
      {holidays.map((holiday, index) => (
        <HolidayEntry
          key={index}
          day={holiday.day}
          month={holiday.month}
          dayOfWeek={holiday.dayOfWeek}
          holidayName={holiday.holidayName}
        />
      ))}
    </View>
  );
};

export default HolidayColumn;
