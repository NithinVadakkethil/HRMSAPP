import { View, Text, FlatList, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { Lens } from '../../../assets'
import { CustomHeader, EmployeeCard, LeaveStats } from '../../../components'
import { getJMDashboardData, getEmployeesUnderJM } from '../../../api/apiService'

const EmployeeScreen = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await getJMDashboardData();
        setDashboardData(data);
      } catch (err) {
        setError('Failed to fetch dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    const fetchEmployeesUnderJm = async () => {
      try {
        const data = await getEmployeesUnderJM();
        setEmployees(data);
      } catch (err) {
        setError('Failed to fetch dashboard data.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeesUnderJm();
    fetchDashboardData();
  }, []);

  const handleViewProfile = (employeeId) => {
    navigation.navigate({
      name: 'Profile',
      params: { id: employeeId },
      key: `Profile-${employeeId}` // 🔥 ensures a new instance
    });    
  };

  const SearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
      console.log('Search pressed:', searchText);
      // Implement search functionality here
    };

    return (
      <View className="flex-row px-3 gap-3">
        <View className='flex-1 flex-row items-center bg-[#FFF] justify-between rounded-lg shadow-sm border border-[#D2DBE4] px-2 py-0.5 gap-1'>
          <Lens/>
          <TextInput
            className="flex-1 text-gray-700 text-base m-0 p-0"
            placeholder="Search"
            placeholderTextColor="#9CA3AF"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
        </View>
        <TouchableOpacity
          className="bg-[#2A8E9E] px-4 py-2 rounded-md"
          onPress={handleSearch}
          activeOpacity={0.8}
        >
          <Text className="text-white font-medium text-sm">Search</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (loading) {
    return (
      <View className="flex-1 bg-[#F9F9F9]">
        <CustomHeader title="Employee" logo={false} />
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0d9488" />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 bg-[#F9F9F9]">
        <CustomHeader title="Employee" logo={false} />
        <View className="flex-1 justify-center items-center">
          <Text className="text-red-500">{error}</Text>
        </View>
      </View>
    );
  }

  console.log("dashboardData--->", employees)

  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <CustomHeader title="Employee" logo={false} />
      <LeaveStats leaveStats={dashboardData} />
      <SearchBar/>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EmployeeCard
            employee={item}
            onViewProfile={()=> handleViewProfile(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default EmployeeScreen