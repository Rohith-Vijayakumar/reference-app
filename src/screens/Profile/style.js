import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
   
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  // root: {
  //   alignItems: 'center',
  //   padding: 10,
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   flex: 1,
  //   backgroundColor: 'white',
    
  // },
  cardContainer :{
    width:400 ,
    height:200,
    flexDirection:'row',
    margin:15,
    borderRadius:10,
  },
  // textField:{
  //   flex:1,
  //   backgroundColor:'rgba(0,0,0,0.5)',
  //   alignSelf:'flex-end',
  //   borderRadius:10,
  // },
  // title:{
  //   color:'white',
  //   fontSize:20,
  //   margin:6
  // },
  // profileImage:{
  //   width: 150,
  //   height: 150,
  //   borderRadius: 100,
  //   marginLeft:110,
  //   marginTop:130,
    
  // },
  // image: {
  //   flex:1,
  //   height:undefined,
  //   width:undefined,
  //   borderRadius:500,
    
  // },
  // infoContainer:{
  //   alignSelf: "center",
  //   alignItems: "center",
  //   marginTop: 16,
  // },
  // statsContainer:{
  //   flexDirection: "row",
  //   alignSelf: "center",
  //   marginTop: 32,
  //   borderRadius:10,
  // },
  // text:{
  //   fontFamily: "HelveticaNeue",
  //   color: "#52575D"
  // },
  // subText:{
  //   fontSize: 12,
  //   color: "#AEB5BC",
  //   textTransform: "uppercase",
  //   fontWeight: "500"
  // },
  // statsBox:{
  //   alignItems: "center",
  //   flex: 1,

  // },
  horizontalCardContainer:{
    width:350,
    height:50,
    flexDirection:'row',
    margin:15,
    backgroundColor:'white',
    borderRadius:10,
  }
});

export default styles;