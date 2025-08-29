import { View, Text, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { OnboardingChecklist, ProfileSection } from '../../components'
import { getOffboardingList } from '../../api/apiService'

const Offboard = ({profileData}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offboardData, setOffboardData] = useState(null)

  useEffect(() => {
    const fetchOffBoardItems = async () => {
      try {
        const data = await getOffboardingList();
        setOffboardData(data);
      } catch (err) {
        setError('Failed to fetch profile data.');
      } finally {
        setLoading(false);
      }
    };

    fetchOffBoardItems();
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

  return (
    <View className='flex-1 bg-[#F9F9F9]'>
      <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo}/>
      <OnboardingChecklist title={"Offboarding"} info={offboardData}/>
    </View>
  )
}

export default Offboard