import React from 'react';
import { View } from 'react-native';
import DayHeader from './DayHeader';
import DateCell from './DateCell';

const CalendarGrid = ({ currentDate, selectedDate, onDateSelect }) => {
  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Generate calendar data for the current month
  const generateCalendarData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const weeks = [];
    let currentDay = 1;
    let nextMonthDay = 1;
    
    for (let week = 0; week < 6; week++) {
      const days = [];
      
      for (let day = 0; day < 7; day++) {
        if (week === 0 && day < firstDay) {
          // Days from previous month
          days.push({
            date: daysInPrevMonth - (firstDay - day - 1),
            isCurrentMonth: false
          });
        } else if (currentDay > daysInMonth) {
          // Days from next month
          days.push({
            date: nextMonthDay++,
            isCurrentMonth: false
          });
        } else {
          // Current month days
          days.push({
            date: currentDay++,
            isCurrentMonth: true,
            fullDate: new Date(year, month, currentDay - 1)
          });
        }
      }
      
      weeks.push(days);
      if (currentDay > daysInMonth && nextMonthDay > 7) break;
    }
    
    return weeks;
  };

  const weeks = generateCalendarData();

  return (
    <View className="">
      {/* Day headers */}
      <View className="flex-row">
        {dayHeaders.map((day, index) => (
          <DayHeader key={index} day={day} />
        ))}
      </View>

      {/* Calendar weeks */}
      {weeks.map((week, weekIndex) => (
        <View key={weekIndex} className="flex-row">
          {week.map((dayData, dateIndex) => (
            <DateCell
              key={dateIndex}
              date={dayData.date}
              isCurrentMonth={dayData.isCurrentMonth}
              isSelected={dayData.fullDate && 
                selectedDate.toDateString() === dayData.fullDate.toDateString()}
              isToday={dayData.fullDate && 
                new Date().toDateString() === dayData.fullDate.toDateString()}
              onPress={() => dayData.fullDate && onDateSelect(dayData.fullDate)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalendarGrid;