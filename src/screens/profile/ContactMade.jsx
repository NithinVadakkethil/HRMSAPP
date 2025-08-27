import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ContactMadeForm, ProfileSection, CustomTable } from '../../components'
import { getContacts } from '../../api/apiService'
import { formatDateTime, seperatedDateTime } from '../../common'
import { Calendar } from '../../assets'

const ContactMade = ({ profileData }) => {
  const { date, time } = seperatedDateTime(new Date());
  const [showContactMadeForm, setShowContactMadeForm] = useState(false)

  const [contactData, setContactData] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define the fetch function outside useEffect so it can be called from other places
  const fetchConatctMade = async () => {
    try {
      setLoading(true);
      const data = await getContacts();
      setContactData(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch contact data.');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConatctMade();
  }, []);

  const handleContactCreated = () => {
    // Refetch contacts after successful creation
    fetchConatctMade();
    setShowContactMadeForm(false);
  };

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
        <TouchableOpacity onPress={fetchConatctMade} className="mt-4 bg-blue-500 p-2 rounded">
          <Text className="text-white">Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const columns = [
    {
      header: 'Date and Time',
      key: 'date_time',
      width: 150,
      render: (row) => <Text className="text-sm text-gray-900">
        {formatDateTime(row.date_time)}
      </Text>
    },
    {
      header: 'Client Name',
      key: 'clientname',
      width: 130,
    },
    {
      header: 'Mobile',
      key: 'mobilenumber',
      width: 120,
    },
  ];

  const RightSection = () => {
    return (
      <View className='flex-row items-center gap-2'>
        <TouchableOpacity
          className="bg-[#023247] rounded-md p-2 px-3 flex-row items-center"
          onPress={() => setShowContactMadeForm(true)}
        >
          <Text className="text-white font-inter text-[12px]">Create</Text>
        </TouchableOpacity>
        <TouchableOpacity className="gap-1 bg-[#FFFFFF] rounded-md p-2 flex-row items-center border border-[#374151]">
          <Calendar />
          <Text className="text-[#374151] font-inter text-[12px]">{date}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View className='flex-1'>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <ProfileSection subDetails={false} personalInfo={profileData?.PersonalInfo} />
        <View className='bg-[#FFF]'>
          <CustomTable
            title="Contact Made Today"
            columns={columns}
            data={contactData}
            RightSection={RightSection}
          />
        </View>
      </ScrollView>
      <ContactMadeForm
        visible={showContactMadeForm}
        onClose={() => setShowContactMadeForm(false)}
        onSubmit={handleContactCreated} // Pass the callback function
      />
    </View>
  )
}

export default ContactMade