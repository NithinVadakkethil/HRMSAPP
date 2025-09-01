import React from 'react';
import { View } from 'react-native';
import Skeleton from '../Common/Skeleton';

const HomeScreenSkeleton = () => {
  return (
    <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
      {/* LeaveStats Skeleton */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
        <Skeleton width={100} height={80} />
        <Skeleton width={100} height={80} />
        <Skeleton width={100} height={80} />
      </View>

      {/* SummarySection Skeleton */}
      <Skeleton width={'100%'} height={120} style={{ marginBottom: 16 }} />

      {/* Attendance Skeleton */}
      <Skeleton width={'100%'} height={150} style={{ marginBottom: 16 }} />

      {/* Calendar Skeleton */}
      <Skeleton width={'100%'} height={300} style={{ marginBottom: 16 }} />
      
      {/* PerformanceDashboard Skeleton */}
      <Skeleton width={'100%'} height={200} style={{ marginBottom: 16 }} />

      {/* UpcomingAnniversary Skeleton */}
      <Skeleton width={'100%'} height={100} style={{ marginBottom: 16 }} />
      
      {/* UpcomingHolidays Skeleton */}
      <Skeleton width={'100%'} height={150} />
    </View>
  );
};

export default HomeScreenSkeleton;
