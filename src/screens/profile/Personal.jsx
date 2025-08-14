import { View, ScrollView } from 'react-native'
import React from 'react'
import { PersonalInformationCard, KYCDocuments, ExperienceDetails, BankDetailsCard } from '../../components'

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
    </ScrollView>
  )
}

export default Personal