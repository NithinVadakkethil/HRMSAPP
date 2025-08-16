import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DocumentRow = ({ sectionTitle, fileName, fileType }) => {
  const isPdf = fileType === 'pdf';
  // Simple text placeholder for icon
  const iconPlaceholder = isPdf ? '[PDF]' : '[IMG]';

  return (
    <View className="mb-6">
      <Text className="text-lg font-bold text-gray-800 mb-2">{sectionTitle}</Text>
      
      {/* File Name Container */}
      <View className="border border-gray-300 rounded-lg p-4 flex-row items-center">
        <Text className="text-blue-500 mr-2">{iconPlaceholder}</Text>
        <Text className="text-gray-800">{fileName}</Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row justify-end space-x-2 mt-2">
        <TouchableOpacity className="border border-gray-300 rounded-md py-2 px-4 flex-row items-center">
          {/* View icon would go here */}
          <Text className="text-gray-700 ml-1">View</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-600 rounded-md py-2 px-4 flex-row items-center">
          {/* Download icon would go here */}
          <Text className="text-white ml-1">Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DocumentRow;
