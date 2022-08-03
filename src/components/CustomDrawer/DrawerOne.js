import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'
import CustomButton from '../CustomButton/customButton'
import MapView,{Callout, Circle, Marker} from "react-native-maps";






const DrawerOne = () => {
  const navigation = useNavigation()
  
  const onDrawerOnePressed = () => {
    navigation.navigate('Drawer 2')
}

  return (
    <View style={styles.root}>
      <Text style={styles.screen}>maps</Text>
      {/* <CustomButton text="Go to Drawer 2 Screen " onPress={onDrawerOnePressed} /> */}
      <MapView
          style={styles.map}
          // mapType={"standard"}
          // region={this.state.region}
          // zoomEnabled={true}
          // scrollEnabled={true}
          // showsScale={true}
          initialRegion={{latitude:13.406,longitude:123.375,latitudeDelta:0.005,longitudeDelta:0.005}}
        >
          <Marker coordinate={{latitude:13.406,longitude:123.375}} pinColor="blue" draggable={true}>
            <Callout><Text>current location</Text></Callout>
          </Marker>
          <Circle center={{latitude:13.406,longitude:123.375}} radius={100}/>
          </MapView>
    </View>
  )
}
export default DrawerOne
