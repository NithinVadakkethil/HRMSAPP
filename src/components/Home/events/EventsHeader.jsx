import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const EventsHeader = ({ title = "Upcoming Birthday / anniversary", onSeeAllPress }) => {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <Text className="text-lg font-semibold text-gray-900">
        {title}
      </Text>
      <TouchableOpacity onPress={onSeeAllPress}>
        <View className="pb-1">
          <Text className="text-sm text-[#2A8E9E] font-inter-medium border-b border-[#2A8E9E]">
            See all
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EventsHeader;
