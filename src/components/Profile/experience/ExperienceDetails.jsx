import React from 'react';
import { View, Text } from 'react-native';
import ExperienceItem from './ExperienceItem';

const ExperienceDetails = ({experienceDetails}) => {
  const experiences = [
    {
      company: "Malabar Gold and Diamonds",
      position: "Manager",
      dateRange: "2014 - 2016"
    },
    {
      company: "Atlas Jewllery",
      position: "Exicutive Manager",
      dateRange: "2012 - 2014"
    },
    {
      company: "Bachelor of Business Administration",
      position: "Indira Gandhi National Open University",
      dateRange: "2017 -2020"
    }
  ];

  return (
    <View className="bg-white p-4 shadow-sm border border-gray-200 mt-4">
      <Text className="text-base font-bold text-gray-900 mb-4">Experience Details</Text>
      <View>
        {experienceDetails.map((experience, index) => (
          <ExperienceItem
            key={index}
            company={experience.company}
            position={experience.position}
            dateRange={experience.dateRange}
          />
        ))}
      </View>
    </View>
  );
};

export default ExperienceDetails;
