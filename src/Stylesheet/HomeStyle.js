import {Dimensions, StyleSheet} from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  //first container
  firstContainer: {
    backgroundColor: '#279E97',
    height: '45%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
  NameFlagSickCall: {
    paddingHorizontal: '1.8%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    height: '80%',
  },
  StatFlag: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AppName: {
    color: '#FBF8F1',
    justifyContent: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
  ImgContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    width: '26%',
    height: '120%',
  },
  CountryImg: {
    borderRadius: 50,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  Sick: {
    paddingVertical: '5%',
  },
  SickText1: {
    fontSize: 21,
    color: '#FBF8F1',
    fontWeight: 'bold',
  },
  SickText2: {
    fontSize: 16.5,
    color: '#DDDDDD',
  },
  helpline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: '2%',
    alignItems: 'center',
  },
  call: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1EE494',
    height: '200%',
    width: '45%',
    alignItems: 'center',
    borderRadius: 25,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FC8A15',
    height: '200%',
    width: '45%',
    alignItems: 'center',
    borderRadius: 25,
  },
  helptext: {
    fontSize: 18.5,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
});

//style for second container
const style1 = StyleSheet.create({
  SecondContainer: {
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    height: '55%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  // Prevention and image part
  PreventionText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  PreventionImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageAndText: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  ImgSize: {
    width: 100,
    height: 100,
  },
  ImgText: {
    width: '70%',
    textAlign: 'center',
  },

  // vacination part
  VaccinationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#279E97',
    borderRadius: 25,
    alignItems: 'center',
  },
  VaccineImgSize: {
    width: 110,
    height: 110,
  },
  textArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vaccineQuotes1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  vaccineQuotes: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#D3DEDC',
  },
});

export {style, style1};
