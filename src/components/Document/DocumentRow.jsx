import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Pdf, ImageAvatar, Download, Eye } from '../../assets';

const DocumentRow = ({ 
  sectionTitle, 
  fileName, 
  fileType, 
  idNumber, 
  isSelected, 
  onView, 
  onDownload 
}) => {
  const isPdf = fileType === 'pdf';

  return (
    <View className={`mb-6 rounded-lg ${isSelected ? 'bg-blue-50 border border-blue-300' : 'bg-white'}`}>
      <Text className="text-lg font-bold text-gray-800 mb-2">{sectionTitle}</Text>
      {idNumber && (
        <Text className="text-sm text-gray-600 mb-2">ID: {idNumber}</Text>
      )}

      {/* File Name Container */}
      <View className="gap-2 border border-gray-300 rounded-lg p-4 flex-row items-center">
        {isPdf ? <Pdf /> : <ImageAvatar />}
        <Text className="text-gray-800 flex-1">{fileName}</Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row justify-end gap-2 mt-2">
        <TouchableOpacity 
          className="border border-gray-300 rounded-md py-2 px-3 flex-row items-center"
          onPress={onView}
        >
          <Eye />
          <Text className="text-gray-700 ml-1">View</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          className="bg-[#023247] rounded-md py-2 px-4 flex-row items-center"
          onPress={onDownload}
        >
          <Download />
          <Text className="text-white ml-1">Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DocumentRow;
