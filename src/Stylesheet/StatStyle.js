import {Dimensions, StyleSheet} from 'react-native';
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#54BAB9',
    justifyContent: 'space-between',
  },
  firstContainer: {
    padding: 8,
    flexDirection: 'column',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  StatText: {
    color: '#FBF8F1',
    justifyContent: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    // backgroundColor: 'red'
  },
  GlobalCountry: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  MyCountryBtn: {},
});

const style1 = StyleSheet.create({
  secondContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: 'center',
  },
});

export {style, style1};
