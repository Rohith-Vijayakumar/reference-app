import { StyleSheet } from 'react-native';
import Colors from '../CustomCheckbox/colors';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
},
  option: {
    flex: 1,
    fontSize: 10,
    color: Colors.BLACK,
    fontFamily: 'Montserrat-Regular',
  },
  unselected: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: Colors.GREY,
    backgroundColor: Colors.GREY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  selected: {
    width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: Colors.PURPLE,

},
});
export default styles;