import React from 'react';
import { View, Image, Text } from 'react-native';

const InboxItem = ({ iconUri, title, description, timestamp }) => {
  return (
    <View className="flex-row items-start justify-between p-4 border-b border-gray-100">
      <View className="flex-row items-start flex-1">
        <Image
          source={{ uri: iconUri }}
          className="w-10 h-10 rounded-full mr-3 mt-1"
          resizeMode="cover"
        />
        <View className="flex-1 pr-3">
          <Text className="text-base font-semibold text-gray-900 mb-1">
            {title}
          </Text>
          <Text className="text-sm text-gray-600 leading-5">
            {description}
          </Text>
        </View>
      </View>
      <View className="ml-2">
        <Text className="text-xs text-gray-500">
          {timestamp}
        </Text>
      </View>
    </View>
  );
};

export default InboxItem;