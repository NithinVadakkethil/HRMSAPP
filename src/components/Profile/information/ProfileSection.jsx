import React from 'react';
import { View, Image, Text } from 'react-native';
import StatusChip from './StatusChip';

const ProfileSection = (props) => {
  const { personalInfo } = props;
  return (
    <View className="flex-row m-4">
      <Image
        source={{
          uri: personalInfo?.image || "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/79044714e8589bce87b864dcecf6105185d93d4c?placeholderIfAbsent=true",
        }}
        className="w-16 h-16 rounded-full mr-4"
        resizeMode="cover"
      />
      <View className="flex-1">
        <View className="flex-row items-center justify-between mb-1">
          <Text className="text-base font-bold text-gray-900">{personalInfo?.name}</Text>
          <StatusChip text={personalInfo?.employee_id} />
        </View>
        <Text className="text-gray-600 text-sm mb-1">{personalInfo?.designation_name || personalInfo?.usertype_display} | {personalInfo?.division_name}</Text>
        {props.subDetails && <>
          <Text className="text-gray-500 text-xs mb-1">ESSL ID: {personalInfo?.essl_id}</Text>
          <Text className="text-gray-500 text-xs">Joining Date : {personalInfo?.joining_date}</Text>
        </>}
      </View>
    </View>
  );
};

export default ProfileSection;