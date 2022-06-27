import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  gridContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
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
    marginLeft: 70,

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
  cardContainer: {
    maxWidth: '28%',
    height: 94,
    flexDirection: 'row',
    backgroundColor: '#66ffcc',
    borderRadius: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: 8,
    padding: 8
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 14,
    marginRight: 10,
  },
  bottomImage: {
    width: 350,
    height: 200,
    borderRadius: 10,

  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'auto',
    textAlign: 'center',
  },
  activityText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,

  },
  caption: {
    marginLeft: 10,
    marginTop: 10,
  },
  activityView: {
    padding: 10,
    backgroundColor: 'white'
  }


});

export default styles;