import { View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { CustomHeader, LeaveStats, SummarySection, UpcomingEvents, UpcomingHolidays, Attendance, Calendar, PerformanceDashboard, LeaveRequestModal } from '../../components'

const HomeScreen = () => {
  const [showLeaveModal, setShowLeaveModal] = useState(false);

  const handleLeaveSubmit = (leaveData) => {
    // Handle the leave submission here
    console.log('Leave submitted:', leaveData);
  };
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
        <Calendar onRequestLeave={() => setShowLeaveModal(true)}/>
        <PerformanceDashboard />
        <UpcomingEvents />
        <UpcomingHolidays />
      </ScrollView>
      <LeaveRequestModal
        visible={showLeaveModal}
        onClose={() => setShowLeaveModal(false)}
        onSubmit={handleLeaveSubmit}
      />
    </View>
  )
}

export default HomeScreen