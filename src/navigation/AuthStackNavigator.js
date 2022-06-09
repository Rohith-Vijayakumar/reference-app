import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

// screens
import Home from '../screens/Home/homeScreen'
import SignInScreen from '../screens/SignIn/signInScreen'
import SignUpScreen from '../screens/SignUp/signUpScreen'
import SplashScreen from '../components/SplashScreen/splashScreen'
import QRScanner from '../components/QRScanner/qrCodeScanner'
import WebView from '../components/WebView/webview'

import Header from '../components/CustomHeader/customHeader'
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword'



const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen" >

      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
          headerTitle: (props) => <Header {...props} />
        }} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
          gestureEnabled: true,
          headerTitle: (props) => <Header {...props} />
        }} />

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          headerTitle: (props) => <Header {...props} />
        }} />


    </Stack.Navigator>

  )
} 