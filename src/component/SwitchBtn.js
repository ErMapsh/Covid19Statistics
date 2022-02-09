import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AppContext from '../Context/AppContext';
import {style} from '../Stylesheet/StatStyle';

export default function SwitchBtn() {
  const Context = useContext(AppContext);
  const {HandleOnGlobal, HandleOnMyCountry, BtnValue} = Context;
  return (
    <View style={style.TwoBtn}>
      <TouchableOpacity
        style={{width: '48%'}}
        onPress={() => HandleOnMyCountry()}>
        <Text style={BtnValue === 1 ? style.Btn : style.Btn1}>MyCountry </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width: '48%'}} onPress={() => HandleOnGlobal()}>
        <Text style={BtnValue === 1 ? style.Btn1 : style.Btn}>Global</Text>
      </TouchableOpacity>
    </View>
  );
}
