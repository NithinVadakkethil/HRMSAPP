import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const PerformanceChart = () => {
  const performanceValue = 90;
  const data = [
    {
      key: 1,
      value: performanceValue,
      svg: { fill: '#10B981' }, // Green color for the main value
    },
    {
      key: 2,
      value: 100 - performanceValue,
      svg: { fill: '#E5E7EB' }, // Gray color for the remainder
    },
  ];

  return (
    <View className="items-center justify-center">
      <PieChart
        style={{ height: 150, width: 150 }}
        data={data}
        innerRadius="70%"
        outerRadius="95%"
        padAngle={0}
      >
        <View className="absolute inset-0 items-center justify-center">
          <Text className="text-3xl font-bold text-gray-800">{`${performanceValue}%`}</Text>
          <Text className="text-sm text-gray-500">Excellent</Text>
        </View>
      </PieChart>
    </View>
  );
};

export default PerformanceChart;