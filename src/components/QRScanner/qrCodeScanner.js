import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class QRScanner extends Component {

state ={
    qr: ""
}
onRead = e => {
    this.setState({ qr: e.data})
}
  render() {
    return (
      <View>
        <QRCodeScanner onRead={this.onRead}/>
        <View>
           <Text>{this.state.qr}</Text>
          </View>
      </View>
     
    )
  }
}

