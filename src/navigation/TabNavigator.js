import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  LeaveScreen,
  ReportScreen,
  ProfileScreen,
} from "../screens";
// import { ICONS, COLORS } from "../constants";
import { Home, Leave, Report, Profile } from "../assets";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const iconSize = 20;

          const icons = {
            Home: <Home width={iconSize} height={iconSize} fill={color} />,
            Leave: <Leave width={iconSize} height={iconSize} fill={color} />,
            Report: (
              <Report width={iconSize} height={iconSize} fill={color} />
            ),
            Profile: (
              <Profile width={iconSize} height={iconSize} fill={color}/>
            ),
          };

          return icons[route.name];
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray400,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
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
    </Tab.Navigator>
  );
};

export default TabNavigator;
