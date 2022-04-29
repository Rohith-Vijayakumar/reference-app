import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from './BottomNavigator';

//screens
import Home from '../screens/Home/homeScreen';
import SignInScreen from '../screens/SignIn/signInScreen';
import SignUpScreen from '../screens/SignUp/signUpScreen';
import SplashScreen from '../components/SplashScreen/splashScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function navigation() {

    return <NavigationContainer>{

        <Stack.Navigator
            initialRouteName="SplashScreen" >

            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                    headerShown: false,
                }} />

            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }} />

            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerShown: true,
                }} />

            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerShown: true,
                    gestureEnabled: true,
                }} />

            <Stack.Screen
                name="BottomTabNavigator"
                component={BottomNavigator}
                options={{
                    headerTitle : "",
                    headerShown: true
                }} />
        </Stack.Navigator>
    }
    </NavigationContainer>;
}


