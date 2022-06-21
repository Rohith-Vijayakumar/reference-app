import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  gridContainer:{
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    marginLeft:70,
    
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  cardContainer:{
    width:100,
    height:95,
    flexDirection:'row',
    marginTop:14,
    marginBottom:14,
    marginRight:14,
    marginLeft:14,
    backgroundColor:'#66ffcc',
    borderRadius:20,
    alignItems:'center',
  },
  image:{
    width: 350,
    height: 200,
    borderRadius: 10,
    marginTop:10,
    marginLeft:14,
    marginRight:10,
  },
  bottomImage:{
    width: 350,
    height: 200,
    borderRadius: 10,
   
  },
  text:{
    fontSize:15,
    fontWeight:'bold',
    marginLeft:20,
    textAlign: 'center'
  },
  activityText:{
    fontSize:24,
    fontWeight:'bold',
    marginLeft:10,

  },
  caption:{
    marginLeft:10,
    marginTop:10,
  },
  activityView:{
    padding:10,
  }
  

});

export default styles;