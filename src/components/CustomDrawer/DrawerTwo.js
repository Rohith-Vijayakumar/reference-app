import { View,ScrollView, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomButton from '../CustomButton/customButton'
import {useNavigation} from '@react-navigation/native'





const DrawerTwo=() => {
  const navigation = useNavigation()

  const onBackPressed = () => {
    navigation.goBack();
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flex: 1}}>
    <View style={styles.root}>
      <Text style={styles.screen}>{"Welcome to Drawer 2 Screen"}</Text>
      
      <CustomButton text="Go Back " onPress={onBackPressed} />

    </View>
    </ScrollView>
  )
}

export default DrawerTwo