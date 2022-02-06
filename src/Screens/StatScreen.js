import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {style, style1} from '../Stylesheet/StatStyle';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function StatScreen() {
  const [Data, setData] = useState([]);
  const url = 'https://disease.sh/v3/covid-19/countries/India';

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data)
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.FirstContainer}>
        <Ionicons name="reorder-two" size={35} color={'white'} style={{}} />

        <View style={style.StatBtnStats}>
          {/* heading */}
          <View
          // style={{borderColor: 'black', borderWidth: 1, height: '10%'}}
          >
            <Text style={style.StatHeading}>Statistics</Text>
          </View>

          {/* Button */}
          <View style={style.TwoBtn}>
            <TouchableOpacity style={{width: '48%'}}>
              <Text style={style.Btn}>MyCountry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: '48%'}}>
              <Text style={style.Btn}>Global</Text>
            </TouchableOpacity>
          </View>

          {/* today Yesterday Total */}
          <View style={style.DaysVariant}>
            <TouchableOpacity>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Total</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Yesterday</Text>
            </TouchableOpacity>
          </View>

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
      <View></View>
    </View>
  );
}
