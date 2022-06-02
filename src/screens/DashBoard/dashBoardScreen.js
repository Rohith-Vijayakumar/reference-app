import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton/customButton';
import styles from './style.js';
import {Auth} from '../../services';

const DashBoard = () => {
  return (
    <View style={styles.root}>
      <Text>DashBoard</Text>
    </View>
  );
};

export default DashBoard;
