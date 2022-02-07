import {Dimensions, StyleSheet} from 'react-native';
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#279E97',
  },
  FirstContainer: {
    height: '65%',
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
  StatBtnStats: {
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    // backgroundColor: 'red',
    height: '85%'
  },
  StatHeading: {
    color: '#FBF8F1',
    // justifyContent: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
  TwoBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.4)',
    borderRadius: 25,
    padding: '1%',
    height: '15%',
  },

  //for MyCountry and Global btn
  Btn:{
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '6%',
    borderRadius: 35, 
    fontWeight: 'bold',
    width: '100%',
  },
  Btn1:{
    // backgroundColor: 'white',
    textAlign: 'center',
    padding: '6%',
    borderRadius: 35, 
    fontWeight: 'bold',
    width: '100%',
  },


  DaysVariant:{
    flexDirection: 'row', 
    justifyContent: 'space-evenly'
  },
  StatBoxHeading:{
    fontWeight: 'bold',
    color: 'white'
  },
  StatBoxCount:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  //two stat
  TwoStatContainer:{
    flexDirection: 'row',
     justifyContent: 'space-between',
  },
  firstStat:{
    width: '45%',
    height: '100%',
    backgroundColor: '#ffad33',
    padding: '3%',
    borderRadius: 8,
  },
  secondStat:{
    width: '45%',
    height: '100%',
    backgroundColor: '#ff4d4d',
    padding: '3%',
    borderRadius: 8,
  },

  //three stat container
  ThreeStatContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  thirdStat:{
    width: '30%',
    height: '100%',
    backgroundColor: '#00e673',
    padding: '2.5%',
    borderRadius: 8,
  },
  fourthStat:{
    width: '30%',
    height: '100%',
    backgroundColor: '#66b3ff',
    padding: '2.5%',
    borderRadius: 8,
  },
  fifthStat:{
    width: '30%',
    height: '100%',
    backgroundColor: '#36B9B1',
    padding: '2.5%',
    borderRadius: 8,
  },
 
});

const style1 = StyleSheet.create({
  secondContainer:{
    backgroundColor: 'white', 
    borderTopRightRadius:25, 
    borderTopLeftRadius:25, 
    height: '35%', 
    justifyContent:'space-between', 
    alignItems: 'center',
  },
  secondContainerHeadline:{
    color: 'black', 
    fontSize: 20, 
    fontWeight: 'bold',
  }
  
});

export {
  style,
  style1
};
