import React, { useState } from "react";
import { View, ScrollView, Text} from 'react-native';
import CustomInput from "../../components/CustomTextInput/customInput";
import CustomButton from "../../components/CustomButton/customButton";
import styles from './style.js';
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate("BottomTabNavigator");
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password");
    }

    const onSignInPressed = () => {
        navigation.navigate("SignIn");
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1}}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an Account</Text>
                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder="Confirm Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>

                <CustomButton text="Register" onPress={onRegisterPressed} />

                <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

                <CustomButton text="Already have an account? Sign In" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}

export default SignUpScreen;

