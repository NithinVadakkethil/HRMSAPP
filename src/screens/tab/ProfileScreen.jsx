import { View, ActivityIndicator, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CustomHeader } from '../../components';
import ProfileTopTabs from '../profile/ProfileTopTabs';
import { getUserProfile } from '../../api/apiService';

const ProfileScreen = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfileData(data);
      } catch (err) {
        setError('Failed to fetch profile data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{error}</Text>
      </View>
    );
  }

  console.log("profileData--->", profileData)

  return (
    <View className='flex-1'>
      <CustomHeader 
        title="Employee Profile" 
        logo={false} 
      />
      <ProfileTopTabs profileData={profileData} />
    </View>
  );
}

export default ProfileScreen