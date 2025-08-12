import React from 'react';
import { View, Text } from 'react-native';
import HolidayLegend from './HolidayLegend';
import HolidayColumn from './HolidayColumn';

const UpcomingHolidays = () => {
  const leftColumnHolidays = [
    {
      day: '12',
      month: 'Aug',
      dayOfWeek: 'Monday',
      holidayName: 'Dasara'
    },
    {
      day: '15',
      month: 'Aug',
      dayOfWeek: 'Tuesday',
      holidayName: 'Independace day'
    },
    {
      day: '20',
      month: 'Aug',
      dayOfWeek: 'Wednesday',
      holidayName: 'Dasara'
    }
  ];

  const rightColumnHolidays = [
    {
      day: '24',
      month: 'Aug',
      dayOfWeek: 'Sunday',
      holidayName: 'Sunday'
    },
    {
      day: '06',
      month: 'Sept',
      dayOfWeek: 'Tuesday',
      holidayName: 'Dasara'
    },
    {
      day: '08',
      month: 'Sept',
      dayOfWeek: 'Tuesday',
      holidayName: 'Dasara'
    }
  ];

  return (
    <View className="bg-white p-6 rounded-lg shadow-sm">
      <View className="mb-6">
        <Text className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Holidays
        </Text>
        <HolidayLegend />
        <View className="h-px bg-gray-200 mb-6" />
      </View>

      <View className="flex-row">
        <HolidayColumn holidays={leftColumnHolidays} />
        <HolidayColumn holidays={rightColumnHolidays} />
      </View>
    </View>
  );
};

export default UpcomingHolidays;
