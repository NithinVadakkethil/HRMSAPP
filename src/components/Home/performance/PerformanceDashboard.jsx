import React from 'react';
import { View, Image, Text } from 'react-native';
import PerformanceCard from './PerformanceCard';

const PerformanceDashboard = () => {
  const metricsData = [
    { title: 'Time Keeping', iconColor: '#10B981' },
    { title: 'Leave', iconColor: '#F59E0B' },
    { title: 'Shortage', iconColor: '#EF4444' },
    { title: 'Overtime', iconColor: '#8B5CF6' }
  ];

  return (
    <View className="bg-white">
      <View className="p-6">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-gray-900">
            Performance
          </Text>
        </View>

        {/* Chart Section */}
        <View className="mb-6">
          <Image
            source={{
              uri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/63be43c61879498e213be7099eb33df33958627d?placeholderIfAbsent=true",
            }}
            className="w-full h-48 rounded-lg"
            resizeMode="contain"
          />

          {/* Metrics Grid */}
          <View className="mt-4">
            <View className="flex-row justify-between">
              <View className="flex-1">
                <PerformanceCard
                  title={metricsData[0].title}
                  iconColor={metricsData[0].iconColor}
                />
                <PerformanceCard
                  title={metricsData[2].title}
                  iconColor={metricsData[2].iconColor}
                />
              </View>
              <View className="flex-1">
                <PerformanceCard
                  title={metricsData[1].title}
                  iconColor={metricsData[1].iconColor}
                />
                <PerformanceCard
                  title={metricsData[3].title}
                  iconColor={metricsData[3].iconColor}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PerformanceDashboard;
