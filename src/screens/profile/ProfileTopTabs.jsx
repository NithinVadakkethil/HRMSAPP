import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Access, Assets, Attendance, ContactMade, Document, Offboard, Onboard, PaySlip, Personal } from '../../screens';

const TopTab = createMaterialTopTabNavigator();

const ProfileTopTabs = () => {
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
            component={Personal} 
            options={{ tabBarLabel: 'Personal' }} 
          />
          <TopTab.Screen 
            name="Attendance" 
            component={Attendance}
            options={{ tabBarLabel: 'Attendance' }} 
          />
          <TopTab.Screen 
            name="PaySlip" 
            component={PaySlip}
            options={{ tabBarLabel: 'Payslip and Finanance' }}
          />
          <TopTab.Screen 
            name="Assets" 
            component={Assets}
            options={{ tabBarLabel: 'Assets' }}
          />
          <TopTab.Screen 
            name="Access" 
            component={Access}
            options={{ tabBarLabel: 'Software Access' }}
          />
          <TopTab.Screen 
            name="Document" 
            component={Document}
            options={{ tabBarLabel: 'Document' }}
          />
          <TopTab.Screen 
            name="Onboard" 
            component={Onboard}
            options={{ tabBarLabel: 'Onboarding' }}
          />
          <TopTab.Screen 
            name="Offboard" 
            component={Offboard}
            options={{ tabBarLabel: 'Offboarding' }}
          />
        </TopTab.Navigator>
      );
}

export default ProfileTopTabs