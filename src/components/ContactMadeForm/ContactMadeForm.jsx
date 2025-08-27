import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createContact } from '../../api/apiService';

const ContactMadeForm = ({ visible, onClose, onSubmit }) => {
  const [clientName, setClientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('Interested');
  const [status, setStatus] = useState('Pending');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Response dropdown options
  const responseOptions = [
    { label: 'Interested', value: 'Interested' },
    { label: 'Not Interested', value: 'Not Interested' },
    { label: 'Follow Up', value: 'Follow Up' },
  ];

  // Status dropdown options
  const statusOptions = [
    { label: 'Pending', value: 'Pending' },
    { label: 'Completed', value: 'Completed' },
    { label: 'In Progress', value: 'In Progress' },
  ];

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[+]?[\d\s\-\(\)]{10,15}$/;
    return mobileRegex.test(mobile);
  };

  const handleSubmit = async () => {
    // Validate form
    if (!clientName.trim()) {
      Alert.alert('Validation Error', 'Please enter client name');
      return;
    }

    if (!mobileNumber.trim()) {
      Alert.alert('Validation Error', 'Please enter mobile number');
      return;
    }

    if (!validateMobile(mobileNumber)) {
      Alert.alert('Validation Error', 'Please enter a valid mobile number');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Validation Error', 'Please enter email address');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare contact data to match API expectations
      const contactData = {
        clientname: clientName.trim(),
        mobilenumber: mobileNumber.trim(),
        email: email.trim(),
        response: response,
        status: status,
      };

      console.log('Contact data to submit:', contactData);

      // Call the API
      const apiResponse = await createContact(contactData);
      
      console.log('Contact created successfully:', apiResponse);

      // Show success message
      Alert.alert('Success', 'Contact created successfully', [
        {
          text: 'OK',
          onPress: () => {
            // Notify parent component
            if (onSubmit) {
              onSubmit(apiResponse);
            }
            
            // Reset form and close
            resetForm();
            onClose();
          }
        }
      ]);

    } catch (error) {
      console.error('Error creating contact:', error);
      
      // Show detailed error message
      let errorMessage = 'Failed to create contact. Please try again.';
      if (error.response?.data) {
        errorMessage = JSON.stringify(error.response.data);
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      Alert.alert('Submission Error', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setClientName('');
    setMobileNumber('');
    setEmail('');
    setResponse('Interested');
    setStatus('Pending');
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          maxHeight: '90%',
          minHeight: '70%'
        }}>
          {/* Header */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#E5E7EB'
          }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#374151' }}>
              Sales Executive Details
            </Text>
            <TouchableOpacity onPress={handleCancel} style={{ padding: 4 }}>
              <Text style={{ fontSize: 20, color: '#6B7280' }}>×</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={{ flex: 1, padding: 16 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {/* Date and Time - Auto-generated (read-only) */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Date and Time
              </Text>
              <View style={{
                borderWidth: 1,
                borderColor: '#D1D5DB',
                borderRadius: 8,
                padding: 12,
                backgroundColor: '#F9FAFB'
              }}>
                <Text style={{ color: '#6B7280' }}>
                  {new Date().toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </Text>
              </View>
            </View>

            {/* Client Name */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Client Name*
              </Text>
              <TextInput
                value={clientName}
                onChangeText={setClientName}
                placeholder="Enter client name"
                placeholderTextColor="#9CA3AF"
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D5DB',
                  borderRadius: 8,
                  padding: 12,
                  backgroundColor: 'white',
                  color: '#374151',
                  fontSize: 16,
                }}
              />
            </View>

            {/* Mobile Number */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Mobile*
              </Text>
              <TextInput
                value={mobileNumber}
                onChangeText={setMobileNumber}
                placeholder="Enter mobile number"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D5DB',
                  borderRadius: 8,
                  padding: 12,
                  backgroundColor: 'white',
                  color: '#374151',
                  fontSize: 16,
                }}
              />
            </View>

            {/* Email */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Email*
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email address"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D5DB',
                  borderRadius: 8,
                  padding: 12,
                  backgroundColor: 'white',
                  color: '#374151',
                  fontSize: 16,
                }}
              />
            </View>

            {/* Response */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Response*
              </Text>
              <View style={{
                borderWidth: 1,
                borderColor: '#D1D5DB',
                borderRadius: 8,
                backgroundColor: 'white'
              }}>
                <Picker
                  selectedValue={response}
                  onValueChange={(itemValue) => setResponse(itemValue)}
                  style={{ height: 50 }}
                >
                  {responseOptions.map((option) => (
                    <Picker.Item 
                      key={option.value} 
                      label={option.label} 
                      value={option.value} 
                    />
                  ))}
                </Picker>
              </View>
            </View>

            {/* Status */}
            <View style={{ marginBottom: 24 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Status*
              </Text>
              <View style={{
                borderWidth: 1,
                borderColor: '#D1D5DB',
                borderRadius: 8,
                backgroundColor: 'white'
              }}>
                <Picker
                  selectedValue={status}
                  onValueChange={(itemValue) => setStatus(itemValue)}
                  style={{ height: 50 }}
                >
                  {statusOptions.map((option) => (
                    <Picker.Item 
                      key={option.value} 
                      label={option.label} 
                      value={option.value} 
                    />
                  ))}
                </Picker>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity
                onPress={handleCancel}
                style={{
                  flex: 1,
                  backgroundColor: '#F3F4F6',
                  borderRadius: 8,
                  paddingVertical: 16,
                  alignItems: 'center',
                }}
                activeOpacity={0.8}
              >
                <Text style={{ color: '#374151', fontWeight: '600', fontSize: 16 }}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSubmit}
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  backgroundColor: isSubmitting ? '#9CA3AF' : '#1F2937',
                  borderRadius: 8,
                  paddingVertical: 16,
                  alignItems: 'center',
                }}
                activeOpacity={0.8}
              >
                <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
                  {isSubmitting ? 'Creating...' : 'Create'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default ContactMadeForm;