import { View } from 'react-native'
import React from 'react'
import CustomTable from './CustomTable'
import StatusBadge from './StatusBadge'

const Attendance = (props) => {

  // ✅ Convert API data to match your table structure
  const formattedData = props.attendanceData?.map((item) => {
    const checkInDate = item?.checkin ? new Date(item.checkin) : null;
    const checkOutDate = item?.checkout && item.checkout !== '-' ? new Date(item.checkout) : null;

    // Format check-in / check-out times (e.g., "9:15 AM")
    const formatTime = (dateObj) => {
      if (!dateObj) return '-';
      return dateObj.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    };

    // Format readable date (e.g., "Tuesday 28 Oct 2025")
    const formatDate = (dateStr) => {
      const dateObj = new Date(dateStr.replace(/\//g, '-').split(' ')[0]);
      return dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    };

    // Calculate total hours
    const totalHours = item?.total_hours?.split('.')[0] || '0:00:00';

    // Define status logic
    let status = 'On Time';
    if (item?.checkin === '-' || !item?.checkin) {
      status = 'Absent';
    } else {
      const checkInHour = checkInDate?.getHours();
      if (checkInHour > 9) status = 'Late';
    }

    return {
      employeeId: item?.user?.essl_id || '-',
      date: formatDate(item?.from_date),
      checkIn: formatTime(checkInDate),
      checkOut: formatTime(checkOutDate),
      worked: totalHours,
      difference: '-Nil-', // You can calculate difference if needed
      status,
    };
  });

  // ✅ Table column configuration
  const columns = [
    { header: 'Employee ID', key: 'employeeId', width: 100 },
    { header: 'Date', key: 'date', width: 160 },
    { header: 'Check In', key: 'checkIn', width: 90 },
    { header: 'Check Out', key: 'checkOut', width: 90 },
    { header: 'Worked', key: 'worked', width: 100 },
    { header: 'Difference', key: 'difference', width: 100 },
    { header: 'Status', key: 'status', width: 80, render: (row) => <StatusBadge status={row.status} /> },
  ];

  const handleRowPress = (row) => {
    console.log('Row pressed:', row);
  };

  return (
    <View className="flex-1 bg-[#FFFFFF] rounded-lg mb-4">
      <CustomTable
        title={props.tableTitle}
        columns={columns}
        data={formattedData}
        onRowPress={handleRowPress}
        RightSection={props.RightSection}
        scroll={props.scroll}
      />
    </View>
  );
};

export default Attendance;
