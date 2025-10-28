import { View, ScrollView, ActivityIndicator, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LeaveStats, SummarySection, UpcomingHolidays, Attendance, Calendar, PerformanceDashboard, LeaveRequestModal, UpcomingAnniversary, CustomHeader, HomeScreenSkeleton } from '../../../components'
import { getJMDashboardData, getEmployeeAttendance, createLeaveRequest } from '../../../api/apiService'

const HomeScreen = () => {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [employeeAttendance, setEmployeeAttendance] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let shopId = null;

    const fetchDashboardData = async () => {
      try {
        const data = await getJMDashboardData();
        shopId = data?.shop_details?.shop_id;
        setDashboardData(data);

        // Convert date from API format
        const apiDate = data?.date; // e.g. "Tuesday 28 October 2025"
        if (apiDate && shopId) {
          const formattedDate = convertApiDate(apiDate);
          const attendancePayload = {
            from_date: `${formattedDate} 00:00`,
            to_date: `${formattedDate} 23:59`,
            shop_id: shopId,
          };

          await fetchEmployeeAttendance(attendancePayload);
        }

      } catch (err) {
        console.error(err);
        setError('Failed to fetch dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    const fetchEmployeeAttendance = async (payload) => {
      try {
        const data = await getEmployeeAttendance(payload);
        setEmployeeAttendance(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch attendance data.');
      }
    };

    // Helper function to convert "Tuesday 28 October 2025" → "2025/10/28"
    const convertApiDate = (apiDate) => {
      try {
        const parts = apiDate.split(' ');
        const day = parts[1];
        const monthName = parts[2];
        const year = parts[3];

        const months = {
          January: '01',
          February: '02',
          March: '03',
          April: '04',
          May: '05',
          June: '06',
          July: '07',
          August: '08',
          September: '09',
          October: '10',
          November: '11',
          December: '12',
        };

        const month = months[monthName];
        return `${year}/${month}/${day.padStart(2, '0')}`;
      } catch (err) {
        console.error('Date conversion failed:', err);
        return '';
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
            <Attendance tableTitle={"Employee Attendance"} attendanceData={employeeAttendance}/>
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