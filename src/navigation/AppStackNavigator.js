import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomNavigator from './BottomNavigator'


// Drawer navigator
import DrawerRoutes from './DrawerNavigator'

const Stack = createNativeStackNavigator()

export default function AppNavigator(){
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

        </Stack.Navigator>
  )

    }

