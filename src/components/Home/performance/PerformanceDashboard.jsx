import React from 'react';
import { View, Text } from 'react-native';
import PerformanceCard from './PerformanceCard';
import PerformaceChart from './PerformaceChart';

const PerformanceDashboard = () => {
    const metricsData = [
        { title: 'Time Keeping', iconColor: '#10B981' },
        { title: 'Shortage ', iconColor: '#EF4444' },
        { title: 'Leave              ', iconColor: '#F59E0B' },
        { title: 'Overtime', iconColor: '#8B5CF6' }
    ];

    return (
        <View className="bg-white p-6">
            {/* Header Section */}
            <View className="mb-6">
                <Text className="text-xl font-semibold text-gray-900">Performance</Text>
            </View>

            {/* Chart Section */}
            <View className="mb-6">
                <PerformaceChart />
                {/* Metrics Grid */}
                <View className="flex-row flex-wrap">
                    {metricsData.map((metric, index) => (
                        <View key={index} className="flex-1 mb-4 px-2 items-center" style={{ minWidth: '50%' }}>
                            <PerformanceCard
                                title={metric.title}
                                iconColor={metric.iconColor}
                            />
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default PerformanceDashboard;