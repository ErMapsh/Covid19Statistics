import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {style} from '../Stylesheet/StatStyle'

export default function DaysVariant() {
  return (
    <View style={{paddingVertical: '5%'}}>
      <View style={style.DaysVariant}>
        <TouchableOpacity>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Total</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Yesterday</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
