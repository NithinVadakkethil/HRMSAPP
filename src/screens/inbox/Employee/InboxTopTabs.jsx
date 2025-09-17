import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { All, Unread, Urchieved } from "../.."

const TopTab = createMaterialTopTabNavigator();

const InboxTopTabs = () => {
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
        name="AllMessages" 
        component={All} 
        options={{ tabBarLabel: 'All' }} 
      />
      <TopTab.Screen 
        name="UnreadMessages" 
        component={Unread} 
        options={{ tabBarLabel: 'Unread' }} 
      />
      <TopTab.Screen 
        name="ImportantMessages" 
        component={Urchieved} 
        options={{ tabBarLabel: 'Important' }} 
      />
    </TopTab.Navigator>
  );
};

export default InboxTopTabs;