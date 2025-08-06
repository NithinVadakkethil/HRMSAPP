import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const EyeIcon = ({ isVisible }) => (
  <Svg
    width="20"
    height="13"
    viewBox="0 0 20 13"
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.4692 9.56413C7.28186 10.3768 8.38406 10.8333 9.53333 10.8333C10.6826 10.8333 11.7848 10.3768 12.5975 9.56413C13.4101 8.75147 13.8667 7.64927 13.8667 6.5C13.8667 5.35073 13.4101 4.24853 12.5975 3.43587C11.7848 2.62321 10.6826 2.16667 9.53333 2.16667C8.38406 2.16667 7.28186 2.62321 6.4692 3.43587C5.65655 4.24853 5.2 5.35073 5.2 6.5C5.2 7.64927 5.65655 8.75147 6.4692 9.56413ZM0 6.5C1.49933 2.69533 5.2 0 9.53333 0C13.8667 0 17.5673 2.69533 19.0667 6.5C17.5673 10.3047 13.8667 13 9.53333 13C5.2 13 1.49933 10.3047 0 6.5Z"
      fill="#007583"
    />
    <Path
      d="M9.53333 3.9C8.84377 3.9 8.18245 4.17393 7.69485 4.66152C7.20726 5.14912 6.93333 5.81044 6.93333 6.5C6.93333 7.18956 7.20726 7.85088 7.69485 8.33848C8.18245 8.82607 8.84377 9.1 9.53333 9.1C10.2229 9.1 10.8842 8.82607 11.3718 8.33848C11.8594 7.85088 12.1333 7.18956 12.1333 6.5C12.1333 5.81044 11.8594 5.14912 11.3718 4.66152C10.8842 4.17393 10.2229 3.9 9.53333 3.9Z"
      fill="#007583"
    />
  </Svg>
);

const PasswordInput = ({ label, placeholder, value, onChangeText, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="mb-4">
      <Text className="text-sm font-medium text-gray-700 mb-2">
        {label}
      </Text>
      <View className="relative">
        <TextInput
          className="w-full px-3 py-3 pr-12 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!isPasswordVisible}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
        <TouchableOpacity
          className="absolute right-3 top-3"
          onPress={togglePasswordVisibility}
          style={{ width: 20, height: 13 }}
        >
          <EyeIcon isVisible={isPasswordVisible} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
