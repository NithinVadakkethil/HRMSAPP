import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const CalendarHeader = (props) => {
  return (
    <View className="mb-6">
      {/* Calendar title */}
      <View className="mb-4">
        <Text className="text-lg font-semibold text-gray-900">Calendar</Text>
      </View>

      {/* Month navigation and Request Leave button */}
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center">
          <Text className="text-xl font-bold text-gray-900 mr-4">March 2024</Text>
          <View className="flex-row">
            <TouchableOpacity className="mr-2">
              <Image
                source={{
                  uri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/3a4a0549968a3ee49de6307194a53f551d70fd9c?placeholderIfAbsent=true",
                }}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/07c8fff15e80e1c31f27ce62fe1de405643be14a?placeholderIfAbsent=true",
                }}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-lg" onPress={props.onRequestLeave}>
          <Text className="text-white font-medium">Request Leave</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarHeader;
