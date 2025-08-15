import React from 'react';
import { View } from 'react-native';
import ProfileSection from './ProfileSection';
import DetailsSection from '../../Common/DetailsSection';

const PersonalInformationCard = () => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 m-4">
      <ProfileSection subDetails={true}/>
      <DetailsSection
        details={[
          { label: "Phone Number", value: "+919995200745" },
          { label: "Email", value: "inshad.sale@swa.com" },
          { label: "Address", value: "Kottakunnan House PO morayur, 673642, Malappuram, Kerala" },
          { label: "Emergency Contact", value: "+91 9996508000" },
        ]}
      />
      {/* Note: Downward arrow icon was not found in assets, skipping for now. */}
    </View>
  );
};

export default PersonalInformationCard;
