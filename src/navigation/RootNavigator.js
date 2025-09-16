import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import AppNavigator from './AppNavigator';
import EmployeeTabNavigator from './EmployeeTabNavigator';
import JnrManagerTabNavigator from './JnrManagerTabNavigator';
// import SeniorManagerTabNavigator from './SeniorManagerTabNavigator';
import { View, ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();

const AppStack = () => {
  const { user } = useAuth();

  console.log('User data in RootNavigator:', user); // Debug log

  // Handle numeric usertype from your API response
  switch (user?.usertype) {
    case 4: // Employee
    //   return <EmployeeTabNavigator />;
      return <JnrManagerTabNavigator />;
    case 5: // Junior Manager
      return <JnrManagerTabNavigator />;
    case 3: // Senior Manager
    //   return <SeniorManagerTabNavigator />;
    default:
      console.log('Unknown user type, defaulting to employee:', user?.usertype);
      return <JnrManagerTabNavigator />; // Fallback to employee tabs
  }
};

const RootNavigator = () => {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#A92323" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="MainApp" component={AppStack} />
      ) : (
        <Stack.Screen name="Auth" component={AppNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;