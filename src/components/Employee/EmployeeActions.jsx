import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { User, Phone } from '../../assets';


const EmployeeActions = () => {
  const handleCall = () => {
    console.log('Call pressed');
  };

  const handleViewProfile = () => {
    console.log('View Profile pressed');
  };

  return (
    <View className="flex-row gap-3">
      <TouchableOpacity
        className="flex-row items-center justify-center bg-white border-2 border-[#2A8E9E] rounded-lg py-3 px-6 flex-1"
        onPress={handleCall}
      >
        <Phone size={20} strokeWidth={2.5} />
        <Text className="text-teal-600 font-semibold text-base ml-2">
          Call
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        className="flex-row items-center justify-center bg-[#2A8E9E] rounded-lg py-3 px-6 flex-1"
        onPress={handleViewProfile}
      >
        <User size={20} strokeWidth={2.5} />
        <Text className="text-white font-semibold text-base ml-2">
          View Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmployeeActions;
