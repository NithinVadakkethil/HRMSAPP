import React from 'react';
import { View, Text } from 'react-native';

const HeaderText = ({text}) => {
  return (
    <View className="mb-4">
      <Text className="text-xl font-bold text-gray-900">
        {text}
      </Text>
    </View>
  );
};

export default HeaderText;
