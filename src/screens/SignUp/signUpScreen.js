import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomTextInput/customInput';
import CustomButton from '../../components/CustomButton/customButton';
import styles from './style.js';
import {useNavigation} from '@react-navigation/native';

//services 
import {Auth} from '../../services';



const SignUpScreen = () => {
  const navigation = useNavigation();

  // const onRegisterPressed = () => {
  //   navigation.navigate("DrawerNavigator");
  // };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flex: 1}}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={e => setUsername(e)}
        />
        <CustomInput placeholder="Email" value={email} setValue={e => setEmail(e)} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={e => setPassword(e)}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setValue={e => setPasswordRepeat(e)}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={()=>Auth.signUp(username,email, password)} />

        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Already have an account? Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
