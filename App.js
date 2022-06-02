import React from 'react';

import {SafeAreaView,StyleSheet} from 'react-native';
import AppContainer from './src/navigation/Index';
import 'react-native-gesture-handler';


export default function App() {
  return (
   <SafeAreaView style={styles.root}>
      <AppContainer />
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root : {
    flex : 1
  }
})