import React from 'react';
import { View } from 'react-native';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

const Calendar = (props) => {
  return (
    <View className="bg-[#FFF] rounded-lg shadow-sm border border-gray-200  p-4">
      <CalendarHeader onRequestLeave={props.onRequestLeave}/>
      <CalendarGrid />
    </View>
  );
};

export default Calendar;
