import { View, Text, ScrollView, ActivityIndicator, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CustomHeader, LeaveStats, CustomTable, StatusBadge, LeaveRequestModal } from '../../components'
import { getDashboardData, getLeaveRequests, createLeaveRequest, updateLeaveRequest, deleteLeaveRequest } from '../../api/apiService'
import { Lens, CheckPad, Bin } from '../../assets'

const LeaveScreen = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeaveRequests = async () => {
    try {
      const data = await getLeaveRequests();
      setLeaveRequests(data);
    } catch (err) {
      setError('Failed to fetch leave requests.');
    }
  };

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
    
    fetchLeaveRequests();
    fetchDashboardData();
  }, []);

  const handleDeleteLeave = async (leaveId) => {
    Alert.alert(
      'Delete Leave Request',
      'Are you sure you want to delete this leave request?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteLeaveRequest(leaveId);
              Alert.alert('Success', 'Leave request deleted successfully');
              await fetchLeaveRequests(); // Refresh the list
            } catch (error) {
              Alert.alert('Error', 'Failed to delete leave request');
            }
          }
        }
      ]
    );
  };

  const handleEditLeave = (leaveRequest) => {
    setSelectedLeaveRequest(leaveRequest);
    setShowLeaveModal(true);
  };

  const ActionButtons = ({ row }) => (
    <View className="flex-row gap-2">
      <TouchableOpacity
        onPress={() => handleEditLeave(row)}
        className="p-1 bg-blue-100 rounded"
        activeOpacity={0.7}
      >
        <CheckPad width={16} height={16} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDeleteLeave(row.id)}
        className="p-1 bg-red-100 rounded"
        activeOpacity={0.7}
      >
        <Bin width={16} height={16} />
      </TouchableOpacity>
    </View>
  );

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
      header: 'From Date',
      key: 'from_date',
      width: 100,
    },
    {
      header: 'To Date',
      key: 'to_date',
      width: 100,
    },
    {
      header: 'Days',
      key: 'leave_day_type',
      width: 80,
    },
    {
      header: 'Reason',
      key: 'reason',
      width: 120,
    },
    {
      header: 'Session',
      key: 'day_session',
      width: 80,
      render: (row) => (
        <Text className="text-xs">
          {row.day_session || 'Full Day'}
        </Text>
      ),
    },
    {
      header: 'Status',
      key: 'status',
      width: 90,
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Action',
      key: 'action',
      width: 80,
      render: (row) => <ActionButtons row={row} />,
    },
  ];

  const handleLeaveSubmit = async (leaveData) => {
    try {
      if (selectedLeaveRequest) {
        // Update existing leave request
        await updateLeaveRequest(selectedLeaveRequest.id, leaveData);
        Alert.alert('Success', 'Leave request updated successfully');
      } else {
        // Create new leave request
        await createLeaveRequest(leaveData);
        Alert.alert('Success', 'Leave request created successfully');
      }
      
      // Refresh the leave requests list
      await fetchLeaveRequests();
      
      // Close modal and reset selection
      setShowLeaveModal(false);
      setSelectedLeaveRequest(null);
    } catch (error) {
      Alert.alert('Error', 'Failed to process leave request');
    }
  };

  const handleCloseModal = () => {
    setShowLeaveModal(false);
    setSelectedLeaveRequest(null);
  };

  const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      console.log('Search pressed:', searchText);
      // Implement search functionality here
    };

    const handleRequestLeave = () => {
      setSelectedLeaveRequest(null); // Ensure it's for creating new request
      setShowLeaveModal(true);
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
          onPress={handleRequestLeave}
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
        />
      </ScrollView>
      <LeaveRequestModal
        visible={showLeaveModal}
        onClose={handleCloseModal}
        onSubmit={handleLeaveSubmit}
        editData={selectedLeaveRequest} // Pass the selected leave request for editing
      />
    </View>
  )
}

export default LeaveScreen