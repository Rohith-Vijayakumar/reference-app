import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const About = () => {
  return (
        <View style={styles.root}>
          <Text style={styles.screen}>{'Welcome to About Screen'}</Text>
        </View>
  )
}

export default About
