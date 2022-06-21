/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from './style.js';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'
import CardsHorizontal from '../../components/CardsHorizontal/cardsHorizontal'

const DashBoard = () => {
  const navigation = useNavigation()

  const onWebViewPressed = () => {
    navigation.navigate('WebView')
  }
  const QRScannerPressed = () => {
    navigation.navigate('QRScanner')
  }

  // renderInner = () => (
  //   <View style={styles.panel}>
  //     <View >
  //       <Image style={styles.bottomImage} source={require('../../../assets/Card1.jpg')} />
  //       <Text style={styles.panelTitle} > Hold Tight !</Text>
  //       <Text style={styles.panelTitle}>It's coming soon</Text>
  //     </View>
  //     <TouchableOpacity style={{ marginLeft: 50 }}>
  //       <CustomButton text="Cancel" onPress={() => this.bs.current.snapTo(1)} />
  //     </TouchableOpacity>

  //   </View>
  // )

  // renderHeader = () => (
  //   <View style={styles.header}>
  //     <View style={styles.panelHeader}>
  //       <View style={styles.panelHandle}>

  //       </View>
  //     </View>
  //   </View>
  // )

  // bs = React.createRef();
  // fall = new Animated.Value(1);

  return (
    <SafeAreaView>
      <ScrollView>
        <View >
          {/* <BottomSheet
            ref={this.bs}
            snapPoints={[420, 0]}
            renderContent={this.renderInner}
            renderHeader={this.renderHeader}
            initialSnap={1}
            callbackNode={this.fall}
            enabledGestureInteraction={true}
          /> */}
          <Animated.View style={{ opacity: Animated.add(1, Animated.multiply(this.fall, 1.0)) }}>

            <View >
              <View >
                {/* <ScrollView horizontal >
                  <Image style={styles.image} source={require('../../../assets/Card1.jpg')} />
                  <Image style={styles.image} source={require('../../../assets/Card1.jpg')} />
                  <Image style={styles.image} source={require('../../../assets/Card1.jpg')} />
                  <Image style={styles.image} source={require('../../../assets/Card1.jpg')} />
                </ScrollView> */}
                <CardsHorizontal />
              </View>
              <View style={styles.activityView}  >
                <View >
                  <Text style={styles.activityText}>My Activity </Text>
                </View>
                <Text style={styles.caption}>You're Caught Up ! </Text>
              </View>
              <View style={styles.gridContainer} >
                <View style={styles.cardContainer} >
                  <Text style={styles.text}>Events</Text>
                </View>
                <View style={styles.cardContainer} >
                  <Text style={styles.text}>Booking</Text>
                </View>
                <View style={styles.cardContainer} >
                  <Text style={styles.text}>Account</Text>
                </View>
                <View style={styles.cardContainer} >
                  <Text style={styles.text}>Meeting</Text>
                </View>
                <View style={styles.cardContainer} >
                  <Text style={styles.text}>FAQs</Text>
                </View>
                <View style={styles.cardContainer} >
                  <Text style={styles.text}>Calendar</Text>
                </View>
                <View style={styles.cardContainer} >
                  <Text style={styles.text}>Details</Text>
                </View>
                <View style={styles.cardContainer} >
                  <Text style={styles.text} onPress={QRScannerPressed}>Scan QR</Text>
                </View>
                <View style={styles.cardContainer} >
                  <Text style={styles.text} onPress={onWebViewPressed} >webView</Text>
                </View>
              </View>

            </View>

          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoard;