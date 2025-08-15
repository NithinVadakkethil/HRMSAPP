import React from 'react';
import { View, Text } from 'react-native';
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
    <View className="bg-white rounded-lg shadow-sm border border-gray-200 m-4 p-4">
      <View className="mb-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-bold text-gray-900">Upcoming holiday</Text>
          <Text className="text-sm font-medium text-gray-500">Restricted Holiday</Text>
        </View>
      </View>

      <View className="flex-row">
        <HolidayColumn holidays={leftColumnHolidays} />
        <HolidayColumn holidays={rightColumnHolidays} />
      </View>
    </View>
  );
};

export default UpcomingHolidays;
