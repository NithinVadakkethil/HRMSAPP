import { View, ScrollView } from 'react-native'
import React from 'react'
import { ProfileSection, HeaderText, LeaveStats, SummarySection, Attendance, PerformanceDashboard } from '../../components'

const AttendanceScreen = () => {
  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className='px-4 pt-4'>
        <ProfileSection subDetails={false} />
        <HeaderText text={"29 July 2024"} />
      </View>
      <LeaveStats />
      <SummarySection />
      <Attendance />
      <PerformanceDashboard />
    </ScrollView>
  )
}

export default AttendanceScreen