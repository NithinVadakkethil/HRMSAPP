import React from 'react';
import { View, Text } from 'react-native';
import HolidayColumn from './HolidayColumn';
import HeaderText from '../../Common/HeaderText';

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
    <View className="bg-[#FFF] shadow-sm mt-4 p-4">
      <HeaderText text={"Upcoming Holidays"}/>
      <View className="mb-4">
        <View className="flex-row items-center gap-5 border-b pb-2 border-[#EBEFF3]">
          <Text className="text-[14px] font-inter-semibold text-[#393B4C]">Public holiday</Text>
          <Text className="text-[14px] font-inter-semibold text-[#696F82]">Restricted holiday</Text>
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
