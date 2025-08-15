import { View, ScrollView } from 'react-native'
import React from 'react'
import { CustomHeader,  LeaveStats, Attendance } from '../../components'

const LeaveScreen = () => {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <CustomHeader
        title="Leave"
        showNotificationButton={true}
        showBackButton={true}
      />
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <LeaveStats />
        <Attendance />
      </ScrollView>
    </View>
  )
}

export default LeaveScreen