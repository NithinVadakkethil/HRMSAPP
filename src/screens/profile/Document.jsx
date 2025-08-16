import React from 'react';
import { ScrollView, View } from 'react-native';
import { DocumentViewer, DocumentRow } from '../../components';

const Document = () => {
  const documents = [
    {
      sectionTitle: 'HR Documentation',
      fileName: 'Mohmammed Inshad Resume.pdf',
      fileType: 'pdf',
    },
    {
      sectionTitle: 'Adhaar card',
      fileName: 'Adhaar card.JPG',
      fileType: 'jpg',
    },
    {
      sectionTitle: 'Pan card',
      fileName: 'Pancard.JPG',
      fileType: 'jpg',
    },
    {
      sectionTitle: 'Signned contract',
      fileName: 'Mohmammed Inshadsign...pdf',
      fileType: 'pdf',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <DocumentViewer />
        {documents.map((doc, index) => (
          <DocumentRow
            key={index}
            sectionTitle={doc.sectionTitle}
            fileName={doc.fileName}
            fileType={doc.fileType}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Document;