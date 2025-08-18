import { View, ScrollView } from 'react-native'
import React from 'react'
import { ProfileSection, HeaderText, CustomTable, StatusBadge } from '../../components'

const Access = () => {
  const columns = [
    {
      header: 'Access software',
      key: 'accessSoftware',
      width: 170,
    },
    {
      header: 'User Name',
      key: 'userName',
      width: 160,
    },
    {
      header: 'Password',
      key: 'password',
      width: 90,
    },
    {
      header: 'Date',
      key: 'date',
      width: 100,
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

  const accessData = [
    {
      accessSoftware: 'SWA DMS',
      userName: 'Inshad-12',
      password: '**********',
      date: '25 Aug 2024',
      status: 'Access Granded',
      url: 'https://hrmstest.zinfog.in/',
    },
    {
      accessSoftware: 'SWA DMS',
      userName: 'Inshad-12',
      password: '**********',
      date: '25 Aug 2024',
      status: 'Access Granded',
      url: 'https://hrmstest.zinfog.in/',
    },
    {
      accessSoftware: 'SWA Notification Manager',
      userName: 'Inshad-12',
      password: '**********',
      date: '25 Aug 2024',
      status: 'Access Granded',
      url: 'https://hrmstest.zinfog.in/',
    },
    {
      accessSoftware: 'SWA DMS',
      userName: 'Inshad-12',
      password: '**********',
      date: '25 Aug 2024',
      status: 'Access Granded',
      url: 'https://hrmstest.zinfog.in/',
    },
  ];
  const handleRowPress = (row) => {
    console.log('Row pressed:', row);
    // Handle row press action here
  };

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <ProfileSection subDetails={false} />
      <View className='bg-[#FFF]'>
        <CustomTable
          title="Software Access"
          columns={columns}
          data={accessData}
          onRowPress={handleRowPress}
        // containerStyle="mt-4"
        />
      </View>
    </ScrollView>
  )
}

export default Access