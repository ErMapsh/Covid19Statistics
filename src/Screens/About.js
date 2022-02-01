import React from 'react';
import {View, Text} from 'react-native';
import { style } from '../Stylesheet/style'

export default function About() {
  return (
    <View style={style.container}>
      <Text style={style.text}>About</Text>
    </View>
  );
}