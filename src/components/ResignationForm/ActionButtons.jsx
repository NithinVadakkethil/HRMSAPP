import React from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

const ActionButtons = ({ onCancel, onSubmit, isSubmitting = false }) => {
  return (
    <View className="flex-row gap-4 mt-6">
      <TouchableOpacity
        onPress={onCancel}
        disabled={isSubmitting}
        className="flex-1 bg-gray-100 border border-[#002231] rounded-lg py-3 px-6"
      >
        <Text className="text-gray-700 text-base font-medium text-center">
          Cancel
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onSubmit}
        disabled={isSubmitting}
        className="flex-1 bg-[#002231] rounded-lg py-3 px-6"
      >
        {isSubmitting ? (
          <ActivityIndicator color="white" />
        ) : (
            <Text className="text-white text-base font-medium text-center">
            Submit
          </Text>
        )}
        
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
