import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomNavigator from './BottomNavigator'

// Drawer Screens
import DrawerOne from '../components/CustomDrawer/DrawerOne'
import DrawerTwo from '../components/CustomDrawer/DrawerTwo'
import About from '../components/CustomDrawer/About'
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'
import CheckBox from '../screens/CheckBoxScreen/checkBox'

//
import Profile from '../screens/Profile/profileScreen'
import RadioButtonScreen from '../screens/RadioButtonScreen/radioButtonscreeen'


const Drawer = createDrawerNavigator()

const DrawerRoutes = ()=> {
  return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}  screenOptions={{drawerActiveBackgroundColor:'#aa18ea',drawerActiveTintColor:'#fff',drawerInactiveTintColor:'#333'}} >
            <Drawer.Screen name='HomeScreen' component={BottomNavigator}  options={{title:'Home'}} />
            <Drawer.Screen name='Profile' component={Profile} />
            <Drawer.Screen name='Drawer 1' component={DrawerOne} />
            <Drawer.Screen name='Drawer 2' component={DrawerTwo}  />
            <Drawer.Screen name='About' component={About} />
            <Drawer.Screen name='CheckBox' options={{title:'CheckBox'}} component={CheckBox} />
            <Drawer.Screen name='RadioButton' options={{title:'Radio Button'}} component={RadioButtonScreen} />
            


        </Drawer.Navigator>
  )
}

export default DrawerRoutes