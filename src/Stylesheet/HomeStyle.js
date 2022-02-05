import {Dimensions, StyleSheet} from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  //first container
  firstContainer: {
    backgroundColor: '#54BAB9',
    height: '45%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: '5%'
  },
  NameFlagSickCall: {
    paddingHorizontal: '1.5%',
  },
  StatFlag: {},
  Statistics: {},
  ImgContainer: {},
  CountryImg: {},
  Sick: {},
  SickText1: {},
  SickText2: {},
  helpline: {},
  call: {},
  link: {},
  helptext: {},
});

//style for second container
const style1 = StyleSheet.create({
  SecondContainer: {backgroundColor: 'green'},

  // Prevention and image part
  Prevention: {},
  PreventionText: {},
  PreventionImageContainer: {},
  ImageAndText: {},
  ImgText: {},
  ImgSize: {},

  // vacination part
  VaccinationContainer: {},
  VaccineImgSize: {},
  textArea: {},
  vaccineQuotes1: {},
  vaccineQuotes: {},
});

export {style, style1};
