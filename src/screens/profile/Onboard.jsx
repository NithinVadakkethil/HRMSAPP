import React from 'react'
import { OnboardingChecklist, ProfileSection } from '../../components'

const Onboard = ({profileData}) => {
  return (
    <>
      <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo}/>
      <OnboardingChecklist title={"Onboarding"} info={profileData.onboarding}/>
    </>
  )
}

export default Onboard