import React from 'react';
import { View, ScrollView } from 'react-native';
import EventsHeader from './EventsHeader';
import EventItem from './EventItem';

const UpcomingAnniversary = () => {
  const events = [
    {
      id: 1,
      imageUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/11dc90a53fe8384f61b15bc419f2678f10b22a5c?placeholderIfAbsent=true",
      name: "Mohammed Inshad",
      eventType: "Birthday",
      yearsInfo: null
    },
    {
      id: 2,
      imageUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/8ee91f052993d9b04c74cd6aa150a6968e25da58?placeholderIfAbsent=true",
      name: "Mohammed Inshad",
      eventType: "Anniversary",
      yearsInfo: "5 years"
    },
    {
      id: 3,
      imageUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/18f405721eddf24389f413a05fe3a602369560ce?placeholderIfAbsent=true",
      name: "Mohammed Inshad",
      eventType: "Birthday",
      yearsInfo: null
    },
    {
      id: 4,
      imageUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/26c27ecbdf60764f0f265bc41d19f15823abe602?placeholderIfAbsent=true",
      name: "Mohammed Inshad",
      eventType: "Anniversary",
      yearsInfo: "5 years"
    }
  ];

  const handleSeeAllPress = () => {
    // Handle see all navigation
    console.log('See all pressed');
  };

  return (
    <View className="bg-[#FFF] p-4">
      <EventsHeader
        title="Upcoming Birthday / anniversary"
        onSeeAllPress={handleSeeAllPress}
      />
      <View className="space-y-2">
        {events.map((event) => (
          <EventItem
            key={event.id}
            imageUri={event.imageUri}
            name={event.name}
            eventType={event.eventType}
            yearsInfo={event.yearsInfo}
          />
        ))}
      </View>
    </View>
  );
};

export default UpcomingAnniversary;
