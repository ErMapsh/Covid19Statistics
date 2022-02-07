import React, {useEffect, useContext, } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style, style1} from '../Stylesheet/StatStyle';

import Ionicons from 'react-native-vector-icons/Ionicons';
import GraphChart from '../component/GraphChart';
import AppContext from '../Context/AppContext';

export default function StatScreen() {
  const context = useContext(AppContext); //using context
  const {fetchApi, Data, HandleOnMyCountry, HandleOnGlobal, BtnValue} = context; //destructuring 

  //effect use for at least one time to run fetch
  useEffect(() => {
    fetchApi();
  }, []);

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
          <View style={style.TwoBtn}>
            <TouchableOpacity
              style={{width: '48%'}}
              onPress={() => HandleOnMyCountry()}>
              <Text style={BtnValue === 1 ? style.Btn : style.Btn1}>
                MyCountry
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{width: '48%'}}
              onPress={() => HandleOnGlobal()}>
              <Text style={BtnValue === 1 ? style.Btn1 : style.Btn}>
                Global
              </Text>
            </TouchableOpacity>
          </View>


          {/* today Yesterday Total */}
          {/* <View style={style.DaysVariant}>
            <TouchableOpacity>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Total</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Yesterday</Text>
            </TouchableOpacity>
          </View> */}

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
      </View>

      {/* Second container */}
      <View style={style1.secondContainer}>
        <Text style={style1.secondContainerHeadline}>Daily New Cases</Text>
        <GraphChart />
      </View>
    </View>
  );
}
