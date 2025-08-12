import React from 'react';
import { View } from 'react-native';
import DayHeader from './DayHeader';
import DateCell from './DateCell';

const CalendarGrid = () => {
  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // March 2024 calendar data
  const weeks = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 1, 2] // Last row includes next month dates
  ];

  return (
    <View className="mt-4">
      {/* Day headers */}
      <View className="flex-row">
        {dayHeaders.map((day, index) => (
          <DayHeader key={index} day={day} />
        ))}
      </View>

      {/* Calendar weeks */}
      {weeks.map((week, weekIndex) => (
        <View key={weekIndex} className="flex-row">
          {week.map((date, dateIndex) => {
            const isCurrentMonth = weekIndex < 4 || (weekIndex === 4 && dateIndex < 5);
            return (
              <DateCell
                key={dateIndex}
                date={date}
                isCurrentMonth={isCurrentMonth}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default CalendarGrid;
