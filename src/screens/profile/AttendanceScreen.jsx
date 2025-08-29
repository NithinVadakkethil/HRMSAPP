import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ProfileSection, HeaderText, LeaveStats, SummarySection, Attendance, PerformanceDashboard } from '../../components'
import { seperatedDateTime } from '../../common'
import { getDashboardData } from '../../api/apiService'

const AttendanceScreen = ({ profileData }) => {
  const { date } = seperatedDateTime(new Date());
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

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-[#F9F9F9]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo} />
      <HeaderText text={date} />
      <LeaveStats leaveStats={dashboardData}/>
      <SummarySection />
      <Attendance />
      <PerformanceDashboard />
    </ScrollView>
  )
}

export default AttendanceScreen