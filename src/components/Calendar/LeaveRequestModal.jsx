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
import DateTimePicker from '@react-native-community/datetimepicker';
import { createLeaveRequest } from '../../api/apiService'; // Import the API function
import { DateCalendar, Close } from '../../assets';

const LeaveRequestModal = ({ visible, onClose, onSubmit }) => {
  const [leaveType, setLeaveType] = useState('1'); // Default to Casual Leave ID
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);
  const [isHalfDay, setIsHalfDay] = useState(false);
  const [halfDayPeriod, setHalfDayPeriod] = useState('Morning');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd
  };

  const handleSubmit = async () => {
    // Validate form
    if (!fromDate || !toDate || !description.trim()) {
      Alert.alert('Validation Error', 'Please fill all required fields');
      return;
    }

    if (toDate < fromDate) {
      Alert.alert('Validation Error', 'To date must be after from date');
      return;
    }

    setIsSubmitting(true);

    try {
      const leaveData = {
        type_of_leave: leaveType, // This should be the ID (1 or 2)
        from_date: formatDate(fromDate),
        to_date: formatDate(toDate),
        leave_day_type: isHalfDay ? "half Day" : "Full Day", // Match exact API expectation
        day_session: isHalfDay ? halfDayPeriod : "", // Only send if half day
        reason: description.trim(),
      };

      console.log('Leave request data:', leaveData);

      // Call the API
      const response = await createLeaveRequest(leaveData);

      console.log('Leave request response:', response);

      // Show success message
      Alert.alert('Success', 'Leave request submitted successfully', [
        {
          text: 'OK',
          onPress: () => {
            // Notify parent component
            if (onSubmit) {
              onSubmit(response.data);
            }

            // Reset form
            resetForm();
            onClose();
          }
        }
      ]);

    } catch (error) {
      console.error('Error submitting leave request:', error);

      // Show detailed error message
      let errorMessage = 'Failed to submit leave request. Please try again.';
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
    setLeaveType('1');
    setFromDate(new Date());
    setToDate(new Date());
    setIsHalfDay(false);
    setHalfDayPeriod('Morning');
    setDescription('');
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
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.74)' }}>
        <View style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          maxHeight: '90%',
          minHeight: '60%'
        }}>
          {/* Header */}
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            position: "relative"
          }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#374151' }}>
              Leave Request
            </Text>
            <TouchableOpacity onPress={handleCancel} style={{ position: 'absolute', right: 20 }}>
              <Close/>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={{ flex: 1, padding: 16 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {/* Leave Type */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Leave Type*
              </Text>
              <View style={{
                borderWidth: 1,
                borderColor: '#D1D5DB',
                borderRadius: 8,
                backgroundColor: 'white'
              }}>
                <Picker
                  selectedValue={leaveType}
                  onValueChange={(itemValue) => setLeaveType(itemValue)}
                  style={{ height: 50 }}
                >
                  <Picker.Item label="Casual Leave" value="1" />
                  <Picker.Item label="Sick Leave" value="2" />
                </Picker>
              </View>
            </View>

            {/* Duration */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Duration From
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                {/* From Date */}
                <TouchableOpacity
                  onPress={() => setShowFromDatePicker(true)}
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: '#D1D5DB',
                    borderRadius: 8,
                    padding: 12,
                    backgroundColor: 'white'
                  }}
                >
                  <View className='flex-row items-center gap-2'>
                    <DateCalendar width={20} height={20} />
                    <Text style={{ color: '#374151' }}>{formatDate(fromDate)}</Text>
                  </View>
                </TouchableOpacity>

                <Text style={{ color: '#6B7280', fontWeight: '500' }}>TO</Text>

                {/* To Date */}
                <TouchableOpacity
                  onPress={() => setShowToDatePicker(true)}
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: '#D1D5DB',
                    borderRadius: 8,
                    padding: 12,
                    backgroundColor: 'white'
                  }}
                >
                  <View className='flex-row items-center gap-2'>
                    <DateCalendar width={20} height={20} />
                    <Text style={{ color: '#374151' }}>{formatDate(toDate)}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* Half Day Option */}
            <View style={{ marginBottom: 16 }}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => setIsHalfDay(!isHalfDay)}
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      borderWidth: 2,
                      marginRight: 12,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: isHalfDay ? '#0D9488' : '#D1D5DB',
                      backgroundColor: isHalfDay ? '#0D9488' : 'white',
                    }}
                  >
                    {isHalfDay && <Text style={{ color: 'white', fontSize: 12 }}>✓</Text>}
                  </TouchableOpacity>
                  <Text style={{ color: '#374151', fontWeight: '500' }}>Half Day</Text>
                </View>

                {isHalfDay && (
                  <View style={{
                    borderWidth: 1,
                    borderColor: '#D1D5DB',
                    borderRadius: 8,
                    backgroundColor: 'white'
                  }}>
                    <Picker
                      selectedValue={halfDayPeriod}
                      onValueChange={(itemValue) => setHalfDayPeriod(itemValue)}
                      style={{ width: 120, height: 40 }}
                    >
                      <Picker.Item label="Morning" value="Morning" />
                      <Picker.Item label="Afternoon" value="Afternoon" />
                    </Picker>
                  </View>
                )}
              </View>
            </View>

            {/* Description */}
            <View style={{ marginBottom: 24 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Discription
              </Text>
              <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Write your reason for leave"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={4}
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D5DB',
                  borderRadius: 8,
                  padding: 12,
                  backgroundColor: '#F8FAFC',
                  color: '#374151',
                  textAlignVertical: 'top',
                  minHeight: 100,
                }}
              />
            </View>

            {/* Action Buttons */}
            <View style={{ flexDirection: 'row', gap: 12 }}>
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  backgroundColor: isSubmitting ? '#9CA3AF' : '#007583',
                  borderRadius: 8,
                  paddingVertical: 16,
                  alignItems: 'center',
                }}
                activeOpacity={0.8}
              >
                <Text className='font-inter text-sm text-[#FFF]'>
                  {isSubmitting ? 'Submitting...' : 'Create Leave'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Date Pickers */}
          {showFromDatePicker && (
            <DateTimePicker
              value={fromDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowFromDatePicker(false);
                if (selectedDate) {
                  setFromDate(selectedDate);
                }
              }}
            />
          )}

          {showToDatePicker && (
            <DateTimePicker
              value={toDate}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowToDatePicker(false);
                if (selectedDate) {
                  setToDate(selectedDate);
                }
              }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default LeaveRequestModal;