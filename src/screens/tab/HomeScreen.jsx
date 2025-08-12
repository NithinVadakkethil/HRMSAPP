import { View, ScrollView } from 'react-native'
import React from 'react'
import { CustomHeader, LeaveStats, SummarySection, UpcomingEvents, UpcomingHolidays, Attendance, Calendar, PerformanceDashboard } from '../../components'

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
      <CustomHeader
        title="Dashboard"
        showNotificationButton={true}
        showBackButton={true}
      />
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <LeaveStats />
        <SummarySection />
        <Attendance />
        <Calendar />
        <UpcomingEvents />
        <UpcomingHolidays />
        <PerformanceDashboard />
      </ScrollView>
    </View>
  )
}

export default HomeScreen