import React from 'react';
import { View, Image, Text } from 'react-native';

const EventItem = ({ imageUri, name, eventType, yearsInfo }) => {
  return (
    <View className="flex-row items-center justify-between p-3 rounded border border-[#EBEFF3] my-1">
      <Image
        source={{ uri: imageUri }}
        className="w-12 h-12 rounded-full mr-3"
        resizeMode="cover"
      />
      <View className="flex-1">
        <Text className="text-base font-medium text-gray-900 mb-1">
          {name}
        </Text>
        <Text className="text-sm text-gray-600">
          {eventType}
        </Text>
      </View>
      {yearsInfo && (
        <View className="ml-2">
          <Text className="text-sm text-gray-500 font-medium">
            {yearsInfo}
          </Text>
        </View>
      )}
    </View>
  );
};

export default EventItem;
