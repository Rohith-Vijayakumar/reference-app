import React from 'react';
import {View, Text} from 'react-native';
// import Picker from 'react-native-picker/picker'
import styles from './style'


const CustomDropDown = () => {
    
  return (
    <View >
        <Picker>
            <Picker.item label="Select"></Picker.item>
            <Picker.item label="Apple"></Picker.item>
            <Picker.item label="Samsung"></Picker.item>
        </Picker>
      
      
    </View>
  );
};

export default CustomDropDown;
