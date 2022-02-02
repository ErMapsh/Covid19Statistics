import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },



  //first container
  firstContainer: {
    flexDirection: 'column',
    backgroundColor: '#54BAB9',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 10,
  },

  StatFlag: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Statistics: {
    color: '#FBF8F1',
    justifyContent: 'center',
    fontSize: 23,
    fontWeight: 'bold',
  },
  ImgContainer: {
    //   flex:1,
    backgroundColor: 'white',
    width: 100,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  CountryImg: {
    borderRadius: 50,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },

  Sick: {
    flexDirection: 'column',
    marginLeft: 18,
  },
  SickText1: {
    fontSize: 21,
    color: '#FBF8F1',
    fontWeight: 'bold',
  },
  SickText2: {
    fontSize: 16.5,
    color: '#DDDDDD',
    padding: 4,
  },
  helpline:{
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",
      margin: 18,
  },
  call:{
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1EE494',
    height: 50,
    width: 150,
    alignItems: 'center',
    borderRadius: 25,
  },
  link:{
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FC8A15',
    height: 50,
    width: 150,
    alignItems: 'center',
    borderRadius: 25,
  },
  helptext:{
      fontSize: 18.5,
      fontWeight: 'bold',
      color: 'white',
      marginLeft: 10,
  }

});

export {style};
