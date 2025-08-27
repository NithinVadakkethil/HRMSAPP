import React, { useState } from 'react';
import { ScrollView, View, Text, Alert, Platform, PermissionsAndroid } from 'react-native';
import { DocumentViewer, DocumentRow, ProfileSection } from '../../components';
import RNFetchBlob from 'react-native-blob-util';

const Document = ({ profileData }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const apiResponse = profileData?.Documents;

  // Transform API response to match our document structure and filter out null/empty documents
  const allDocuments = [
    {
      sectionTitle: 'Aadhaar Card',
      fileName: 'Aadhaar Card.jpg',
      fileType: 'jpg',
      fileUrl: apiResponse?.adaar_file,
      idNumber: apiResponse?.adaar_no
    },
    {
      sectionTitle: 'PAN Card',
      fileName: 'PAN Card.jpeg',
      fileType: 'jpeg',
      fileUrl: apiResponse?.pancard_file,
      idNumber: apiResponse?.pancard_no
    },
    {
      sectionTitle: 'Passport',
      fileName: 'Passport.jpeg',
      fileType: 'jpeg',
      fileUrl: apiResponse?.passport_file,
      idNumber: apiResponse?.passport_no
    }
  ];

  // Filter out documents that don't have a valid file URL
  const documents = allDocuments.filter(doc => {
    return doc.fileUrl && doc.fileUrl !== null && doc.fileUrl !== undefined && doc.fileUrl.trim() !== '';
  });

  const handleViewDocument = (doc, index) => {
    setSelectedDocument(doc);
    setSelectedIndex(index);
  };

  const handleCloseViewer = () => {
    setSelectedDocument(null);
    setSelectedIndex(null);
  };

  // Request storage permission for Android
  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to storage to download files',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const handleDownload = async (doc) => {
    try {
      const hasPermission = await requestStoragePermission();
      if (!hasPermission) {
        Alert.alert('Permission denied', 'Storage permission is required to download files');
        return;
      }

      const { config, fs } = RNFetchBlob;
      const date = new Date();
      
      // Define download path based on platform
      let downloadPath;
      if (Platform.OS === 'ios') {
        downloadPath = fs.dirs.DocumentDir;
      } else {
        downloadPath = fs.dirs.DownloadDir;
      }
      
      const extension = doc.fileType;
      const fileName = `${doc.sectionTitle.replace(/\s+/g, '_')}_${date.getTime()}.${extension}`;
      const path = `${downloadPath}/${fileName}`;

      const options = Platform.select({
        ios: {
          fileCache: true,
          path: path,
          appendExt: extension
        },
        android: {
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: path,
            description: 'Downloading document'
          }
        }
      });

      config(options)
        .fetch('GET', doc.fileUrl)
        .then((res) => {
          if (Platform.OS === 'ios') {
            // For iOS, we need to move the file from cache to documents
            RNFetchBlob.fs.cp(res.path(), path);
            RNFetchBlob.ios.previewDocument(res.path());
          }
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

  console.log("profileData?.Documents--->", profileData?.Documents);
  console.log("Available documents count:", documents.length);

  return (
    <>
      <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo} />
      <View className='flex-1 px-4 bg-[#FFF]'>
        <DocumentViewer 
          document={selectedDocument} 
          onClose={handleCloseViewer}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {documents.length > 0 ? (
            documents.map((doc, index) => (
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
            ))
          ) : (
            <View className="flex-1 justify-center items-center py-8">
              <Text className="text-gray-500 text-base">No documents available</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default Document;