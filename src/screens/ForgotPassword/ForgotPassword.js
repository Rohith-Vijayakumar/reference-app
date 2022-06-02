import React, {useState} from 'react';
import { View,ScrollView } from 'react-native';
import ReactLogo from '../../../assets/reactNative.svg'
import CustomInput from '../../components/CustomTextInput/customInput'
import CustomButton from '../../components/CustomButton/customButton'
import {useNavigation} from '@react-navigation/native'
import styles from './style';

// services
import {Auth} from '../../services';


const ForgotPassword =()=> {
    const navigation = useNavigation()

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
      };
    

    const [email, setEmail] = useState()

    return(
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
        <CustomButton
          text="Forgot Password?"
          onPress={() => Auth.forgetPassword(email)}
        />


        <CustomButton
          text="Back to Login"
          onPress={onSignInPressed}
        />
      </View>
    </ScrollView>
    )
}
export default ForgotPassword;