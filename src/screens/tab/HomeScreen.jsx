import { View, Text } from 'react-native'
import React from 'react'
import { CustomHeader } from '../../components'

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-gray-100">
        <CustomHeader 
        title="Dashboard"
        showNotificationButton={true}
        showBackButton={true}
      />
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen