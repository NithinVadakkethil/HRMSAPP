import React from 'react';
import { View, ScrollView } from 'react-native';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

const Calendar = (props) => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <CalendarHeader onRequestLeave={props.onRequestLeave}/>
        <CalendarGrid />
      </View>
    </ScrollView>
  );
};

export default Calendar;
