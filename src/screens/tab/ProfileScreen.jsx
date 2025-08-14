import { View } from 'react-native'
import React from 'react'
import { CustomHeader } from '../../components';
import ProfileTopTabs from '../profile/ProfileTopTabs';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader 
        title="Employee Profile" 
        logo={false} 
      />
      <ProfileTopTabs />
    </View>
  );
}

export default ProfileScreen