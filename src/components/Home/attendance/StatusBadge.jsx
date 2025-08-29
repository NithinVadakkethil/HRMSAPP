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
            case 'Approved':
                return 'bg-[#22C55E]'
            case 'Pending':
                return 'bg-[#6B7280]'
            case 'Access Granted':
                return 'bg-[#DEFFBD]'
            case 'Allocated':
                return 'bg-[#DEFFBD]'
            case 'Completed':
                return 'bg-[#22C55E]'
            case 'In Progress':
                return 'bg-[#F59E0B]'
            case 'Interested':
                return 'bg-[#3B82F6]'
            default:
                return 'bg-[#E7E9ED]';
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
            case 'Access Granted':
                return 'text-[#4E9C00]';
            case 'Allocated':
                return 'text-[#4E9C00]';
            default:
                return 'text-[#F0FDF4]';
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