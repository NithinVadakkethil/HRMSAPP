import React from 'react';
import { View, Text } from 'react-native';
import ExperienceItem from './ExperienceItem';

const ExperienceDetails = () => {
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
    <View className="p-4">
      <View className="mb-6">
        <Text className="text-lg font-semibold text-black">Experience Details</Text>
      </View>
      <View>
        {experiences.map((experience, index) => (
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
