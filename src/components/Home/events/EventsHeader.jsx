import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const EventsHeader = ({ title = "Upcoming Birthday / anniversary", onSeeAllPress }) => {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <Text className="text-lg font-semibold text-gray-900">
        {title}
      </Text>
      <TouchableOpacity onPress={onSeeAllPress}>
        <Text className="text-sm text-blue-600 font-medium">
          See all
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventsHeader;
