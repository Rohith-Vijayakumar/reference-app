import React from "react";
import {View,TextInput} from 'react-native';
import styles from './style.js';

const customInput = ({value,setValue,placeholder,secureTextEntry}) => {
    return(
        <View style={styles.container}>
           <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.input}/>
        </View>
    )
}

export default customInput;