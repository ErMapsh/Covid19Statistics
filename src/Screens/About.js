import React from 'react';
import {View, Text} from 'react-native';
import { style } from '../Stylesheet/style'

export default function About() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Info about this app</Text>
    </View>
    
  );

}