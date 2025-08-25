import React from 'react';
import { View, Text } from 'react-native';
import ExperienceItem from '../experience/ExperienceItem'; // Reusing this component

const EducationQualification = ({ educationQualification }) => {
  const qualifications = [
    {
      company: "Bachelor of Business Administration",
      position: "Indira Gandhi National Open University",
      dateRange: "2017 - 2020"
    }
  ];

  return (
    <View className="bg-white p-4 shadow-sm border border-gray-200 mt-4">
      <Text className="text-base font-bold text-gray-900 mb-4">Education Qualification</Text>
      <View>
        {/* {educationQualification.map((qualification, index) => (
          <ExperienceItem
            key={index}
            company={qualification.company}
            position={qualification.position}
            dateRange={qualification.dateRange}
          />
        ))} */}
        <ExperienceItem
          key={1}
          company={educationQualification}
        />
      </View>
    </View>
  );
};

export default EducationQualification;
