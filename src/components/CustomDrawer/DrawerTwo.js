import { View,ScrollView, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomButton from '../CustomButton/customButton'
import {useNavigation} from '@react-navigation/native'
import CustomCheckbox from '../CustomCheckbox/customCheckbox'





const DrawerTwo=() => {
  const navigation = useNavigation()
  const [music, setMusic] = React.useState(false);
  

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