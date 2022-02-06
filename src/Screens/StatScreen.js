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
      // console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={style.container}>
      {/* stat area */}
      <View style={style.firstContainer}>
        <View style={style.barAndBell}>
          <Ionicons name="reorder-two" size={35} color={'white'} />
          <Ionicons name="notifications" size={25} color={'white'} />
        </View>

        <View style={style.HeadingButtonCards}>
          {/* Statistics heading */}
          <View>
            <Text style={style.HeadingText}>Statistics</Text>
          </View>

          {/* Button */}
          <View style={style.MyCountryGlobal}>
            <TouchableOpacity>
              <Text style={style.btn}>MyCountry</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={style.btn}>Global</Text>
            </TouchableOpacity>
          </View>

          {/* Information in boxes */}
          <View style={style.StatContainer}>
            <View>
              <Text style={{textAlign: 'center'}}>Total</Text>
            </View>

            <View style={style.twoBox}>
              <View style={style.firstBox}>
                <Text style={style.boxesStatText}>Affected {'\n'} </Text>
                <Text style={style.boxesStatText1}>{Data.cases}</Text>
              </View>
              <View style={style.SecondBox}>
                <Text style={style.boxesStatText}>Deaths {'\n'} </Text>
                <Text style={style.boxesStatText1}>{Data.deaths}</Text>
              </View>
            </View> 

            <View style={style.ThreeBox}>
              <View style={style.thirdBox}>
                <Text style={style.threeBoxText}>Recovered</Text>
                <Text style={style.threeBoxText1}>{Data.recovered}</Text>
              </View>
              <View style={style.fourthBox}>
                <Text style={style.threeBoxText}>Active</Text>
                <Text style={style.threeBoxText1}>{Data.active}</Text>
              </View>
              <View style={style.fifthBox}>
                <Text style={style.threeBoxText}>Deaths</Text>
                <Text style={style.threeBoxText1}>{Data.deaths}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* map area */}
      <View style={style1.secondContainer}></View>
    </View>
  );
}
