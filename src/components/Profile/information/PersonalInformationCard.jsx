import React from 'react';
import { View } from 'react-native';
import ProfileSection from './ProfileSection';
import DetailsSection from '../../Common/DetailsSection';

const PersonalInformationCard = ({ personalInfo }) => {
  const details = [
    { label: "Phone Number", value: personalInfo?.phone_number },
    { label: "Email", value: personalInfo?.email },
    { label: "Address", value: personalInfo?.address },
    { label: "Emergency Contact", value: personalInfo?.emergency_contact },
  ];

  return (
    <View className="bg-white shadow-sm border border-gray-200 ">
      <ProfileSection subDetails={true} personalInfo={personalInfo} />
      <DetailsSection details={details} />
      {/* Note: Downward arrow icon was not found in assets, skipping for now. */}
    </View>
  );
};

export default PersonalInformationCard;
