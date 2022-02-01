import React from 'react';
import {View, Text} from 'react-native';
import {cardStyle} from '../Stylesheet/style'

export default function Card(props) {
  return (
    <View style={cardStyle.box}>
        <Text style={cardStyle.text}>{props.name}</Text>
        <Text style={cardStyle.text1}>{props.data}</Text>
    </View>
  );
}

