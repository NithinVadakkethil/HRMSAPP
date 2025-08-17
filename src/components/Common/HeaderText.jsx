import React from 'react';
import { View, Text } from 'react-native';

const HeaderText = ({text}) => {
  return (
    <View className="mb-4 flex-row justify-between items-center">
      <Text className="text-[18px] font-inter-semibold text-[#002231]">{text}</Text>
    </View>
  );
};

export default HeaderText;
