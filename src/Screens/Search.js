import React, { useState, useContext, useEffect } from 'react';
import {
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Dimensions,
  Modal
} from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Search() {
  const [DateByApi, setDateByApi] = useState('')
  const [search, setsearch] = useState('');
  const [StateData, setStateData] = useState([])//this is main master data
  const [FilterData, setFilterData] = useState([
    {
    "state": "Andaman and Nicobar",
    "_id": 1,
    "Total_Confirmed": 10032,
    "Discharged": 9901,
    "Deaths": 129
    },
    {
    "state": "Andhra Pradesh",
    "_id": 2,
    "Total_Confirmed": 2319407,
    "Discharged": 2304248,
    "Deaths": 14730
    },
    {
    "state": "Arunachal Pradesh",
    "_id": 3,
    "Total_Confirmed": 64484,
    "Discharged": 64187,
    "Deaths": 296
    },
    {
    "state": "Assam",
    "_id": 4,
    "Total_Confirmed": 724195,
    "Discharged": 716193,
    "Deaths": 6639
    },
    {
    "state": "Bihar",
    "_id": 5,
    "Total_Confirmed": 830448,
    "Discharged": 818159,
    "Deaths": 12256
    },
    {
    "state": "Chandigarh",
    "_id": 6,
    "Total_Confirmed": 91903,
    "Discharged": 90715,
    "Deaths": 1165
    },
    {
    "state": "Chhattisgarh",
    "_id": 7,
    "Total_Confirmed": 1152038,
    "Discharged": 1137864,
    "Deaths": 14034
    },
    {
    "state": "Dadra and Nagar Haveli and Daman and Diu",
    "_id": 8,
    "Total_Confirmed": 11441,
    "Discharged": 11437,
    "Deaths": 4
    },
    {
    "state": "Delhi",
    "_id": 9,
    "Total_Confirmed": 1864358,
    "Discharged": 1837742,
    "Deaths": 26150
    },
    {
    "state": "Goa",
    "_id": 10,
    "Total_Confirmed": 245267,
    "Discharged": 241403,
    "Deaths": 3830
    },
    {
    "state": "Gujarat",
    "_id": 11,
    "Total_Confirmed": 1223845,
    "Discharged": 1212621,
    "Deaths": 10942
    },
    {
    "state": "Haryana",
    "_id": 12,
    "Total_Confirmed": 984924,
    "Discharged": 973923,
    "Deaths": 10603
    },
    {
    "state": "Himachal Pradesh",
    "_id": 13,
    "Total_Confirmed": 284459,
    "Discharged": 280115,
    "Deaths": 4132
    },
    {
    "state": "Jammu and Kashmir",
    "_id": 14,
    "Total_Confirmed": 284459,
    "Discharged": 280115,
    "Deaths": 4132
    },
    {
    "state": "Jharkhand",
    "_id": 15,
    "Total_Confirmed": 435111,
    "Discharged": 429720,
    "Deaths": 5315
    },
    {
    "state": "Karnataka",
    "_id": 16,
    "Total_Confirmed": 3945168,
    "Discharged": 3903286,
    "Deaths": 40048
    },
    {
    "state": "Kerala",
    "_id": 17,
    "Total_Confirmed": 6530150,
    "Discharged": 6457300,
    "Deaths": 67631
    },
    {
    "state": "Ladakh",
    "_id": 18,
    "Total_Confirmed": 28218,
    "Discharged": 27968,
    "Deaths": 228
    },
    {
    "state": "Lakshadweep",
    "_id": 19,
    "Total_Confirmed": 11402,
    "Discharged": 11350,
    "Deaths": 52
    },
    {
    "state": "Maharashtra",
    "_id": 20,
    "Total_Confirmed": 7873231,
    "Discharged": 7724560,
    "Deaths": 147779
    },
    {
    "state": "Manipur",
    "_id": 21,
    "Total_Confirmed": 137070,
    "Discharged": 134917,
    "Deaths": 2120
    },
    {
    "state": "Meghalaya",
    "_id": 22,
    "Total_Confirmed": 93754,
    "Discharged": 92110,
    "Deaths": 1593
    },
    {
    "state": "Mizoram",
    "_id": 23,
    "Total_Confirmed": 223647,
    "Discharged": 221693,
    "Deaths": 680
    },
    {
    "state": "Madhya Pradesh",
    "_id": 24,
    "Total_Confirmed": 1040992,
    "Discharged": 1277819,
    "Deaths": 9117
    },
    {
    "state": "Nagaland",
    "_id": 25,
    "Total_Confirmed": 35470,
    "Discharged": 34692,
    "Deaths": 758
    },
    {
    "state": "Odisha",
    "_id": 26,
    "Total_Confirmed": 1287378,
    "Discharged": 1277819,
    "Deaths": 9117
    },
    {
    "state": "Puducherry",
    "_id": 27,
    "Total_Confirmed": 165774,
    "Discharged": 163803,
    "Deaths": 1962
    },
    {
    "state": "Punjab",
    "_id": 28,
    "Total_Confirmed": 759002,
    "Discharged": 741147,
    "Deaths": 17740
    },
    {
    "state": "Rajasthan",
    "_id": 29,
    "Total_Confirmed": 1282833,
    "Discharged": 1272999,
    "Deaths": 9551
    },
    {
    "state": "Sikkim",
    "_id": 30,
    "Total_Confirmed": 39133,
    "Discharged": 38664,
    "Deaths": 451
    },
    {
    "state": "Tamil Nadu",
    "_id": 31,
    "Total_Confirmed": 3452612,
    "Discharged": 3414141,
    "Deaths": 38025
    },
    {
    "state": "Telengana",
    "_id": 32,
    "Total_Confirmed": 791074,
    "Discharged": 786388,
    "Deaths": 4111
    },
    {
    "state": "Tripura",
    "_id": 33,
    "Total_Confirmed": 100871,
    "Discharged": 99951,
    "Deaths": 919
    },
    {
    "state": "Uttar Pradesh",
    "_id": 34,
    "Total_Confirmed": 2070486,
    "Discharged": 2046502,
    "Deaths": 23493
    },
    {
    "state": "Uttarakhand",
    "_id": 35,
    "Total_Confirmed": 437146,
    "Discharged": 428903,
    "Deaths": 7691
    },
    {
    "state": "West Bengal",
    "_id": 36,
    "Total_Confirmed": 2017072,
    "Discharged": 1995137,
    "Deaths": 21197
    }
    ])
  // console.log(search)

  const fetchStateData = async () => {
    try {
      const res = await axios.get('https://ermapsh.github.io/MyAPis/stateData.json')
      // console.log(res.data)
      setStateData(res.data.states);
      setFilterData(res.data.states)
      setDateByApi(res.data.date);
    } catch {
      setStateData({ "error": "Newtork Error" })
    }
  }

  useEffect(() => {
    fetchStateData();
  }, [])


  //for modal
  const [modalVisible, setmodalVisible] = useState(false)
  const [ForModalData, setForModalData] = useState('')
  const OpenModal = (item) => {
    setmodalVisible(true)
    setForModalData(item);
  }


  // for searching
  const SearchFilterFuntion = (text) => {
    if (text) {
      const NewData = StateData.filter((item) => {
        const itemData = item.state ? item.state.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
      setFilterData(NewData);
      setsearch(text);
    } else {
      setFilterData(StateData);
      setsearch(text)
    }
  }
  return (
    <View style={style.main} >
      {/* Text Input */}
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={style.ModalBackground}>

          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, }}>
            {/* for close  */}
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <View></View>
              <View>
                <TouchableOpacity onPress={() => { setmodalVisible(false) }}>
                  <Ionicons name="close" size={25} color={'black'} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={style.font}>Date: {DateByApi}</Text>
            <Text style={style.font}>State Name: {ForModalData.state}</Text>
            <Text style={style.font}>Total Confirmed: {ForModalData.Total_Confirmed}</Text>
            <Text style={style.font}>Total Discharged: {ForModalData.Discharged}</Text>
            <Text style={style.font}>Total Deaths: {ForModalData.Deaths}</Text>
          </View>
        </View>
      </Modal>

      <TextInput
        value={search}
        placeholder="Search Here"
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        onChangeText={text => {
          SearchFilterFuntion(text);
        }}
        style={style.textInput}
      />


      <View style={{ height: '90%' }}>
        <FlatList
          data={FilterData}
          renderItem={({ item }) => (

            <View style={style.ctn}>
              <TouchableOpacity onPress={() => {OpenModal(item) }} style={style.   cardContainer}>
                  <Text style={[style.card, style.fontForstate]}>{item.state}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: "#279E97"
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 20,
    borderColor: '#009688',
    backgroundColor: 'white',
    borderRadius: 25,

  },
  card: {
    padding: 8,
    textAlign: 'center',
    shadowColor: 'black',
  },
  cardContainer: {
    margin: 8,
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  ctn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontForstate: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },


  //for modal
  ModalBackground: { flex: 1, 'backgroundColor': 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  font: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "black",
  }
});

