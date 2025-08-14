import React from 'react';
import { View, Text } from 'react-native';
import DocumentItem from './DocumentItem';

const KYCDocuments = () => {
  const documents = [
    {
      title: 'Adhaar Card',
      imageUri: 'https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/7d70ae14ee38476c43ce751e4e50bef314113d18?placeholderIfAbsent=true',
      numberLabel: 'Adhaar Number',
      numberValue: '3454 9888 7654'
    },
    {
      title: 'Pan card',
      imageUri: 'https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/8206ab34459aec1e3f3aaf78b4c055333544dd82?placeholderIfAbsent=true',
      numberLabel: 'Pan Number',
      numberValue: 'HLJPM6533O'
    },
    {
      title: 'Passport',
      imageUri: 'https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/36ff46ccb60ee4023bfe19810c0608aba85c228c?placeholderIfAbsent=true',
      numberLabel: 'Passport Number',
      numberValue: 'GFR87643576'
    }
  ];

  return (
    <View className="p-6 bg-white">
      <View className="mb-8">
        <Text className="text-2xl font-bold text-gray-900">KYC Documents</Text>
      </View>
      <View className="space-y-6">
        {documents.map((document, index) => (
          <DocumentItem
            key={index}
            title={document.title}
            imageUri={document.imageUri}
            numberLabel={document.numberLabel}
            numberValue={document.numberValue}
          />
        ))}
      </View>
    </View>
  );
};

export default KYCDocuments;