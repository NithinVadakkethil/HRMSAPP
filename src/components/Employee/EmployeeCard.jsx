import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EmployeeProfile from './EmployeeProfile';
import EmployeeDetails from './EmployeeDetails';
import EmployeeActions from './EmployeeActions';

const EmployeeCard = ({ employee, onViewProfile }) => {
  // Check if employee is new (joined within last 30 days)
  const isNew = () => {
    if (!employee.join_date) return false;
    
    const joinDate = new Date(employee.join_date.split('/').reverse().join('-'));
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    return joinDate > thirtyDaysAgo;
  };

  return (
    <View className="rounded-lg border border-gray-200 bg-white m-4" style={{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.03,
      shadowRadius: 3,
      elevation: 2, // For Android
    }}>
      {/* New Badge - only show if employee is new */}
      {isNew() && (
        <View className="absolute top-0 left-0 bg-green-500 px-4 py-2 rounded-br-lg z-10">
          <Text className="text-white font-bold text-sm">New</Text>
        </View>
      )}
      
      {/* Three-dot Menu */}
      <TouchableOpacity className="absolute top-4 right-4 z-10">
        {/* <MoreVertical size={24} color="#374151" /> */}
      </TouchableOpacity>
      
      <View className="p-6 pt-12">
        <EmployeeProfile employee={employee} />
        <EmployeeDetails employee={employee} />
        <EmployeeActions employee={employee} onViewProfile={onViewProfile} />
      </View>
    </View>
  );
};

export default EmployeeCard;