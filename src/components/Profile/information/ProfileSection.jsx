import React from 'react';
import { View, Image, Text } from 'react-native';
import StatusChip from './StatusChip';

const ProfileSection = (props) => {
  return (
    <View className="flex-row m-4">
      <Image
        source={{
          uri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/79044714e8589bce87b864dcecf6105185d93d4c?placeholderIfAbsent=true",
        }}
        className="w-16 h-16 rounded-full mr-4"
        resizeMode="cover"
      />
      <View className="flex-1">
        <View className="flex-row items-center justify-between mb-1">
          <Text className="text-base font-bold text-gray-900">Mohammed Inshad</Text>
          <StatusChip text="SWA2345" />
        </View>
        <Text className="text-gray-600 text-sm mb-1">Sales Executive | Calicut</Text>
        {props.subDetails && <>
          <Text className="text-gray-500 text-xs mb-1">ESSL ID: E98765</Text>
          <Text className="text-gray-500 text-xs">Joining Date : 23, Aug, 2024</Text>
        </>}
      </View>
    </View>
  );
};

export default ProfileSection;