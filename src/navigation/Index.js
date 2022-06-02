
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'

// Navigation
import AppNavigator from './AppStackNavigator';


//firebase auth 
import auth from '@react-native-firebase/auth';
import AuthNavigator from './AuthStackNavigator';

export default  AppContainer=()=> {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }

  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;


    return(
        <NavigationContainer>
            { user ? <AppNavigator/> : <AuthNavigator/> }
        </NavigationContainer>

        
    )
}