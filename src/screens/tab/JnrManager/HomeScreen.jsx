import { View, ScrollView, ActivityIndicator, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  LeaveStats,
  UpcomingHolidays,
  Attendance,
  Calendar,
  PerformanceDashboard,
  LeaveRequestModal,
  UpcomingAnniversary,
  CustomHeader,
  HomeScreenSkeleton,
  SearchBar
} from '../../../components'
import { getJMDashboardData, getEmployeeAttendance, createLeaveRequest } from '../../../api/apiService'
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = () => {
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [employeeAttendance, setEmployeeAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [shopId, setShopId] = useState(null);

  // 🔹 Fetch dashboard first, then attendance for the dashboard date
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getJMDashboardData();
        const shop_id = data?.shop_details?.shop_id;
        setShopId(shop_id);
        setDashboardData(data);

        // Convert API date "Tuesday 28 October 2025" → JS Date
        const initialDate = convertApiDateToJS(data?.today);
        setSelectedDate(initialDate);

        // Fetch attendance for the initial date
        await fetchEmployeeAttendanceForDate(initialDate, shop_id);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // 🔹 Fetch attendance when user selects a new date
  useEffect(() => {
    if (selectedDate && shopId) {
      fetchEmployeeAttendanceForDate(selectedDate, shopId);
    }
  }, [selectedDate]);

  const fetchEmployeeAttendanceForDate = async (dateObj, shopId) => {
    try {
      setLoading(true);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      const formattedDate = `${year}/${month}/${day}`;

      const payload = {
        from_date: `${formattedDate} 00:00`,
        to_date: `${formattedDate} 23:59`,
        shop_id: shopId,
      };

      const data = await getEmployeeAttendance(payload);
      setEmployeeAttendance(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch attendance data.');
    } finally {
      setLoading(false);
    }
  };

  const convertApiDateToJS = (apiDate) => {
    if (!apiDate) return new Date();
    const parts = apiDate.split(' '); // e.g. ['Tuesday','28','October','2025']
    const day = parseInt(parts[1], 10);
    const monthName = parts[2];
    const year = parseInt(parts[3], 10);

    const months = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
    };

    const month = months[monthName] ?? 0;
    return new Date(year, month, day);
  };

  const handleLeaveSubmit = async (leaveData) => {
    await createLeaveRequest(leaveData);
  };

  const handleDateChange = (event, newSelectedDate) => {
    setShowDatePicker(false);
    if (newSelectedDate) setSelectedDate(newSelectedDate);
  };

  // 🔹 Filter employees locally by name
  const filteredAttendance = employeeAttendance?.filter(item =>
    item?.user?.employee_name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <CustomHeader
        title="Dashboard"
        showNotificationButton={true}
        showBackButton={true}
      />
      {error ? <View className="flex-1 justify-center items-center">
        <Text>{error}</Text>
      </View> : <>
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
              <Attendance
                tableTitle={"Employee Attendance"}
                attendanceData={filteredAttendance}
                RightSection={() => (
                  <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                    onSearch={() => { }}
                    selectedDate={selectedDate}
                    onDatePress={() => setShowDatePicker(true)}
                  />
                )}
                scroll={true}
              />
              <Calendar onRequestLeave={() => setShowLeaveModal(true)} />
              <PerformanceDashboard />
              <UpcomingAnniversary />
              <UpcomingHolidays holidays={dashboardData?.public_holidays} />
            </>
          )}
        </ScrollView>
      </>}
      <LeaveRequestModal
        visible={showLeaveModal}
        onClose={() => setShowLeaveModal(false)}
        onSubmit={handleLeaveSubmit}
      />

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate || new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default HomeScreen;
