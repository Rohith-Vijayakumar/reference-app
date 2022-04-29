import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import DashBoard from '../screens/DashBoard/dashBoardScreen';
import Profile from '../screens/Profile/profileScreen';
import Menu from '../screens/Menu/menuScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='dashBoard' component={DashBoard} options={{headerShown: false}} />
            <Tab.Screen name='profile' component={Profile} options={{headerShown: false}}/>
            <Tab.Screen name='menu' component={Menu} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}