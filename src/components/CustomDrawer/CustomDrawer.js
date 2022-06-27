import { View, Text, TouchableOpacity,Image,ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import styles from './styles';
import {Auth} from '../../services';
import {useNavigation} from '@react-navigation/native'
import CustomButton from '../CustomButton/customButton';


const CustomDrawer = props => {
  const navigation = useNavigation()

  const onProfilePressed = () => {
    navigation.navigate('Profile')
  }
  return (
    
    <View style={styles.themes}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#8200d6'}} >
          <ImageBackground source={require('../../../assets/background.jpg')} style={{padding:30}} >
            <TouchableOpacity onPress={onProfilePressed}>
          <Image source={require('../../../assets/profile.jpg')} style={{height:80, width:80, borderRadius:40, marginBottom:10}}  />
          </TouchableOpacity>
          <Text style={{color:'#fff', fontSize:18}} onPress={onProfilePressed}  >Ram</Text>
          <Text style={{color:'#fff'}} onPress={onProfilePressed}>Junior Developer</Text>
          </ImageBackground>

          <View style={{flex:1, backgroundColor:'#fff',paddingTop:10}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={styles.container} >
            <TouchableOpacity onPress={() =>{}} >
                <Text style={styles.layout}>Version Log v1.2</Text>
            </TouchableOpacity>
            
        </View>
        <View style={styles.container} >
          
        <CustomButton text="Sign Out" onPress={()=>Auth.signOut()} />
        </View>
    </View> 
    
  )
}

export default CustomDrawer;