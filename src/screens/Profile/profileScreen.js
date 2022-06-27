import React from 'react';
import {View, SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import styles from './style.js'


const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image source={require('../../../assets/profile.jpg')} size={80} />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, { marginTop:15, marginBottom: 5, }]}> Hi Ram !</Title>
            <Caption style={styles.caption}>@Jr_Developer</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          
          <Text style={{color:"#777777", marginLeft: 20}}>Hyderabad, India</Text>
        </View>
        <View style={styles.row}>
          
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          
          <Text style={{color:"#777777", marginLeft: 20}}>JrDeveloper@gmail.com</Text>
        </View>
      </View>
      
      

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          
          <View style={styles.userInfoSection}>
          <Title style={[styles.title, { fontSize:18, marginTop:15, marginBottom: 5, }]}>Personal Info</Title>
            <Caption style={[styles.caption,{borderBottomWidth:1, marginBottom:5,borderBottomColor:'#ccc'}]}> Name , Email and Mobile No.</Caption>
          </View>
          
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="credit-card" color="#FF6347" size={25}/> */}
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            
            <Text style={styles.menuItemText}>Account</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
           
            <Text style={styles.menuItemText}>Terms and Conditions</Text>
          </View>
        </TouchableRipple>
      </View>
      </ScrollView>
    </SafeAreaView>
    // <View>
    // <ScrollView showsVerticalScrollIndicator={false}>
    // <View style={styles.cardContainer}>
    //   <ImageBackground source={require('../../../assets/background.jpg')} >
      
    // <View style={styles.profileImage}>
    //     <Image source={require('../../../assets/profile.jpg')} style={styles.image} resizeMode="center"></Image>
    // </View>
    // </ImageBackground>
    // </View>
    
    // <View style={styles.infoContainer}>
    //   <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Ram</Text>
    //   <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Jr. Developer</Text>
    // </View>
    // <View style={styles.statsContainer}>
    //   <View style={styles.statsBox}>
    //     <Text style={[styles.text, { fontSize: 24 }]}>50</Text>
    //     <Text style={[styles.text, styles.subText]}>Posts</Text>
    //   </View>
    //   <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
    //     <Text style={[styles.text, { fontSize: 24 }]}>500</Text>
    //     <Text style={[styles.text, styles.subText]}>Followers</Text>
    //   </View>
    //   <View style={styles.statsBox}>
    //     <Text style={[styles.text, { fontSize: 24 }]}>200</Text>
    //     <Text style={[styles.text, styles.subText]}>Following</Text>
    //   </View>
    // </View>
    // <ScrollView horizontal>
    //   <View style={styles.horizontalCardContainer} />
    //   <View style={styles.horizontalCardContainer} />
    //   <View style={styles.horizontalCardContainer} />
    //   <View style={styles.horizontalCardContainer} />
    // </ScrollView>
    // </ScrollView>
    // </View>
  )
}

export default Profile