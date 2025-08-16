import { View, Text } from 'react-native'
import React from 'react'
import { OnboardingChecklist, ProfileSection } from '../../components'

const Offboard = () => {
  return (
    <>
      <View className='px-4 pt-4'>
        <ProfileSection subDetails={false} />
      </View>
      <OnboardingChecklist title={"Offboarding"}/>
    </>
  )
}

export default Offboard