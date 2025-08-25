import React from 'react';
import { View } from 'react-native';
import LeaveStatsGrid from './LeaveStatsGrid';

const LeaveStats = ({ leaveStats }) => {
  return (
    <View className="p-4">
      <LeaveStatsGrid leaveStats={leaveStats} />
    </View>
  );
};

export default LeaveStats;
