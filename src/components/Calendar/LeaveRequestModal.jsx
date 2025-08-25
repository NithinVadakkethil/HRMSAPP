import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const LeaveRequestModal = ({ visible, onClose, onSubmit }) => {
  const [leaveType, setLeaveType] = useState('Paid Leave');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);
  const [isHalfDay, setIsHalfDay] = useState(false);
  const [halfDayPeriod, setHalfDayPeriod] = useState('Morning');
  const [description, setDescription] = useState('');

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0]; // yyyy-mm-dd
  };

  const handleSubmit = () => {
    const leaveData = {
      type_of_leave: leaveType,
      from_date: formatDate(fromDate),
      to_date: formatDate(toDate),
      leave_day_type: isHalfDay ? "half Day" : "Full Day",
      day_session: isHalfDay ? halfDayPeriod : "",
      reason: description,
    };
    onSubmit(leaveData);
    onClose();
    // Reset form
    setDescription('');
    setIsHalfDay(false);
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
          minHeight: '60%'
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
              Leave Request
            </Text>
            <TouchableOpacity onPress={onClose} style={{ padding: 4 }}>
              <Text style={{ fontSize: 20, color: '#6B7280' }}>×</Text>
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
                Leave Type
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
                  <Picker.Item label="Sick Leave" value="2"/>
                  <Picker.Item label="Casual Leave" value="1" />
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
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#3B82F6', marginRight: 8 }}>📅</Text>
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
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#3B82F6', marginRight: 8 }}>📅</Text>
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
                      <Picker.Item label="Evening" value="Evening" />
                    </Picker>
                  </View>
                )}
              </View>
            </View>

            {/* Description */}
            <View style={{ marginBottom: 24 }}>
              <Text style={{ fontSize: 14, fontWeight: '500', color: '#374151', marginBottom: 8 }}>
                Description
              </Text>
              <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Write your Description"
                placeholderTextColor="#9CA3AF"
                multiline
                numberOfLines={4}
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D5DB',
                  borderRadius: 8,
                  padding: 12,
                  backgroundColor: 'white',
                  color: '#374151',
                  textAlignVertical: 'top',
                  minHeight: 100,
                }}
              />
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor: '#0D9488',
                borderRadius: 8,
                paddingVertical: 16,
                alignItems: 'center',
                marginBottom: 16,
              }}
              activeOpacity={0.8}
            >
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
                Create Leave
              </Text>
            </TouchableOpacity>
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
                  setFromDateFormatted(formatDate(selectedDate));
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
                  setToDateFormatted(formatDate(selectedDate));
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