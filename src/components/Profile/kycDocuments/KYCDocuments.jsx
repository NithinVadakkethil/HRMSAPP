import React from 'react';
import { View, Text } from 'react-native';
import DocumentItem from './DocumentItem';

const KYCDocuments = ({kycDocuments}) => {
  const documents = [
    {
      title: 'Adhaar Card',
      imageUri: kycDocuments?.adaar_file || 'https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/7d70ae14ee38476c43ce751e4e50bef314113d18?placeholderIfAbsent=true',
      numberLabel: 'Adhaar Number',
      numberValue: kycDocuments?.adaar_no
    },
    {
      title: 'Pan card',
      imageUri: kycDocuments?.pancard_file || 'https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/8206ab34459aec1e3f3aaf78b4c055333544dd82?placeholderIfAbsent=true',
      numberLabel: 'Pan Number',
      numberValue: kycDocuments?.pancard_no
    },
    {
      title: 'Passport',
      imageUri: kycDocuments?.passport_file || 'https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/36ff46ccb60ee4023bfe19810c0608aba85c228c?placeholderIfAbsent=true',
      numberLabel: 'Passport Number',
      numberValue: kycDocuments?.passport_no
    }
  ];

  return (
    <View className="bg-white p-4 shadow-sm border border-gray-200 mt-4">
      <Text className="text-base font-bold text-gray-900 mb-4">KYC Documents</Text>
      <View className="space-y-4">
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