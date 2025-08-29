import { View, ScrollView, Text } from 'react-native'
import React from 'react'
import { ProfileSection, HeaderText, CustomTable, StatusBadge } from '../../components'
import { formatDate } from '../../common'

const Access = ({profileData}) => {
  const columns = [
    {
      header: 'Access software',
      key: 'name',
      width: 170,
    },
    {
      header: 'User Name',
      key: 'username',
      width: 170,
    },
    {
      header: 'Password',
      key: 'password',
      width: 100,
    },
    {
      header: 'Date',
      key: 'date',
      width: 100,
      render: (row) => <Text className="text-sm text-gray-900">
      {formatDate(row.date)}
    </Text>
    },
    {
      header: 'Status',
      key: 'status',
      width: 120,
      render: (row) => <StatusBadge status={row.status} />
    },
    {
      header: 'Url',
      key: 'url',
      width: 170,
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
          title="Software Access"
          columns={columns}
          data={profileData?.Software_Access}
          onRowPress={handleRowPress}
        // containerStyle="mt-4"
        />
      </View>
    </ScrollView>
  )
}

export default Access