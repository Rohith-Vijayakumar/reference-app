import React from "react";
import {View,Text} from 'react-native';
import styles from './style.js';
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
    const navigation=useNavigation();
    setTimeout(() => {
        navigation.replace("Home");
    }, 2000);

    return (

        <View style={styles.splashScreen}>
           <Text style={styles.text}>React Native</Text>
           <Text style={styles.text}>Reference App</Text>
        </View>

    )
}
export default SplashScreen;