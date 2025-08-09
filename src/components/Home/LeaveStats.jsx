import React from 'react';
import { View } from 'react-native';
import LeaveStatsGrid from './LeaveStatsGrid';

const LeaveStats = () => {
  return (
    <View className="flex-1 bg-gray-50 p-4">
      <LeaveStatsGrid />
    </View>
  );
};

export default LeaveStats;
