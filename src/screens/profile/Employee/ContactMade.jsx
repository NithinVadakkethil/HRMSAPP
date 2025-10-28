import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ContactMadeForm, ProfileSection, CustomTable, StatusBadge } from '../../../components'
import { getContacts, deleteContact } from '../../../api/apiService'
import { formatDateTime, seperatedDateTime } from '../../../common'
import { CalendarIcon, CheckPad, Bin } from '../../../assets'

const ContactMade = ({ profileData }) => {
  const { date, time } = seperatedDateTime(new Date());
  const [showContactMadeForm, setShowContactMadeForm] = useState(false)
  const [editingContact, setEditingContact] = useState(null); // For edit mode
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
    // Refetch contacts after successful creation/update
    fetchConatctMade();
    setShowContactMadeForm(false);
    setEditingContact(null); // Reset editing state
  };

  const handleEditContact = (contact) => {
    console.log('Editing contact:', contact);
    setEditingContact(contact);
    setShowContactMadeForm(true);
  };

  const handleDeleteContact = async (contact) => {
    Alert.alert(
      'Confirm Delete',
      `Are you sure you want to delete the contact for ${contact.clientname}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              console.log('Deleting contact with ID:', contact.id);
              await deleteContact(contact.id);
              Alert.alert('Success', 'Contact deleted successfully');
              fetchConatctMade(); // Refresh the list
            } catch (error) {
              console.error('Error deleting contact:', error);
              Alert.alert('Error', 'Failed to delete contact. Please try again.');
            }
          },
        },
      ]
    );
  };

  const handleCloseForm = () => {
    setShowContactMadeForm(false);
    setEditingContact(null); // Reset editing state when closing
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

  const ActionButtons = ({ row }) => (
    <View className="flex-row gap-2">
      <TouchableOpacity
        onPress={() => handleEditContact(row)}
        className="p-1 bg-blue-100 rounded"
        activeOpacity={0.7}
      >
        <CheckPad width={16} height={16} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDeleteContact(row)}
        className="p-1 bg-red-100 rounded"
        activeOpacity={0.7}
      >
        <Bin width={16} height={16} />
      </TouchableOpacity>
    </View>
  );

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
    {
      header: 'Email',
      key: 'email',
      width: 170,
    },
    {
      header: 'Response',
      key: 'response',
      width: 100,
    },
    {
      header: 'Status',
      key: 'status',
      width: 120,
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Action',
      key: 'action',
      width: 80,
      render: (row) => <ActionButtons row={row} />,
    },
  ];

  const RightSection = () => {
    return (
      <View className='flex-row items-center gap-2'>
        <TouchableOpacity
          className="bg-[#023247] rounded-md p-2 px-3 flex-row items-center"
          onPress={() => {
            setEditingContact(null); // Ensure we're in create mode
            setShowContactMadeForm(true);
          }}
        >
          <Text className="text-white font-inter text-[12px]">Create</Text>
        </TouchableOpacity>
        <TouchableOpacity className="gap-1 bg-[#FFFFFF] rounded-md p-2 flex-row items-center border border-[#374151]">
          <CalendarIcon />
          <Text className="text-[#374151] font-inter text-[12px]">{date}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View className='flex-1 bg-[#F9F9F9]'>
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
        onClose={handleCloseForm}
        onSubmit={handleContactCreated}
        editingContact={editingContact} // Pass the contact to edit
      />
    </View>
  )
}

export default ContactMade