import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import styles from './styles';
import {Auth} from '../../services';
import CustomButton from '../CustomButton/customButton';

const CustomDrawer = props => {
  return (
    
    <View style={styles.themes}>
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
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
