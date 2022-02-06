import {Dimensions, StyleSheet} from 'react-native';
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#54BAB9',
  },
  firstContainer: {
    height: '65%',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    flexDirection: 'column',
  },
  barAndBell:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '2%'
  },
  HeadingText: {
    color: '#FBF8F1',
    // justifyContent: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
  HeadingButtonCards:{
    flexDirection: 'column',
    paddingHorizontal: '3.2%',
    // backgroundColor: 'red'
  },
  btn:{
    color: 'black',
    paddingHorizontal: '10%',
    paddingVertical: '4%',
    backgroundColor: 'white',
    borderRadius: 25,
    width: 160,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  MyCountryGlobal: {
    backgroundColor: 'rgba(255,255,255, 0.3)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1%',
    borderRadius: 25,
  },
  statContainer:{
  },
  twoBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ThreeBox:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstBox:{
    backgroundColor: '#FFAD60',
    padding: '6%',
    borderRadius: 5,
    width: '47%',
  },
  SecondBox:{
    backgroundColor: '#FF5959',
    padding: '6%',
    borderRadius: 5,
    width: '50%'
  },
  thirdBox:{
    backgroundColor: '#FF5959',
    padding: '6%',
    borderRadius: 5,
    width: '33%'
  },
  fourthBox:{
    backgroundColor: '#FF5959',
    padding: '6%',
    borderRadius: 5,
    width: '33%'
  },
  fifthBox:{
    backgroundColor: '#FF5959',
    padding: '6%',
    borderRadius: 5,
    width: '33%'
  },
  boxesStatText:{
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  boxesStatText1:{
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  threeBoxText:{
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  threeBoxText1:{
    textAlign: 'center',
    color: 'white',
    fontSize: 17,
  },
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
