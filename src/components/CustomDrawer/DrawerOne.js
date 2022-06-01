import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import CustomButton from '../CustomButton/customButton'




const DrawerOne = () => {
  const navigation = useNavigation()
  
  const onDrawerOnePressed = () => {
    navigation.navigate('Drawer 2')
}

  return (
    <View style={styles.root}>
      <Text style={styles.screen}>{'Welcome to Drawer 1 Screen'}</Text>
      <CustomButton text="Drawer 2" onPress={onDrawerOnePressed}/>
    </View>
  )
}
export default DrawerOne
