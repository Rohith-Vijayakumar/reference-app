import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import styles from './styles'

const CustomDrawer = props => {
  return (
    
    <View style={styles.themes}>
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={styles.container} >
            <TouchableOpacity onPress={() => {}} >
                <Text style={styles.layout}>Version Log v1.1</Text>
            </TouchableOpacity>
        </View>
    </View>
    
  )
}

export default CustomDrawer
