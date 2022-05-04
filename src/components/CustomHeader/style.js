import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        //flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        //alignContent: 'center',
        //alignSelf : "center",
        //marginLeft: Platform.OS === 'ios' ? 0 : 18
    }
});

export default styles;