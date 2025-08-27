import React, { useState } from 'react';
import { View, Text, Modal, ScrollView, Alert, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePickerField from './DatePickerField';
import TextAreaField from './TextAreaField';
import ActionButtons from './ActionButtons';
import { formatDate } from '../../common';
import { createResignation } from '../../api/apiService';
import { Close } from '../../assets';

const ResignationForm = ({ visible, onClose, onSubmit }) => {
  const [resignationDate, setResignationDate] = useState(new Date());
  const [lastWorkingDay, setLastWorkingDay] = useState(new Date());
  const [showResignationDatePicker, setShowResignationDatePicker] = useState(false);
  const [showLastWorkingDayPicker, setShowLastWorkingDayPicker] = useState(false);
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResignationDatePress = () => {
    setShowResignationDatePicker(true);
  };

  const handleLastWorkingDayPress = () => {
    setShowLastWorkingDayPicker(true);
  };

  const handleCancel = () => {
    // Reset form state
    setResignationDate(new Date());
    setLastWorkingDay(new Date());
    setReason('');
    onClose();
  };

  const handleSubmit = async () => {
    // Validate form
    if (!resignationDate || !lastWorkingDay || !reason.trim()) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }

    if (lastWorkingDay <= resignationDate) {
      Alert.alert('Error', 'Last working day must be after resignation date');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format dates to YYYY-MM-DD
      const formattedResignationDate = formatDateForAPI(resignationDate);
      const formattedLastWorkingDate = formatDateForAPI(lastWorkingDay);
      
      // Prepare request data
      const resignationData = {
        resignation_date: formattedResignationDate,
        last_working_date: formattedLastWorkingDate,
        reason: reason.trim()
      };
      
      // Call API
      const response = await createResignation(resignationData);
      
      // Notify parent component
      if (onSubmit) {
        onSubmit(response);
      }
      
      // Show success message
      Alert.alert('Success', 'Resignation submitted successfully');
      
      // Reset form and close
      setResignationDate(new Date());
      setLastWorkingDay(new Date());
      setReason('');
      onClose();
    } catch (error) {
      console.error('Error submitting resignation:', error);
      Alert.alert('Error', 'Failed to submit resignation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to format date as YYYY-MM-DD
  const formatDateForAPI = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.74)' }}>
        <View style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          maxHeight: '90%',
          minHeight: '60%'
        }}>

      <ScrollView className="flex-1">
          {/* Header */}
          <View className="pt-10 relative flex-row items-center justify-center">
            <Text className="text-xl font-inter-semibold text-[#0F172A] text-center">
              Create New Resignation
            </Text>
            <TouchableOpacity onPress={handleCancel} className="absolute right-8 top-10">
              <Close/>
            </TouchableOpacity>
          </View>

          {/* Form Content */}
          <View className="bg-white rounded-lg p-6 shadow-sm">
            {/* Date Fields Row */}
            <View className="flex-row gap-4 mb-6">
              <View className="flex-1">
                <DatePickerField
                  label="Resignation Date*"
                  value={formatDate(resignationDate)}
                  onPress={handleResignationDatePress}
                />
              </View>
              <View className="flex-1">
                <DatePickerField
                  label="Last Working Day*"
                  value={formatDate(lastWorkingDay)}
                  onPress={handleLastWorkingDayPress}
                />
              </View>
            </View>

            {/* Reason Text Area */}
            <TextAreaField
              label="Reason for Resignation*"
              placeholder="Write your resignation reason"
              value={reason}
              onChangeText={setReason}
            />

            {/* Action Buttons */}
            <ActionButtons
              onCancel={handleCancel}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </View>
      </ScrollView>
      {showResignationDatePicker && (
            <DateTimePicker
              value={resignationDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowResignationDatePicker(false);
                if (selectedDate) {
                  setResignationDate(selectedDate);
                }
              }}
            />
          )}

          {showLastWorkingDayPicker && (
            <DateTimePicker
              value={lastWorkingDay}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowLastWorkingDayPicker(false);
                if (selectedDate) {
                  setLastWorkingDay(selectedDate);
                }
              }}
            />
          )}
    </View>
    </View>
    </Modal>
  );
};

export default ResignationForm;