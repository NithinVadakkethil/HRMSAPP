import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Lens, CalendarIcon } from '../../assets';

const SearchBar = ({ searchText, setSearchText, onSearch, selectedDate, onDatePress }) => {
  return (
    <View className="flex-1 flex-row items-center px-3 py-2 gap-3">
      <View className='flex-row items-center justify-between w-48 rounded-lg shadow-sm border border-gray-200 px-2 py-0.5 gap-1'>
        <Lens />
        <TextInput
          className="flex-1 text-gray-700 text-base m-0 p-0"
          placeholder="Search"
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
          onSubmitEditing={onSearch}
        />
      </View>

      <TouchableOpacity
        className="bg-[#2A8E9E] px-4 py-2 rounded-md"
        onPress={onSearch}
        activeOpacity={0.8}
      >
        <Text className="text-white font-medium text-sm">Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="gap-1 bg-[#FFFFFF] rounded-md p-2 flex-row items-center border border-[#374151]"
        onPress={onDatePress}
      >
        <CalendarIcon />
        <Text className="text-[#374151] font-inter text-[12px]">
          {selectedDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#002231] px-4 py-2 rounded-md"
        activeOpacity={0.8}
      >
        <Text className="text-white font-medium text-sm">Export</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
