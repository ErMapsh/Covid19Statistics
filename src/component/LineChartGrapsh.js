import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart,} from 'react-native-chart-kit';

export default class LineChartGrapsh extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    };
  }

  componentDidMount(){
    fetch('https://disease.sh/v3/covid-19/historical/india?lastdays=30')
      .then(response => response.json())
      .then(data => this.setState({ data: data.timeline.cases, loading: true }));
  }
  render() {
    return (
      <View>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: this.state.data
              },
            ],
          }}
          width={Dimensions.get('window').width - 20} // from react-native
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
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  }
}
