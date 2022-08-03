import React, { useState } from 'react';
import { View, Text, Pressable,TouchableOpacity,Image } from 'react-native';
import styles from './style';

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = React.useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View>
      {data.map((item) => {
        return (
            <TouchableOpacity
                
            onPress={() => selectHandler(item.value)}
                style={styles.container}
                activeOpacity={0.7}>
                <View>
                  {item.value===userOption?<Image source={require('../../Assest/checkedRadio.png')}/>:<Image source={require('../../Assest/uncheckedRadio.png')}/>}
                </View>
                <Text style={styles.option}> {item.value}</Text>
            </TouchableOpacity>

                );
      })}
    </View>
  );
}