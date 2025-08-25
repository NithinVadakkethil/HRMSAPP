import { ScrollView } from 'react-native'
import React from 'react'
import { PersonalInformationCard, KYCDocuments, ExperienceDetails, BankDetailsCard, EducationQualification, Credentials } from '../../components'

const Personal = ({ profileData }) => {
  return (
    <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
      <PersonalInformationCard personalInfo={profileData?.PersonalInfo} />
      <KYCDocuments kycDocuments={profileData?.Documents} />
      <ExperienceDetails experienceDetails={profileData?.ExperienceDetails} />
      <BankDetailsCard bankDetails={profileData?.BankDetails} />
      <EducationQualification educationQualification={profileData?.EducationQualification} />
      <Credentials credentials={profileData?.LoginCredentials} />
    </ScrollView>
  )
}

export default Personal