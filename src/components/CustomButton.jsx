import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ onPress, title = "Login" }) => {
  return (
    <TouchableOpacity
      className="w-full bg-teal-600 py-4 rounded-lg items-center justify-center"
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text className="text-white text-base font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
