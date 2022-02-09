// import axios from 'axios';



// class LineChartDev extends Component {
//   state = {
//     datasource:[]
//   };
  

//   LineChart_Dynamic = () => {
//     if (this.state.datasource) {
//       if (this.state.datasource.length) {
//         return (
//           <View>
//             <Text>Bezier Line Chart</Text>
//             <LineChart
//               data={{
//                 labels: [],
//                 datasets: [
//                   {
//                     data: this.state.datasource.map(item => {
//                       return item.value;
//                     }),
//                   },
//                 ],
//               }}
//               width={Dimensions.get('window').width} // from react-native
//               height={220}
//               yAxisLabel="students"
//               yAxisSuffix="k"
//               yAxisInterval={1} // optional, defaults to 1
//               chartConfig={{
//                 backgroundColor: '#e26a00',
//                 backgroundGradientFrom: '#fb8c00',
//                 backgroundGradientTo: '#ffa726',
//                 decimalPlaces: 2, // optional, defaults to 2dp
//                 color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//                 style: {
//                   borderRadius: 16,
//                 },
//                 propsForDots: {
//                   r: '6',
//                   strokeWidth: '2',
//                   stroke: '#ffa726',
//                 },
//               }}
//               bezier
//               style={{
//                 marginVertical: 8,
//                 borderRadius: 16,
//               }}
//             />
//           </View>
//         );
//       } else {
//         return (
//           <View
//             style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
//             <ActivityIndicator size="large" />
//           </View>
//         );
//       }
//     } else {
//       return (
//         <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
//           <Text>no data found</Text>
//         </View>
//       );
//     }
//   };

//   //fetching data from here
//   FetchData = async () => {
//     try {
//       const response = await fetch('https://disease.sh/v3/covid-19/historical/india?lastdays=30');
//       const json = await response.json();
//       console.log(json.timeline.cases)
//       this.setState({datasource : json.timeline.cases});
//       console.log(this.datasource)

//     } catch (err) {
//       console.log(err);
//     }
//   };


//   /*componentDidMount will execute the function when the screen is mounted.*/
//   componentDidMount = () => {
//     this.FetchData();
//   };

//   render() {
    
//     return <View>{this.LineChart_Dynamic()}</View>;
//   }
// }
