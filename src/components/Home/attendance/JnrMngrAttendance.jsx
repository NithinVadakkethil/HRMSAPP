import { View } from 'react-native'
import React from 'react'
import CustomTable from './CustomTable';
import StatusBadge from './StatusBadge';

const JnrMngrAttendance = () => {
    const attendanceData = [
        {
          employeeId: 'SWEID4567',
          date: 'Sunday 25 Aug 2024',
          checkIn: '9:01 AM',
          checkOut: '7:01 PM',
          worked: '8hr',
          difference: '-Nil-',
          status: 'On Time'
        },
        {
          employeeId: 'SWEID4567',
          date: 'Monday 26 Aug 2024',
          checkIn: '9:15 AM',
          checkOut: '7:01 PM',
          worked: '7hr 46min',
          difference: '+15min',
          status: 'Late'
        },
        {
          employeeId: 'SWEID4567',
          date: 'Tuesday 27 Aug 2024',
          checkIn: '9:01 AM',
          checkOut: '7:01 PM',
          worked: '8hr',
          difference: '-Nil-',
          status: 'On Time'
        },
        {
          employeeId: 'SWEID4567',
          date: 'Wednesday 28 Aug 2024',
          checkIn: '9:01 AM',
          checkOut: '7:01 PM',
          worked: '8hr',
          difference: '-Nil-',
          status: 'On Time'
        },
        {
          employeeId: 'SWEID4567',
          date: 'Thursday 29 Aug 2024',
          checkIn: '9:01 AM',
          checkOut: '7:01 PM',
          worked: '8hr',
          difference: '-Nil-',
          status: 'On Time'
        },
        {
          employeeId: 'SWEID4567',
          date: 'Friday 30 Aug 2024',
          checkIn: '-',
          checkOut: '-',
          worked: '0hr',
          difference: '-8hr',
          status: 'Absent'
        }
      ];
    
      // Column configuration
      const columns = [
        {
          header: 'Employee ID',
          key: 'employeeId',
          width: 100,
        },
        {
          header: 'Employee Name',
          key: 'employeeName',
          width: 150,
        },
        {
          header: 'Desigination',
          key: 'designation',
          width: 100,
        },
        {
          header: 'Date',
          key: 'date',
          width: 90,
        },
        {
          header: 'Shop',
          key: 'shop',
          width: 90,
        },
        {
          header: 'Shift',
          key: 'shift',
          width: 90,
        },
        {
          header: 'Check In',
          key: 'checkIn',
          width: 90,
        },
        {
          header: 'Check Out',
          key: 'checkOut',
          width: 90,
        },
        {
          header: 'Status',
          key: 'status',
          width: 80,
          render: (row) => <StatusBadge status={row.status} />,
        },
      ];
    
      const handleRowPress = (row) => {
        console.log('Row pressed:', row);
        // Handle row press action here
      };
    
      return (
        <View className="flex-1 bg-[#FFFFFF] rounded-lg mb-4">
          <CustomTable
            title="Attendance Overview"
            columns={columns}
            data={attendanceData}
            onRowPress={handleRowPress}
            // containerStyle="mt-4"
          />
          
          {/* Example with different data - Employee Performance */}
          {/* <CustomTable
            title="Employee Performance"
            columns={[
              { header: 'ID', key: 'id', width: 80 },
              { header: 'Name', key: 'name', width: 120 },
              { header: 'Department', key: 'department', width: 120 },
              { header: 'Performance Score', key: 'score', width: 120 },
              { header: 'Projects Completed', key: 'projects', width: 120 },
              { header: 'Efficiency Rating', key: 'efficiency', width: 120 },
              { header: 'Last Review Date', key: 'lastReview', width: 120 },
              { header: 'Next Review', key: 'nextReview', width: 120 }
            ]}
            data={[
              {
                id: 'EMP001',
                name: 'John Doe',
                department: 'Engineering',
                score: '95%',
                projects: '12',
                efficiency: 'Excellent',
                lastReview: '15 Jul 2024',
                nextReview: '15 Jan 2025'
              },
              {
                id: 'EMP002',
                name: 'Jane Smith',
                department: 'Marketing',
                score: '88%',
                projects: '8',
                efficiency: 'Good',
                lastReview: '20 Jul 2024',
                nextReview: '20 Jan 2025'
              }
            ]}
            containerStyle="mt-4"
          /> */}
        </View>
      );
}

export default JnrMngrAttendance