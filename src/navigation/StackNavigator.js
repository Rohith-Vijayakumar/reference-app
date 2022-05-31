import React from 'react';

import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';

//screens
import Home from '../screens/Home/homeScreen';
import SignInScreen from '../screens/SignIn/signInScreen';
import SignUpScreen from '../screens/SignUp/signUpScreen';
import SplashScreen from '../components/SplashScreen/splashScreen';

import Header from '../components/CustomHeader/customHeader';

// Drawer Navigation
import DrawerRoutes from './DrawerNavigator';


const Stack = createNativeStackNavigator();


export default function navigation() {

    return (
    <NavigationContainer>

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
                    headerTitle: (props) => <Header {...props} />
                }} />

            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerShown: true,
                    gestureEnabled: true,
                    headerTitle: (props) => <Header {...props} />
                }} />

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
                    headerShown: true,
                    headerTitle: (props) => <Header {...props} />
                }} />
        </Stack.Navigator>    
    


    </NavigationContainer>
    );
}


