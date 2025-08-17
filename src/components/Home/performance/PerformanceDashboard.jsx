import React from 'react';
import { View, Text } from 'react-native';
import PerformanceCard from './PerformanceCard';
import PerformanceChart from './PerformanceChart';

const PerformanceDashboard = () => {
    const metricsData = [
        { title: 'Time Keeping', iconColor: '#0055F3' },
        { title: 'Shortage', iconColor: '#FE7E4A' },
        { title: 'Leave', iconColor: '#F43F5E' },
        { title: 'Overtime', iconColor: '#08F6C9' }
    ];

    return (
        <View className="bg-[#FFF] rounded-lg shadow-sm border border-gray-200 my-4 p-4">
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