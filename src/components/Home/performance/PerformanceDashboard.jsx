import React from 'react';
import { View, Text } from 'react-native';
import PerformanceCard from './PerformanceCard';
import PerformanceChart from './PerformanceChart';

const PerformanceDashboard = () => {
    const metricsData = [
        { title: 'Time Keeping', iconColor: '#10B981' },
        { title: 'Shortage', iconColor: '#EF4444' },
        { title: 'Leave', iconColor: '#F59E0B' },
        { title: 'Overtime', iconColor: '#8B5CF6' }
    ];

    return (
        <View className="bg-white rounded-lg shadow-sm border border-gray-200 m-4 p-4">
            {/* Header Section */}
            <View className="mb-4">
                <Text className="text-base font-bold text-gray-900">Performance</Text>
            </View>

            {/* Chart Section */}
            <View className="items-center mb-4">
                <PerformanceChart />
            </View>

            {/* Metrics Grid */}
            <View className="flex-row flex-wrap">
                {metricsData.map((metric, index) => (
                    <View key={index} className="w-1/2 px-2 mb-2">
                        <PerformanceCard
                            title={metric.title}
                            iconColor={metric.iconColor}
                        />
                    </View>
                ))}
            </View>
        </View>
    );
};

export default PerformanceDashboard;