import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CheckPad, Bin } from '../../../assets'
import { CustomHeader, HeaderText, StatusBadge, LeaveRequestModal } from '../../../components'
import LeaveTopTabs from './LeaveTopTabs'
import { getJmLeaveRequests, getEmployeeLeaveRequests, leaveRequestAction, deleteLeaveRequest, updateLeaveRequest } from '../../../api/apiService';

const JnrLeaveScreen = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerMode, setDatePickerMode] = useState(null); // 'from' or 'to'
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [acceptedOrRejected, setAcceptedOrRejected] = useState([]);
  const [myLeaves, setMyLeaves] = useState([]);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState(null);
  const [loading, setLoading] = useState(false);

  // Format date for API (YYYY-MM-DD)
  const formatDateForAPI = (date) => {
    if (!date) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  // Fetch all leave data
  const fetchLeaveData = async () => {
    setLoading(true);
    try {
      // Format dates for API
      const fromDateStr = fromDate ? formatDateForAPI(fromDate) : '';
      const toDateStr = toDate ? formatDateForAPI(toDate) : '';

      // Build query parameters dynamically
      const pendingQuery = `Pending${fromDateStr ? `&from_date=${fromDateStr}` : ''}${toDateStr ? `&to_date=${toDateStr}` : ''}`;
      const acceptedRejectedQuery = `Approved&Status=Rejected${fromDateStr ? `&from_date=${fromDateStr}` : ''}${toDateStr ? `&to_date=${toDateStr}` : ''}`;

      // Await the promises here
      const pendingLeaves = await getEmployeeLeaveRequests(pendingQuery);
      const acceptedOrRejectedLeaves = await getEmployeeLeaveRequests(acceptedRejectedQuery);
      const myLeaveRequest = await getJmLeaveRequests();

      setLeaveRequests(pendingLeaves);
      setAcceptedOrRejected(acceptedOrRejectedLeaves);
      setMyLeaves(myLeaveRequest);
    } catch (error) {
      console.error('Error fetching leave data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when component mounts or when dates change
  useEffect(() => {
    fetchLeaveData();
  }, [fromDate, toDate]);

  // Fetch latest data every time the user navigates back to this screen
  useFocusEffect(
    React.useCallback(() => {
      fetchLeaveData();
    }, [])
  );

  const openDatePicker = (mode) => {
    setDatePickerMode(mode);
    setShowDatePicker(true);
  };

  const formatDisplayDate = (date) => {
    if (!date) return 'DD.MM.YYYY';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (selectedDate) {
      if (datePickerMode === 'from') {
        setFromDate(selectedDate);
        // If toDate is before fromDate, update toDate to be the same as fromDate
        if (toDate && selectedDate > toDate) {
          setToDate(selectedDate);
        }
      } else if (datePickerMode === 'to') {
        // Ensure toDate is not before fromDate
        if (fromDate && selectedDate < fromDate) {
          setToDate(fromDate);
        } else {
          setToDate(selectedDate);
        }
      }
    }

    setDatePickerMode(null);
  };

  // Clear from date
  const clearFromDate = () => {
    setFromDate(null);
  };

  // Clear to date
  const clearToDate = () => {
    setToDate(null);
  };

  // Clear both dates
  const clearAllDates = () => {
    setFromDate(null);
    setToDate(null);
  };

  const handleCloseModal = () => {
    setShowLeaveModal(false);
    setSelectedLeaveRequest(null);
  };

  const handleLeaveAction = (id, status) => {
    Alert.alert(
      `${status} Leave Request`,
      `Are you sure you want to ${status.toLowerCase()} this leave request?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes',
          onPress: async () => {
            try {
              const payload = { status };
              await leaveRequestAction(id, payload);
              Alert.alert('Success', `Leave ${status} successfully.`);
              fetchLeaveData(); // refresh data
            } catch (error) {
              console.error(`Error while updating leave status to ${status}:`, error);
              Alert.alert('Error', `Failed to ${status.toLowerCase()} leave request.`);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

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
              await fetchLeaveData(); // Refresh the list
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

  const handleleaveEdit = async (leaveData) => {
    try {
      if (selectedLeaveRequest) {
        await updateLeaveRequest(selectedLeaveRequest.id, leaveData);
  
        // ✅ Refresh all leave data at once
        await fetchLeaveData();
  
        Alert.alert('Success', 'Leave request updated successfully');
      }
  
      setShowLeaveModal(false);
      setSelectedLeaveRequest(null);
    } catch (error) {
      Alert.alert('Error', 'Failed to process leave request');
    }
  };
  

  const leaveRequestColumns = [
    { header: 'Requested By', key: 'name', width: 160 },
    { header: 'Date From', key: 'from_date', width: 90 },
    { header: 'Date To', key: 'to_date', width: 90 },
    { header: 'Reason Note', key: 'reason', width: 150 },
    {
      header: 'Action',
      key: 'status',
      width: 120,
      render: (row) => (
        <View className="flex-row space-x-3">
          {/* ✅ Approve */}
          <TouchableOpacity
            onPress={() => handleLeaveAction(row.id, 'Approved')}
            className="bg-green-100 p-2 rounded-full"
          >
            <Text>✅</Text>
          </TouchableOpacity>

          {/* ❌ Reject */}
          <TouchableOpacity
            onPress={() => handleLeaveAction(row.id, 'Rejected')}
            className="bg-red-100 p-2 rounded-full ml-2"
          >
            <Text>❌</Text>
          </TouchableOpacity>
        </View>
      ),
    },
  ];

  const acceptedOrRejectedColumns = [
    { header: 'Requested By', key: 'name', width: 160 },
    { header: 'Date From', key: 'from_date', width: 90 },
    { header: 'Reason Note', key: 'reason', width: 150 },
    { header: 'Day Type', key: 'leave_day_type', width: 90 },
    {
      header: 'Shop / Division', key: '', width: 150, render: (row) => (
        <Text className="text-sm text-gray-900">
          {row.shop_name
            ? `${row.shop_name}${row.division_name ? ` (${row.division_name})` : ''}`
            : row.division_name
              ? `${row.division_name}`
              : '-'}
        </Text>
      ),
    },
    { header: 'Status', key: 'status', width: 80, render: (row) => <StatusBadge status={row.status} /> },
  ];

  const myRequestColumns = [
    { header: 'Requested By', key: 'name', width: 160 },
    { header: 'Date From', key: 'from_date', width: 90 },
    { header: 'Reason Note', key: 'reason', width: 150 },
    { header: 'Day Type', key: 'leave_day_type', width: 90 },
    {
      header: 'Shop / Division', key: '', width: 150, render: (row) => (
        <Text className="text-sm text-gray-900">
          {row.shop_name
            ? `${row.shop_name}${row.division_name ? ` (${row.division_name})` : ''}`
            : row.division_name
              ? `${row.division_name}`
              : '-'}
        </Text>
      ),
    },
    { header: 'Status', key: 'status', width: 80, render: (row) => <StatusBadge status={row.status} /> },
    {
      header: 'Action',
      key: 'action',
      width: 80,
      render: (row) => <ActionButtons row={row} />,
    },
  ];

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <CustomHeader
        title="Leave"
        showNotificationButton={true}
        logo={false}
      />
      <View className='flex-1 bg-[#FFFFFF]'>
        <HeaderText text={"Leave Request"} />
        {/* Date Range Selector */}
        <View className="px-4 py-3 bg-white mx-4 rounded-lg shadow-sm border border-gray-200 mt-2">
          <View className="flex-row items-center justify-between">
            {/* From Date */}
            <View className="flex-1">
              <Text className="text-sm text-gray-600 mb-1 font-medium">From Date</Text>
              <View className="flex-row items-center">
                <TouchableOpacity
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 bg-white"
                  onPress={() => openDatePicker('from')}
                >
                  <Text className="text-base text-gray-800">
                    {formatDisplayDate(fromDate)}
                  </Text>
                </TouchableOpacity>
                {fromDate && (
                  <TouchableOpacity
                    onPress={clearFromDate}
                    className="ml-2 p-2 bg-gray-100 rounded-full"
                  >
                    <Text>X</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View className="w-4" />

            {/* To Date */}
            <View className="flex-1">
              <Text className="text-sm text-gray-600 mb-1 font-medium">To Date</Text>
              <View className="flex-row items-center">
                <TouchableOpacity
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 bg-white"
                  onPress={() => openDatePicker('to')}
                >
                  <Text className="text-base text-gray-800">
                    {formatDisplayDate(toDate)}
                  </Text>
                </TouchableOpacity>
                {toDate && (
                  <TouchableOpacity
                    onPress={clearToDate}
                    className="ml-2 p-2 bg-gray-100 rounded-full"
                  >
                    <Text>X</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          {/* Clear All Button - Only show when at least one date is selected */}
          {(fromDate || toDate) && (
            <View className="mt-3 flex-row justify-end">
              <TouchableOpacity
                onPress={clearAllDates}
                className="px-3 py-1 bg-red-50 border border-red-200 rounded-md flex-row items-center"
              >
                <Text>X</Text>
                <Text className="text-red-600 text-sm font-medium ml-1">
                  Clear Dates
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <LeaveTopTabs
          leaveRequests={leaveRequests}
          acceptedOrRejected={acceptedOrRejected}
          acceptedOrRejectedColumns={acceptedOrRejectedColumns}
          myRequestColumns={myRequestColumns}
          myLeaves={myLeaves}
          leaveRequestColumns={leaveRequestColumns}
          loading={loading}
        />
        <LeaveRequestModal
          visible={showLeaveModal}
          onClose={handleCloseModal}
          onSubmit={handleleaveEdit}
          editData={selectedLeaveRequest} // Pass the selected leave request for editing
        />
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={datePickerMode === 'from' ? fromDate || new Date() : toDate || new Date()}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
          minimumDate={datePickerMode === 'to' ? fromDate : undefined}
        />
      )}
    </View>
  )
}

export default JnrLeaveScreen;