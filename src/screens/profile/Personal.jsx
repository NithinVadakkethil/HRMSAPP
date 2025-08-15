import { View, ScrollView } from 'react-native'
import React from 'react'
import { PersonalInformationCard, KYCDocuments, ExperienceDetails, BankDetailsCard, EducationQualification, Credentials } from '../../components'

const Personal = () => {
  return (
    <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
      <PersonalInformationCard/>
      <KYCDocuments/>
      <ExperienceDetails/>
      <BankDetailsCard/>
      <EducationQualification/>
      <Credentials/>
    </ScrollView>
  )
}

export default Personal