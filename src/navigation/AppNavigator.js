import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  LoginScreen,
  // LetsStartScreen,
  // NotificationScreen,
  // TaskOverviewScreen
} from "../screens";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="LetsStart" component={LetsStartScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="TaskOverview" component={TaskOverviewScreen} /> */}
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
