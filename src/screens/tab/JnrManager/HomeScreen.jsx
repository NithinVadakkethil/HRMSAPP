import { View, ScrollView, ActivityIndicator, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Lens, CalendarIcon } from '../../../assets'
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

  const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      console.log('Search pressed:', searchText);
      // Implement search functionality here
    };

    // const handleRequestLeave = () => {
    //   setSelectedLeaveRequest(null); // Ensure it's for creating new request
    //   setShowLeaveModal(true);
    // };

    return (
      <View className="flex-1 flex-row items-center px-3 py-2 gap-3">
        <View className='flex-row items-center justify-between w-48 rounded-lg shadow-sm border border-gray-200 px-2 py-0.5 gap-1'>
          <Lens />
          <TextInput
            className="flex-1 text-gray-700 text-base m-0 p-0"
            placeholder="Search"
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
        </View>
        <TouchableOpacity
          className="bg-[#2A8E9E] px-4 py-2 rounded-md"
          onPress={handleSearch}
          activeOpacity={0.8}
        >
          <Text className="text-white font-medium text-sm">Search</Text>
        </TouchableOpacity>
        <TouchableOpacity className="gap-1 bg-[#FFFFFF] rounded-md p-2 flex-row items-center border border-[#374151]">
          <CalendarIcon />
          <Text className="text-[#374151] font-inter text-[12px]">28 Oct 2025</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-[#002231] px-4 py-2 rounded-md"
          // onPress={handleRequestLeave}
          activeOpacity={0.8}
        >
          <Text className="text-white font-medium text-sm">Export</Text>
        </TouchableOpacity>
      </View>
    )
  }

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
            <Attendance tableTitle={"Employee Attendance"} attendanceData={employeeAttendance} RightSection={SearchBar} scroll={true}/>
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