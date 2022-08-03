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
  list: {
    flex: 1,
    padding:8,
    fontSize: 10,
    color: Colors.BLACK,
    fontFamily: 'Montserrat-Regular',
  },
  
});
export default styles;