import React, { useContext, useEffect } from 'react';
import {View, Text} from 'react-native';
import AppContext from '../Context/AppContext'
import {style} from '../Stylesheet/StatStyle';
import DaysVariant from '../component/DaysVariant';

export default function StatCompo() {
  const Context = useContext(AppContext)
  const {Data, fetchApi} = Context;
  //effect use for at least one time to run fetch
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'space-around', }}>
      {/* today Yesterday Total */}
      <DaysVariant/>
      {/* Two stat box */}
      <View style={style.TwoStatContainer}>
        <View style={style.firstStat}>
          <Text style={style.StatBoxHeading}>Affected{'\n'} </Text>
          <Text style={style.StatBoxCount}>{Data.cases}</Text>
        </View>

        <View style={style.secondStat}>
          <Text style={style.StatBoxHeading}>Deaths{'\n'} </Text>
          <Text style={style.StatBoxCount}>{Data.deaths}</Text>
        </View>
      </View>

      {/* three stat box */}
      <View style={style.ThreeStatContainer}>
        <View style={style.thirdStat}>
          <Text style={style.StatBoxHeading}>Recovered {'\n'}</Text>
          <Text style={style.StatBoxCount}>{Data.recovered}</Text>
        </View>

        <View style={style.fourthStat}>
          <Text style={style.StatBoxHeading}>Active {'\n'}</Text>
          <Text style={style.StatBoxCount}>{Data.active}</Text>
        </View>

        <View style={style.fifthStat}>
          <Text style={style.StatBoxHeading}>Serious {'\n'}</Text>
          <Text style={style.StatBoxCount}>{Data.critical}</Text>
        </View>
      </View>
    </View>
  );
}
