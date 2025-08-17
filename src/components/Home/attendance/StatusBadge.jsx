import { View, Text, ScrollView, TouchableOpacity, } from 'react-native'
import React from 'react'

const StatusBadge = ({ status }) => {

    const getStatusStyles = (status) => {
        switch (status) {
            case 'On Time':
                return 'bg-green-100';
            case 'Late':
                return 'bg-red-100';
            case 'Absent':
                return 'bg-gray-100';
            default:
                return 'bg-gray-100';
        }
    };

    const getTextStyles = (status) => {
        switch (status) {
            case 'On Time':
                return 'text-green-800';
            case 'Late':
                return 'text-red-800';
            case 'Absent':
                return 'text-gray-800';
            default:
                return 'text-gray-800';
        }
    };

    return (
        <View className={`px-2.5 py-1 rounded-full ${getStatusStyles(status)}`}>
            <Text className={`text-xs font-medium text-center ${getTextStyles(status)}`}>
                {status}
            </Text>
        </View>
    )
}

export default StatusBadge