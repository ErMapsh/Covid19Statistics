import {style} from '../Stylesheet/style'
import {ImageBackground} from 'react-native';
import React from 'react';


export default function BgImage(props) {
  return (
    <View>
        <ImageBackground
        source={require('../img/new.jpg')}
        resizeMode="cover"
        style={style.backgroundImage}
      />
    </View>
  );
}
