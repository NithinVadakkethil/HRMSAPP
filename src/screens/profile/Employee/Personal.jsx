import { ScrollView, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PersonalInformationCard, KYCDocuments, ExperienceDetails, BankDetailsCard, EducationQualification, Credentials, ResignationForm } from '../../../components'

const Personal = ({ profileData }) => {
  const [showResignModal, setShowResignModal] = useState(false)

  const handleLeaveSubmit = () => {
    console.log("submitted")
  }

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="flex-row items-center justify-end p-5">
          <TouchableOpacity
            className={`${profileData?.Resignation[0]?.status === "Pending" ? 'bg-[#F97316]' : profileData?.Resignation[0]?.status === "Approved" ? 'bg-[#22C55E]' : 'bg-[#007583]'} rounded-md items-center justify-center py-2 px-4`}
            onPress={() => setShowResignModal(true)}
            activeOpacity={0.5}
            disabled={profileData?.Resignation[0]?.status === "Pending" || profileData?.Resignation[0]?.status === "Approved"}
          >
            {profileData?.Resignation[0]?.status === "Pending" ? <Text className="text-[#FFF] font-inter text-[12px]">
              Pending
            </Text> : profileData?.Resignation[0]?.status === "Approved" ? <Text className="text-[#FFF] font-inter text-[12px]">
              Approved
            </Text> : <Text className="text-[#FFF] font-inter text-[12px]">
              Resignation
            </Text>}
          </TouchableOpacity>
        </View>
        <PersonalInformationCard personalInfo={profileData?.PersonalInfo} />
        <KYCDocuments kycDocuments={profileData?.Documents} />
        <ExperienceDetails experienceDetails={profileData?.ExperienceDetails} />
        <BankDetailsCard bankDetails={profileData?.BankDetails} />
        <EducationQualification educationQualification={profileData?.EducationQualification} />
        <Credentials credentials={profileData?.LoginCredentials} />
      </ScrollView>
      <ResignationForm
        visible={showResignModal}
        onClose={() => setShowResignModal(false)}
        onSubmit={handleLeaveSubmit}
      />
    </View>
  )
}

export default Personal