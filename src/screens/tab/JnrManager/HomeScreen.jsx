import { View, ScrollView, ActivityIndicator, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LeaveStats, SummarySection, UpcomingHolidays, Attendance, Calendar, PerformanceDashboard, LeaveRequestModal, UpcomingAnniversary, CustomHeader, HomeScreenSkeleton } from '../../../components'
import { getDashboardData, createLeaveRequest } from '../../../api/apiService'

const HomeScreen = () => {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError('Failed to fetch dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLeaveSubmit = async (leaveData) => {
    const response = await createLeaveRequest(leaveData);
};

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#F9F9F9]">
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
        {loading ? (
          <HomeScreenSkeleton />
        ) : (
          <>
            <LeaveStats leaveStats={dashboardData} />
            <Attendance />
            <Calendar onRequestLeave={() => setShowLeaveModal(true)} />
            <PerformanceDashboard />
            <UpcomingAnniversary />
            <UpcomingHolidays holidays={dashboardData?.public_holidays} />
          </>
        )}
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