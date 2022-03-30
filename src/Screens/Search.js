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
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { black } from 'react-native-paper/lib/typescript/styles/colors';

export default function Search() {
  const [DateByApi, setDateByApi] = useState('')
  const [search, setsearch] = useState('');
  const [StateData, setStateData] = useState([])//this is main master data
  const [FilterData, setFilterData] = useState([])
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
      <Modal visible={modalVisible} animationType='slide'>
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
              <TouchableOpacity onPress={() => { OpenModal(item) }}>
                <Card style={style.cardContainer}>
                  <Text style={[style.card, style.fontForstate]}>{item.state}</Text>
                </Card>
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
    backgroundColor: "#4FD3C4"
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
  },
  ctn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontForstate: {
    fontSize: 14,
    fontWeight: 'bold'
  },


  //for modal
  ModalBackground: { flex: 1, 'backgroundColor': 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  font: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "black",
  }
});

