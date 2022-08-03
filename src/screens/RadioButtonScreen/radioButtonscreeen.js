import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import RadioButton from '../../components/RadioButton/radioButton.js';
// import CustomDropDown from '../../components/CustomDropDown/customDropDown.js';

const RadioButtonScreen = () => {
  const [option, setOption] = React.useState(null);
  const data = [
    { value: 'Profile' },
    { value: 'Calendar' },
    { value: 'Account' },
  ];

  
  return (
    <View style={styles.root}>
      <RadioButton data={data} onSelect={(value) => setOption(value)}/>
      <Text>Selected Value is:  {option}</Text>
      
    </View>
  );
};

export default RadioButtonScreen;
