import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Access, Assets, Attendance, ContactMade, Document, Offboard, Onboard, PaySlip, Personal } from '../../screens';

const TopTab = createMaterialTopTabNavigator();

const ProfileTopTabs = (props) => {

  console.log("props.profileData-->", props.profileData)

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          textTransform: 'none', // prevents uppercase
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'green', // color of the underline
          height: 2,
        },
        tabBarActiveTintColor: 'green', // color of active tab text
        tabBarInactiveTintColor: 'gray', // color of inactive tab text
        tabBarStyle: {
          backgroundColor: 'white', // background color of the tab bar
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
        },
        tabBarItemStyle: {
          width: 'auto', // makes tabs only as wide as their content
          paddingHorizontal: 16, // horizontal padding for each tab
        },
        tabBarContentContainerStyle: {
          alignItems: 'center', // centers tabs horizontally
        },
        tabBarScrollEnabled: true, // allows scrolling if many tabs
      }}
    >
      <TopTab.Screen
        name="Personal"
        component={() => <Personal profileData={props.profileData} />}
        options={{ tabBarLabel: 'Personal' }}
      />
      <TopTab.Screen
        name="Attendance"
        component={() => <Attendance profileData={props.profileData} />}
        options={{ tabBarLabel: 'Attendance' }}
      />
      <TopTab.Screen
        name="PaySlip"
        component={() => <PaySlip />}
        options={{ tabBarLabel: 'Payslip and Finanance' }}
      />
      <TopTab.Screen
        name="Assets"
        component={() => <Assets profileData={props.profileData} />}
        options={{ tabBarLabel: 'Assets' }}
      />
      <TopTab.Screen
        name="Access"
        component={() => <Access profileData={props.profileData} />}
        options={{ tabBarLabel: 'Software Access' }}
      />
      <TopTab.Screen
        name="Document"
        component={() => <Document profileData={props.profileData} />}
        options={{ tabBarLabel: 'Document' }}
      />
      <TopTab.Screen
        name="Onboard"
        component={() => <Onboard />}
        options={{ tabBarLabel: 'Onboarding' }}
      />
      <TopTab.Screen
        name="Offboard"
        component={() => <Offboard />}
        options={{ tabBarLabel: 'Offboarding' }}
      />
    </TopTab.Navigator>
  );
}

export default ProfileTopTabs