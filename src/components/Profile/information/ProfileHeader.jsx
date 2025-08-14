import React from 'react';
import { View, Text } from 'react-native';

const ProfileHeader = () => {
  return (
    <View className="mb-4 border-b border-gray-200 pb-4">
      <Text className="text-lg font-bold text-gray-900">Personal Information</Text>
    </View>
  );
};

export default ProfileHeader;