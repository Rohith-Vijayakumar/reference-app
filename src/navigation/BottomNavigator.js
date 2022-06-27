import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import Notification from '../screens/Notification/notificationScreen'
import DashBoard from '../screens/DashBoard/dashBoardScreen';

import Menu from '../screens/Menu/menuScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
        <Tab.Navigator  >
            <Tab.Screen name='dashBoard' component={DashBoard} options={{headerShown: false}} />
            <Tab.Screen name='menu' component={Menu} options={{headerShown: false}}/>
            <Tab.Screen name='Notification' component={Notification} options={{headerShown: false}}/>
        </Tab.Navigator>
  )
}