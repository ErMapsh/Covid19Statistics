import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Card from '../component/Card';
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
        <View style={{marginHorizontal: 12, marginVertical: 8}}>
          <Ionicons name="reorder-two" size={35} color={'white'} />
        </View>

        {/* Statistics heading */}
        <View style={style.stats}>
          <View>
            <Text style={style.StatText}>Statistics</Text>
          </View>
          <View></View>
        </View>

        {/* Global and My Country Button */}
        <View style={style.GlobalCountry}>
          <View style={style.MyCountryBtn}>
            <Text>My Country</Text>
          </View>
          <View style={style.MyGlobalBtn}>
            <Text>Global</Text>
          </View>
        </View>
        
      </View>

      {/* map area */}
      <View style={style1.secondContainer}></View>
    </View>
  );
}
