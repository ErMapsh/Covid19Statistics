import {Dimensions, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  }
});

const styleSplashScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: 150,
    height: 150,
    // backgroundColor: 'blue'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

const cardStyle = StyleSheet.create({
  box: {
    flex: 1,
    width: 130,
    height: 130,
    backgroundColor: '#1A1A40',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold'
  },
  text1: {
    fontSize: 17,
    color: 'white',
  },
});


const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dashboard: {
    backgroundColor: '#FF9F45',
    color: 'white',
    textAlign: 'center',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    width: Dimensions.get('window').width,
  },
  displayContainer: {
    width: Dimensions.get('window').width - 30,
    flex: 1,
    flexDirection: 'row',
    padding: 14,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export {style, styleSplashScreen, cardStyle, HomeStyle};
