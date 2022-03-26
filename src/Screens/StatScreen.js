import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style, style1} from '../Stylesheet/StatStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import GraphChart from '../component/GraphChart';
import StatCompo from '../component/StatCompo';
import SwitchBtn from '../component/SwitchBtn';

export default function StatScreen() {
  return (
    <View style={style.container}>
      <View style={style.FirstContainer}>
        <Ionicons name="reorder-two" size={35} color={'white'} />
        <View style={style.StatBtnStats}>
          {/* heading */}
          <View>
            <Text style={style.StatHeading}>Statistics</Text>
          </View>
          {/* Button */}
          <SwitchBtn />
          {/* StatBox */}
          <StatCompo />
        </View>
      </View>

      {/* Second container */}
      <View style={style1.secondContainer}>
        <Text style={style1.secondContainerHeadline}>Last 30 Days Cases</Text>
        <GraphChart/>
      </View>
    </View>
  );
}
