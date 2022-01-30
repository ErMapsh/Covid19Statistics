import React from 'react';
import {View, Image, Text, StatusBar} from 'react-native';
import {styleSplashScreen} from '../../assets/style';

export default function SplashScreen() {

  return (
    <View style={styleSplashScreen.container}>
      <StatusBar hidden={true} />
      <View></View>

      <View style={styleSplashScreen.logoContainer}>
        <Image
          source={require('../../assets/img/new-icon.png')}
          style={styleSplashScreen.logo}
        />
        <Image source={require('../../assets/img/ic1.png')} />
      </View>

      <View>
        <Text style={styleSplashScreen.text}>Made In India</Text>
      </View>
    </View>
  );
}
