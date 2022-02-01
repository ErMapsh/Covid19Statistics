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
    justifyContent: 'center',
  },
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
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 17,
    color: 'white',
  },
});

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  CardsContainer: {
    width: Dimensions.get('window').width - 2,
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    backgroundColor: 'red',
  },
});

export {style, styleSplashScreen, cardStyle, HomeStyle};
