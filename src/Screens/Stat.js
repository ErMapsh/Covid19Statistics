import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Card from '../component/Card';
import {HomeStyle} from '../Stylesheet/style';
import axios from 'axios';

export default function Stat() {
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
    <View style={HomeStyle.container}>
      <View style={HomeStyle.CardsContainer}>
        <Card name="Active" data={Data.active} />
        <Card name="Recoverd" data={Data.recovered} />
        <Card name="Deaths" data={Data.deaths} />
      </View>
    </View>
  );
}
