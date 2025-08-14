import React from 'react';
import { View } from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileSection from './ProfileSection';
import DetailsSection from '../../Common/DetailsSection';

const PersonalInformationCard = () => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <ProfileHeader />
      <ProfileSection subDetails={true}/>
      <DetailsSection
        title="Contact Details"
        details={[
          { label: "Phone Number", value: "+919995200745" },
          { label: "Email", value: "Inshad.sale@swa.com" },
          { label: "Address", value: "Kottakunnan House\nPO morayur,\n673642,\nMalappuram, Kerala" },
          { label: "Emergency Contact", value: "+91 9996508000" },
        ]}
      />
    </View>
  );
};

export default PersonalInformationCard;
