import React from 'react'
import { View } from 'react-native'
import { OnboardingChecklist, ProfileSection } from '../../../components'

const Onboard = ({profileData}) => {
  return (
    <View className='flex-1 bg-[#F9F9F9]'>
      <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo}/>
      <OnboardingChecklist title={"Onboarding"} info={profileData?.onboarding}/>
    </View>
  )
}

export default Onboard