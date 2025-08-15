import React from 'react';
import { View, Text } from 'react-native';
import ExperienceItem from '../experience/ExperienceItem'; // Reusing this component

const EducationQualification = () => {
  const qualifications = [
    {
      company: "Bachelor of Business Administration",
      position: "Indira Gandhi National Open University",
      dateRange: "2017 - 2020"
    }
  ];

  return (
    <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 m-4">
      <Text className="text-base font-bold text-gray-900 mb-4">Education Qualification</Text>
      <View>
        {qualifications.map((qualification, index) => (
          <ExperienceItem
            key={index}
            company={qualification.company}
            position={qualification.position}
            dateRange={qualification.dateRange}
          />
        ))}
      </View>
    </View>
  );
};

export default EducationQualification;
