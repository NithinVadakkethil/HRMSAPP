import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { ProfileSection, HeaderText, CustomTable, StatusBadge } from '../../components'

const Assets = ({profileData}) => {
  const columns = [
    {
      header: 'Device',
      key: 'asset_name',
      width: 250,
      render: (row) => (
        <View className='flex-row items-center'>
          <Image 
            source={{ uri: row.asset_photo }}
            style={{ width: 24, height: 24, marginRight: 8 }}
            resizeMode="contain"
          />
          <Text className="text-sm text-gray-900">
            {row.asset_name}
          </Text>
        </View>
      )
    },
    {
      header: 'Serial Number / EMI / Registration',
      key: 'serial_no',
      width: 250,
    },
    {
      header: 'Model Number',
      key: 'model_no',
      width: 120,
    },
    {
      header: 'Attachments',
      key: 'attachment',
      width: 120,
      render: (row) => (
        <View className='flex-row items-center'>
          {/* <Image 
            source={{ uri: row.asset_photo }}
            style={{ width: 24, height: 24, marginRight: 8 }}
            resizeMode="contain"
          /> */}
          <Text className="text-sm text-gray-900">
            {row.attachment || "-Nil-"}
          </Text>
        </View>
      )
    },
    {
      header: 'Status',
      key: 'status',
      width: 120,
      render: (row) => <StatusBadge status={row.status || "Allocated"} />
    },
  ];

  const handleRowPress = (row) => {
    console.log('Row pressed:', row);
    // Handle row press action here
  };
  
  return (
    <ScrollView
      className="flex-1 bg-[#F9F9F9]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo}/>
      <View className='bg-[#FFF]'>
        <CustomTable
            title="Assets Allocated"
            columns={columns}
            data={profileData?.Assets}
            onRowPress={handleRowPress}
            // containerStyle="mt-4"
          />
      </View>
    </ScrollView>
  )
}

export default Assets