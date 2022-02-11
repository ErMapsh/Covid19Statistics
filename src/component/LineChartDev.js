import React, {useEffect, useContext, useState, Component} from 'react';
import {LineChart} from 'react-native-chart-kit';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import axios from 'axios';

// export default class LineChartDev extends Component {

//   state = {datasource:null};

//   //componentDidMount
//   componentDidMount() {
//     this.FetchData();
//   }

//   //fetching data from here
//   FetchData = async () => {

//     try {
//       const response = await fetch('https://disease.sh/v3/covid-19/historical/india?lastdays=30');
//       const json = await response.json();
//       console.log(json.timeline.cases)
//       this.setState({datasource : json.timeline.cases});

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   render() {
//     console.log(this.datasource)
//     return (
//       <View>

//       </View>
//     )
//   }
// }

export default function LineChartDev() {
  const [Data, setData] = useState([]);
 
  // we will use async/await to fetch this data
  const getData = async()=>{
    const response = await axios.get('https://disease.sh/v3/covid-19/historical/india?lastdays=30');
    const valuesInarray = Object.values(response.data.timeline.cases)//returns array
    // console.log(valuesInarray)
    setData(valuesInarray);
  }

  useEffect(() => {
    getData();
  }, []);

 
  return(
  <View>
  <LineChart
    data={{
      labels: [],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
          // data:  Data

        },
      ],
    }}
    width={Dimensions.get("window").width-20} // from react-native
    height={180}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      // backgroundColor: "#e26a00",
      // backgroundGradientFrom: "#fb8c00",
      // backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
    
  </View>
  )
}
