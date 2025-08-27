import { View, Text, ScrollView, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CustomHeader, LeaveStats, CustomTable, StatusBadge, LeaveRequestModal } from '../../components'
import { getDashboardData, getLeaveRequests, createLeaveRequest } from '../../api/apiService'
import { Lens } from '../../assets'

const LeaveScreen = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
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
    const fetchLeaveRequests = async () => {
      try {
        const data = await getLeaveRequests();
        setLeaveRequests(data);
      } catch (err) {
        setError('Failed to fetch dashboard data.');
      } finally {
        setLoading(false);
      }
    };
    fetchLeaveRequests();
    fetchDashboardData();
  }, []);

  const columns = [
    {
      header: 'Requested By',
      key: 'name',
      width: 150,
    },
    {
      header: 'Leave Type',
      key: 'leave_type',
      width: 100,
    },
    {
      header: 'Duration',
      key: 'duration',
      width: 90,
    },
    {
      header: 'Days',
      key: 'days',
      width: 90,
    },
    {
      header: 'Reason',
      key: 'reason',
      width: 100,
    },
    {
      header: 'Session',
      key: 'day_session',
      width: 100,
    },
    {
      header: 'Status',
      key: 'status',
      width: 80,
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Action',
      key: 'action',
      width: 80,
      render:  "",
    },
  ];

  const handleLeaveSubmit = async (leaveData) => {
    const response = await createLeaveRequest(leaveData);
    await getLeaveRequests();
  };

  const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      console.log('Search pressed:', searchText);
    };

    const handleRequestLeave = () => {
      console.log('Request Leave pressed');
    };

    return (
      <View className="flex-1 flex-row items-center px-3 py-2 gap-3">
        <View className='flex-row items-center justify-between w-48 rounded-lg shadow-sm border border-gray-200 px-2 py-0.5 gap-1'>
          <Lens/>
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
        <TouchableOpacity
          className="bg-[#002231] px-4 py-2 rounded-md"
          onPress={()=> setShowLeaveModal(true)}
          activeOpacity={0.8}
        >
          <Text className="text-white font-medium text-sm">Request Leave</Text>
        </TouchableOpacity>
      </View>
    )
  }

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
        <LeaveStats leaveStats={dashboardData} />
        <CustomTable
          title="Leave Request"
          columns={columns}
          data={leaveRequests}
          RightSection={SearchBar}
          scroll={true}
        // onRowPress={handleRowPress}
        // containerStyle="mt-4"
        />
      </ScrollView>
      <LeaveRequestModal
        visible={showLeaveModal}
        onClose={() => setShowLeaveModal(false)}
        onSubmit={handleLeaveSubmit}
      />
    </View>
  )
}

export default LeaveScreen