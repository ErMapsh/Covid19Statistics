import React, { useEffect, useContext, useState, Component } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Dimensions, } from 'react-native';
import axios from 'axios';
import AppContext from '../Context/AppContext'

export default function LineChartDev() {
  const context = useContext(AppContext);
  const { GraphData, getDataCountry } = context;

  useEffect(() => {
    getDataCountry();
  }, [])

  return (
    <View>
      <LineChart
        data={GraphData}
        width={Dimensions.get("window").width - 30} // from react-native
        height={180}
        // yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // backgroundColor: "#e26a00",
          // backgroundGradientFrom: "#fb8c00",
          // backgroundGradientTo: "#ffa726",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "2",
            strokeWidth: "1",
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
