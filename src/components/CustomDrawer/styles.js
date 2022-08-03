import { StyleSheet,Dimensions } from 'react-native';


const styles = StyleSheet.create({
    root : {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    container :{
        padding:20,
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor:'#ccc'
    },
    screen :{
        padding:12,
        
    },
    themes:{
        flex:1,    
    },
    layout:{
        fontWeight:'bold',
    },
    map:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
// const {width, height} = Dimensions.get('window');
}
    

})
export default styles;