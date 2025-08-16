import { View, Text } from 'react-native'
import React from 'react'
import { OnboardingChecklist, ProfileSection } from '../../components'

const Onboard = () => {
  return (
    <>
      <View className='px-4 pt-4'>
        <ProfileSection subDetails={false} />
      </View>
      <OnboardingChecklist title={"Onboarding"}/>
    </>
  )
}

export default Onboard