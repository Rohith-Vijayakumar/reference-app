import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomNavigator from './BottomNavigator'

// Drawer Screens
import DrawerOne from '../components/CustomDrawer/DrawerOne'
import DrawerTwo from '../components/CustomDrawer/DrawerTwo'
import About from '../components/CustomDrawer/About'
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'


const Drawer = createDrawerNavigator()

const DrawerRoutes = ()=> {
  return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} >
            <Drawer.Screen name='HomeScreen' component={BottomNavigator}  />
            <Drawer.Screen name='Drawer 1' component={DrawerOne} />
            <Drawer.Screen name='Drawer 2' component={DrawerTwo}  />
            <Drawer.Screen name='About' component={About} />

        </Drawer.Navigator>
  )
}

export default DrawerRoutes
