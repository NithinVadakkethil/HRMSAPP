// import React from 'react';
// import { View, Text } from 'react-native';
// import { ImageViewer } from '../../assets';

// const DocumentViewer = () => {
//   return (
//     <View className="bg-[#F1F5F9] border border-dashed border-gray-400 rounded-lg p-8 items-center justify-center h-48 my-4">
//       {/* Placeholder for an icon */}
//       <ImageViewer/>
//       <Text className="text-lg font-bold text-gray-700 pt-2">Document Viewer</Text>
//       <Text className="text-sm text-gray-500 text-center mt-1">
//         PDF Document will be viewed here while clicking the view botton of a document
//       </Text>
//     </View>
//   );
// };

// export default DocumentViewer;

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CloseIcon } from '../../assets';

const DocumentViewer = ({ document, onClose }) => {
  if (!document) {
    return (
      <View className="bg-[#F1F5F9] border border-dashed border-gray-400 rounded-lg p-8 items-center justify-center h-48 my-4">
        <Text className="text-lg font-bold text-gray-700 pt-2">Document Viewer</Text>
        <Text className="text-sm text-gray-500 text-center mt-1">
          PDF or Image will be viewed here when you click the view button of a document
        </Text>
      </View>
    );
  }

  return (
    <View className="bg-[#F1F5F9] border border-gray-400 rounded-lg p-4 items-center justify-center h-96 my-4 relative">
      <TouchableOpacity 
        className="absolute top-2 right-2 z-10 bg-gray-200 rounded-full p-1"
        onPress={onClose}
      >
        <CloseIcon width={24} height={24} fill="#000" />
      </TouchableOpacity>
      
      {document.fileType === 'pdf' ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-bold text-gray-700">PDF Document</Text>
          <Text className="text-sm text-gray-500 mt-2">{document.fileName}</Text>
          <Text className="text-sm text-gray-500 mt-4">Preview not available</Text>
        </View>
      ) : (
        <Image
          source={{ uri: document.fileUrl }}
          className="w-full h-full rounded-lg"
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default DocumentViewer;
