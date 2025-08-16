import React from 'react';
import { View, Text } from 'react-native';

const DocumentViewer = () => {
  return (
    <View className="bg-gray-100 border border-dashed border-gray-400 rounded-lg p-8 items-center justify-center h-48 my-4">
      {/* Placeholder for an icon */}
      <View className="w-16 h-16 bg-gray-300 rounded-full mb-4" />
      <Text className="text-lg font-bold text-gray-700">Document Viewer</Text>
      <Text className="text-sm text-gray-500 text-center mt-1">
        PDF Document will be viewed here while clicking the view botton of a document
      </Text>
    </View>
  );
};

export default DocumentViewer;
