import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, TextInput} from 'react-native';
import {style} from '../Stylesheet/SearchStyle';
import axios from 'axios';

export default function Search() {
  const [data, setdata] = useState([]);
  const [MasterData, setMasterData] = useState([]);
  const [Search, setSearch] = useState('');
  const fetchapi = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(res.data);
      setdata(res.data);
      setMasterData(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const ItemView = ({item}) => {
    return (
      <Text style={{padding: 10, fontWeight: 'bold'}}>
        {item.id}
        {'. '}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorComponent = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}} />
    );
  };
  const searchFilter = text => {
    if (text) {
      const NewData = data.filter(item => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setdata(NewData);
      setSearch(text)
    }else{
      setdata(MasterData);
      setSearch(text) 
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white'}}>
        <TextInput
          value={Search}
          placeholder="Search Here"
          underlineColorAndroid="transparent"
          onChangeText={text => {
            searchFilter(text);
          }}
          style={{
            height: 40,
            borderWidth: 1,
            paddingLeft: 20,
            margin: 20,
            borderColor: '#009688',
            backgroundColor: 'white',
            borderRadius: 25,
          }}
        />
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
}
