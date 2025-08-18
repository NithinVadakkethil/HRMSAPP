import React from 'react'
import { OnboardingChecklist, ProfileSection } from '../../components'

const Onboard = () => {
  return (
    <>
      <ProfileSection subDetails={false} />
      <OnboardingChecklist title={"Onboarding"}/>
    </>
  )
}

export default Onboard