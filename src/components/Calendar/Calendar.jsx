import React, { useState } from 'react';
import { View } from 'react-native';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import HeaderText from '../Common/HeaderText';

const Calendar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleMonthChange = (months) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + months);
    setCurrentDate(newDate);
  };

  return (
    <View className="bg-[#FFF] rounded-lg shadow-sm border border-gray-200">
      <HeaderText text={"Calendar"}/>
      <CalendarHeader 
        currentDate={currentDate}
        onMonthChange={handleMonthChange}
        onRequestLeave={props.onRequestLeave}
      />
      <CalendarGrid 
        currentDate={currentDate}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />
    </View>
  );
};

export default Calendar;