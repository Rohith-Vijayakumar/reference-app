import React, { useState } from 'react';
import { SafeAreaView, ActivityIndicator, View, Text } from 'react-native';
import styles from './style.js';
import { WebView } from 'react-native-webview';
import NewUrl from '../../utils/constants/URL'

const WebviewScreen = () => {

  const [visible, setVisible] = useState(false);

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="gray" size="large" />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.root}>
      <WebView source={{ uri: NewUrl.urls }}
        allowsBackForwardNavigationGestures={true}
        // Enable JavaScripit Support 
        javaScriptEnabled={true}
        //for the cache
        domStorageEnabled={true}
        onLoadStart={() => setVisible(true)}
        onLoadEnd={() => setVisible(false)}
        renderError={() => {
          return (
            <View style={styles.errorView}>
              <Text style={styles.errorMessage}> Site cannot be reached at this moment.</Text>
            </View>
          )
        }}
      />
      {visible ? <ActivityIndicatorElement /> : null}
    </SafeAreaView>
  );
};

export default WebviewScreen;
