import React, {useState} from 'react'
import {View, ScrollView} from 'react-native'
import CustomInput from '../../components/CustomTextInput/customInput'
import CustomButton from '../../components/CustomButton/customButton'
import styles from './style.js';
import {useNavigation} from '@react-navigation/native'
import ReactLogo from '../../../assets/reactNative.svg'

// services
import { Auth } from '../../services';

const SignInScreen = () => {
  const navigation = useNavigation()

  // const onSignInPressed = () => {
  //   navigation.navigate('DrawerNavigator')
  // };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flex: 1}}>
      <View style={styles.root}>
        <View style={styles.reactLogo}>
          <ReactLogo height={140} width={140} />
        </View>
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={e => setEmail(e)}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={e => setPassword(e)}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={()=> Auth.signIn(email, password)} />

        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don't have an account? Create One"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

export default SignInScreen;
