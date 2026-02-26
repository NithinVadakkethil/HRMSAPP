import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LeaveDataTable } from '../../../components';

const TopTab = createMaterialTopTabNavigator();

const LeaveTopTabs = (props) => {
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
                name="Leave Request"
                component={()=> <LeaveDataTable data={props.leaveRequests} columns={props.leaveRequestColumns}/>}
                options={{ tabBarLabel: 'Leave Request' }}
            />
            <TopTab.Screen
                name="Accept or Reject Leaves"
                component={()=> <LeaveDataTable data={props.acceptedOrRejected} columns={props.acceptedOrRejectedColumns}/>}
                options={{ tabBarLabel: 'Accept or Reject Leaves' }}
            />
            <TopTab.Screen
                name="My request"
                component={()=> <LeaveDataTable data={props.myLeaves} columns={props.myRequestColumns}/>}
                options={{ tabBarLabel: 'My request' }}
            />
        </TopTab.Navigator>
    )
}

export default LeaveTopTabs