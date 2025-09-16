import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  LeaveScreen,
  ReportScreen,
  ProfileScreen,
  NotificationScreen,
  InboxScreen
} from "../screens";
import { Home, Leave, Report, Profile } from "../assets";

const Tab = createBottomTabNavigator();

const EmployeeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // Clone the icon element and apply color based on active state
          const icons = {
            Home: React.cloneElement(<Home fill={focused ? "#007583" : "#111827"}/>),
            Leave: React.cloneElement(<Leave fill={focused ? "#007583" : "#111827"}/>),
            Report: React.cloneElement(<Report fill={focused ? "#007583" : "#111827"}/>),
            Profile: React.cloneElement(<Profile fill={focused ? "#007583" : "#111827"} />),
          };

          return icons[route.name];
        },
        tabBarActiveTintColor: "#007583", // Active text color (blue)
        tabBarInactiveTintColor: "#111827", // Inactive text color (gray)
        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0.5,
          borderTopColor: '#ECEEF2',
          elevation: 8,
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Leave" component={LeaveScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={{ tabBarButton: () => null, tabBarItemStyle: {display: 'none'} }} />
      <Tab.Screen name="Inbox" component={InboxScreen} options={{ tabBarButton: () => null, tabBarItemStyle: {display: 'none'} }} />
    </Tab.Navigator>
  );
};

export default EmployeeTabNavigator;
