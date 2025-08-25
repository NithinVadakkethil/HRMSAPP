import React from 'react';
import { View, Text } from 'react-native';
import HolidayColumn from './HolidayColumn';
import HeaderText from '../../Common/HeaderText';

const UpcomingHolidays = ({ holidays }) => {
  if (!holidays || holidays.length === 0) {
    return null;
  }

  const formattedHolidays = holidays.map(holiday => {
    const date = new Date(holiday.Holiday_date);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
    return {
      day: day,
      month: month,
      dayOfWeek: dayOfWeek,
      holidayName: holiday.title
    };
  });

  const middleIndex = Math.ceil(formattedHolidays.length / 2);
  const leftColumnHolidays = formattedHolidays.slice(0, middleIndex);
  const rightColumnHolidays = formattedHolidays.slice(middleIndex);

  console.log("leftColumnHolidays--->", holidays)

  return (
    <View className="bg-[#FFF] shadow-sm mt-4">
      <HeaderText text={"Upcoming Holidays"} />
      <View className="mx-4">
        <View className="flex-row items-center gap-5 border-b pb-2 border-[#EBEFF3]">
          <Text className="text-[14px] font-inter-medium text-[#393B4C]">Public holiday</Text>
          <Text className="text-[14px] font-inter-medium text-[#696F82]">Restricted holiday</Text>
        </View>
      </View>

      <View className="flex-row m-4">
        <HolidayColumn holidays={leftColumnHolidays} />
        <HolidayColumn holidays={rightColumnHolidays} />
      </View>
    </View>
  );
};

export default UpcomingHolidays;
