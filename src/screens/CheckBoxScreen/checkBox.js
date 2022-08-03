import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import RadioButton from '../../components/RadioButton/radioButton.js';
import CustomCheckBox from '../../components/CustomCheckbox/customCheckbox.js';
import CustomButton from '../../components/CustomButton/customButton.js';
// import CustomDropDown from '../../components/CustomDropDown/customDropDown.js';

function CheckBox() {
  const [option, setOption] = React.useState([]);
  const [updated,setUpdated]=React.useState([])
  const data = ["Profile","calendar","Account"]
  console.log("Updated1",updated);

  const updateValue =()=>{
    let temp = data
    let formatdata =[]
    for (let i = 0; i< data.length; i++) {
    formatdata.push({
      id:i,
      key:temp[i],
      checked:false,
    })
     
    }
    setUpdated(formatdata)

  }

  useEffect(() => {
    updateValue()
    console.log("updated",updated);
    
  }, [])
  
  
  return (
    <View style={styles.root}>
      <CustomCheckBox data={updated} onSelect={(key) => setOption(key)}/>
      
      
    </View>
  );
};

export default CheckBox;
