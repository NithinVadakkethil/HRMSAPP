import { View, Text } from 'react-native'
import React from 'react'
import { OnboardingChecklist, ProfileSection } from '../../components'

const Offboard = () => {
  return (
    <>
      <ProfileSection subDetails={false} />
      <OnboardingChecklist title={"Offboarding"}/>
    </>
  )
}

export default Offboard