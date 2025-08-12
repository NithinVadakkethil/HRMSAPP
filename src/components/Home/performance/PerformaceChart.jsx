import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const PerformaceChart = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const finalData = [
    { key: 1, value: 35, svg: { fill: '#4ade80' } },
    { key: 2, value: 12, svg: { fill: '#f97316' } },
    { key: 3, value: 10, svg: { fill: '#3b82f6' } },
    { key: 4, value: 45, svg: { fill: '#facc15' } },
  ];

  const getAnimatedData = () => {
    return finalData.map((item, index) => ({
      ...item,
      value: index <= currentStep ? item.value : 0
    }));
  };

  useEffect(() => {
    const intervals = [500, 1000, 1500, 2000]; // Staggered timing
    
    intervals.forEach((delay, index) => {
      setTimeout(() => {
        setCurrentStep(index);
      }, delay);
    });
  }, []);

  return (
    <View className="items-center mb-5">
      <View style={{ position: 'relative' }}>
        <PieChart
          style={{ height: 170, width: 170 }}
          data={getAnimatedData()}
          innerRadius={60}
          outerRadius={85}
          animate={true}
          animationDuration={400}
          padAngle={0}
        />
        <View className="absolute left-0 right-0 top-[40%] items-center">
          <Text className="text-3xl font-bold text-gray-800">24</Text>
          <Text className="text-sm text-gray-500">Task in Total</Text>
        </View>
      </View>
    </View>
  );
};

export default PerformaceChart;