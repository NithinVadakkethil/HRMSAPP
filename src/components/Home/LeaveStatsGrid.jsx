import React from 'react';
import { View } from 'react-native';
import LeaveStatCard from './LeaveStatCard';
import { ToatalLeave, Balance, Casual, Unpaid, SickLeave, Taken } from '../../assets';

const LeaveStatsGrid = () => {
  const leaveData = [
    {
      id: 1,
      IconComponent: ToatalLeave,
      label: "Total Leave",
      value: "12"
    },
    {
      id: 2,
      IconComponent: Taken,
      label: "Taken",
      value: "02"
    },
    {
      id: 3,
      IconComponent: Casual,
      label: "Casual Leave",
      value: "05"
    },
    {
      id: 4,
      IconComponent: SickLeave,
      label: "Sick Leave",
      value: "03"
    },
    {
      id: 5,
      IconComponent: Unpaid,
      label: "Unpaid Leave",
      value: "04"
    },
    {
      id: 6,
      IconComponent: Balance,
      label: "Balance",
      value: "05"
    }
  ];

  const renderRow = (startIndex, endIndex) => (
    <View className="flex-row space-x-4 gap-2" key={`row-${startIndex}`}>
      {leaveData.slice(startIndex, endIndex).map((item) => (
        <LeaveStatCard
          key={item.id}
          IconComponent={item.IconComponent}
          label={item.label}
          value={item.value}
        />
      ))}
    </View>
  );

  return (
    <View className="space-y-4 gap-2">
      {renderRow(0, 3)}
      {renderRow(3, 6)}
    </View>
  );
};

export default LeaveStatsGrid;