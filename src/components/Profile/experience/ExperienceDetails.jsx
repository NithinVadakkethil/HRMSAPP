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
    }
  ];

  return (
    <View className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 m-4">
      <Text className="text-base font-bold text-gray-900 mb-4">Experience Details</Text>
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
