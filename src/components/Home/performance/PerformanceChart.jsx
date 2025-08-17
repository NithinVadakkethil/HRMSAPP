import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const PerformanceChart = () => {
  const performanceValue = 90;
  const data = [
    {
      key: 1,
      value: 30,
      svg: { fill: '#FE7E4A' }, // Green color for the main value
    },
    {
      key: 2,
      value: 20,
      svg: { fill: '#08F6C9' }, // Gray color for the remainder
    },
    {
      key: 3,
      value: 10,
      svg: { fill: '#F43F5E' }, // Green color for the main value
    },
    {
      key: 4,
      value: 40,
      svg: { fill: '#0055F3' }, // Gray color for the remainder
    },
  ];

  return (
    <View className="items-center justify-center">
      <PieChart
        style={{ height: 160, width: 160 }}
        data={data}
        innerRadius="70%"
        outerRadius="95%"
        padAngle={0}
      >
        <View className="absolute inset-0 items-center justify-center">
          <Text className="text-sm text-gray-500">Performance</Text>
          <Text className="text-base font-inter-bold text-[#111827]">Excelent</Text>
        </View>
      </PieChart>
    </View>
  );
};

export default PerformanceChart;