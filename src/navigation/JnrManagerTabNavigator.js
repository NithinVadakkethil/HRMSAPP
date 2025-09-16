import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    JnrHomeScreen,
    EmployeeScreen,
    JnrLeaveScreen,
    JnrReportScreen,
    JnrProfileScreen,
    JnrNotificationScreen,
    JnrInboxScreen
} from "../screens";
import { Home, Leave, Report, Profile, Employee } from "../assets";

const Tab = createBottomTabNavigator();

const JnrManagerTabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    // Clone the icon element and apply color based on active state
                    const icons = {
                        Home: React.cloneElement(<Home fill={focused ? "#007583" : "#111827"} />),
                        Employee: React.cloneElement(<Employee fill={focused ? "#007583" : "#111827"} />),
                        Leave: React.cloneElement(<Leave fill={focused ? "#007583" : "#111827"} />),
                        Report: React.cloneElement(<Report fill={focused ? "#007583" : "#111827"} />),
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
            <Tab.Screen name="Home" component={JnrHomeScreen} />
            <Tab.Screen name="Employee" component={EmployeeScreen} />
            <Tab.Screen name="Leave" component={JnrLeaveScreen} />
            <Tab.Screen name="Report" component={JnrReportScreen} />
            <Tab.Screen name="Profile" component={JnrProfileScreen} />
            <Tab.Screen name="Notification" component={JnrNotificationScreen} options={{ tabBarButton: () => null, tabBarItemStyle: { display: 'none' } }} />
            <Tab.Screen name="Inbox" component={JnrInboxScreen} options={{ tabBarButton: () => null, tabBarItemStyle: { display: 'none' } }} />
        </Tab.Navigator>
    );
}

export default JnrManagerTabNavigator

