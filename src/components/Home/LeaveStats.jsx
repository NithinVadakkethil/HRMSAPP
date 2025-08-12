import React from 'react';
import { View } from 'react-native';
import LeaveStatsGrid from './LeaveStatsGrid';

const LeaveStats = () => {
  return (
    <View className="bg-gray-50 p-4">
      <LeaveStatsGrid />
    </View>
  );
};

export default LeaveStats;
