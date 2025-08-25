import React from 'react';
import { View } from 'react-native';
import LeaveStatCard from './LeaveStatCard';
import { ToatalLeave, Balance, Casual, Unpaid, SickLeave, Taken } from '../../assets';

const LeaveStatsGrid = ({ leaveStats }) => {
  const leaveData = [
    {
      id: 1,
      IconComponent: ToatalLeave,
      label: "Total Leave",
      value: leaveStats?.total_leave_allowed || "0"
    },
    {
      id: 2,
      IconComponent: Taken,
      label: "Taken",
      value: leaveStats?.total_leave_taken || "0"
    },
    {
      id: 3,
      IconComponent: Casual,
      label: "Casual Leave",
      value: leaveStats?.leave_summary["Casual Leave"].remaining || "0"
    },
    {
      id: 4,
      IconComponent: SickLeave,
      label: "Sick Leave",
      value: leaveStats?.leave_summary["Sick leave"].remaining || "0"
    },
    {
      id: 5,
      IconComponent: Unpaid,
      label: "Unpaid Leave",
      value: leaveStats?.unpaid_leave || "0"
    },
    {
      id: 6,
      IconComponent: Balance,
      label: "Balance",
      value: leaveStats?.total_remaining_leave || "0"
    }
  ];

  const renderRow = (startIndex, endIndex) => (
    <View className="flex-row space-x-4 gap-3" key={`row-${startIndex}`}>
      {leaveData.slice(startIndex, endIndex).map((item) => (
        <LeaveStatCard
          key={item.id}
          IconComponent={item.IconComponent}
          label={item.label}
          value={String(item.value)}
        />
      ))}
    </View>
  );

  return (
    <View className="space-y-4 gap-3">
      {renderRow(0, 3)}
      {renderRow(3, 6)}
    </View>
  );
};

export default LeaveStatsGrid;