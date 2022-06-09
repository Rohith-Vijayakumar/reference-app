import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './BottomNavigator'
import WebView from '../components/WebView/webview'
import Header from '../components/CustomHeader/customHeader'
import QRScanner from '../components/QRScanner/qrCodeScanner'

// Drawer navigator
import DrawerRoutes from './DrawerNavigator'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerRoutes}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomNavigator}
        options={{
          headerShown: false

        }} />
      <Stack.Screen
        name="WebView"
        component={WebView}
        options={{
          headerShown: false,
          gestureEnabled: true,
          headerTitle: (props) => <Header {...props} />
        }} />
      <Stack.Screen
        name="QRScanner"
        component= {QRScanner}
        options={{
          headerShown: false,
          gestureEnabled: true,
          headerTitle: (props) => <Header {...props} />
        }} />

    </Stack.Navigator>
  )

}

