import { View, ActivityIndicator, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CustomHeader, Anniversary } from '../../../components';
import ProfileTopTabs from '../../profile/JnrManager/ProfileTopTabs';
import { getUserProfile, getEmployeeDetails } from '../../../api/apiService';

const JnrProfileScreen = ({ route }) => {
  const id = route?.params?.id ?? null; // safer way to read id
  const [anniversaryPopUp, setAnniversaryPopUp] = useState(false)
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile();
        if (data?.work_anniversary_message) {
          setAnniversaryPopUp(true)
        }
        setProfileData(data);
      } catch (err) {
        setError('Failed to fetch profile data.');
      } finally {
        setLoading(false);
      }
    };

    const fetchEmployeeProfile = async (id) => {
      try {
        const data = await getEmployeeDetails(id);
        setProfileData(data);
      } catch (err) {
        setError('Failed to fetch profile data.');
      } finally {
        setLoading(false);
      }
    };

    if(id){
      fetchEmployeeProfile(id)
    } else {
      fetchUserProfile();
    }
  }, [id]);

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
        title={id ? "Employee Profile" : "Junior Manager Profile"}
        logo={false}
      />
      <ProfileTopTabs profileData={profileData} />
      <Anniversary onClose={() => setAnniversaryPopUp(false)} visible={anniversaryPopUp} />
    </View>
  );
}

export default JnrProfileScreen

