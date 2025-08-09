import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader, LeaveStats } from '../../components'

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
        <CustomHeader 
        title="Dashboard"
        showNotificationButton={true}
        showBackButton={true}
      />
      <LeaveStats/>
    </View>
  )
}

export default HomeScreen