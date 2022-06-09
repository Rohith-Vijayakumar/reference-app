import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton/customButton'

const Menu = () => {

    const navigation = useNavigation()

    const QRScannerPressed = () => {
        navigation.navigate('QRScanner')
    }
    const onWebViewPressed = () => {
        navigation.navigate('WebView')
    }
    return (
        <View style={styles.root}>
            <Text>
                Menu
            </Text>
            <CustomButton text="QR Scanner" onPress={QRScannerPressed} />
            <CustomButton text="Web View" onPress={onWebViewPressed} />
        </View>

    )
}
export default Menu;
