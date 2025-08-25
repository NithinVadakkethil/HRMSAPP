// import React from 'react';
// import { ScrollView, View } from 'react-native';
// import { DocumentViewer, DocumentRow, ProfileSection } from '../../components';

// const Document = ({ profileData }) => {
//   const documents = [
//     {
//       sectionTitle: 'HR Documentation',
//       fileName: 'Mohmammed Inshad Resume.pdf',
//       fileType: 'pdf',
//     },
//     {
//       sectionTitle: 'Adhaar card',
//       fileName: 'Adhaar card.JPG',
//       fileType: 'jpg',
//     },
//     {
//       sectionTitle: 'Pan card',
//       fileName: 'Pancard.JPG',
//       fileType: 'jpg',
//     },
//     {
//       sectionTitle: 'Signned contract',
//       fileName: 'Mohmammed Inshadsign...pdf',
//       fileType: 'pdf',
//     },
//   ];

//   return (
//     <>
//       <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo} />
//       <View className='px-4 bg-[#FFF]'>
//         <DocumentViewer />
//         {documents.map((doc, index) => (
//           <DocumentRow
//             key={index}
//             sectionTitle={doc.sectionTitle}
//             fileName={doc.fileName}
//             fileType={doc.fileType}
//           />
//         ))}
//       </View>
//     </>
//   );
// };

// export default Document;

import React, { useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { DocumentViewer, DocumentRow, ProfileSection } from '../../components';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-blob-util';

const Document = ({ profileData }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // API response data
  const apiResponse = {
    "adaar_file": "https://swahrmanagerapi.zinfog.in/media/adhaar.jpg",
    "adaar_no": "111122223333",
    "pancard_file": "https://swahrmanagerapi.zinfog.in/media/pancard.jpeg",
    "pancard_no": "panxp2023y",
    "passport_file": "https://swahrmanagerapi.zinfog.in/media/passbook.jpeg",
    "passport_no": "1234595"
  };

  // Transform API response to match our document structure
  const documents = [
    {
      sectionTitle: 'Aadhaar Card',
      fileName: 'Aadhaar Card.jpg',
      fileType: 'jpg',
      fileUrl: apiResponse.adaar_file,
      idNumber: apiResponse.adaar_no
    },
    {
      sectionTitle: 'PAN Card',
      fileName: 'PAN Card.jpeg',
      fileType: 'jpeg',
      fileUrl: apiResponse.pancard_file,
      idNumber: apiResponse.pancard_no
    },
    {
      sectionTitle: 'Passport',
      fileName: 'Passport.jpeg',
      fileType: 'jpeg',
      fileUrl: apiResponse.passport_file,
      idNumber: apiResponse.passport_no
    }
  ];

  const handleViewDocument = (doc, index) => {
    setSelectedDocument(doc);
    setSelectedIndex(index);
  };

  const handleCloseViewer = () => {
    setSelectedDocument(null);
    setSelectedIndex(null);
  };

  const handleDownload = async (doc) => {
    try {
      const { config, fs } = RNFetchBlob;
      const date = new Date();
      const fileDir = fs.dirs.DownloadDir;
      const extension = doc.fileType;
      const fileName = `${doc.sectionTitle.replace(/\s+/g, '_')}_${date.getTime()}.${extension}`;
      const path = `${fileDir}/${fileName}`;

      const options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: path,
          description: 'Downloading document'
        }
      };

      config(options)
        .fetch('GET', doc.fileUrl)
        .then((res) => {
          Alert.alert('Success', `File downloaded to ${res.path()}`);
        })
        .catch((error) => {
          Alert.alert('Error', 'Failed to download file');
          console.error(error);
        });
    } catch (error) {
      Alert.alert('Error', 'Failed to download file');
      console.error(error);
    }
  };

  return (
    <>
      <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo} />
      <View className='px-4 bg-[#FFF]'>
        <DocumentViewer 
          document={selectedDocument} 
          onClose={handleCloseViewer}
        />
        {documents.map((doc, index) => (
          <DocumentRow
            key={index}
            sectionTitle={doc.sectionTitle}
            fileName={doc.fileName}
            fileType={doc.fileType}
            idNumber={doc.idNumber}
            isSelected={selectedIndex === index}
            onView={() => handleViewDocument(doc, index)}
            onDownload={() => handleDownload(doc)}
          />
        ))}
      </View>
    </>
  );
};

export default Document;