import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';
import {style, style1} from '../Stylesheet/HomeStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryFlag from 'react-native-country-flag';
import call from 'react-native-phone-call';

export default function HomeScreen() {
  //call
  const args = {
    number: '+911123978046', // String value with the number to call
    prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
  };
  const OnPressCall = () => {
    call(args).catch(console.error);
  };

  //site link
  const OnPressSite = () => {
    Linking.openURL('https://www.cowin.gov.in/');
  };
  return (
    <View style={style.container}>
      
      {/* first container */}
      <View style={style.firstContainer}>
        <View>
          <Ionicons name="reorder-two" size={35} color={'white'} />
        </View>

        <View style={style.NameFlagSickCall}>
          {/* stat and flag */}
        <View style={style.StatFlag}>
          {/* stat */}
          <View>
            <Text style={style.Statistics}>Covid-19 Statistics</Text>
          </View>

          {/* flag */}
          <View style={style.ImgContainer}>
            <CountryFlag isoCode="in" size={35} style={style.CountryImg} />
            <Text style={{fontWeight: 'bold'}}>IND</Text>
          </View>
        </View>

        {/* note */}
        <View style={style.Sick}>
          <Text style={style.SickText1}>Are you feeling sick?</Text>
          <Text style={style.SickText2}>
            If you feel sick with any of covid-19 symptoms please call
            immediately for help or checkout the site for vaccination.
          </Text>
        </View>

        {/* call and link */}
        <View style={style.helpline}>
          {/* call */}
          <TouchableOpacity style={style.call} onPress={() => OnPressCall()}>
            <Ionicons name="call" color={'white'} size={25} />
            <Text style={style.helptext}>Call Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.link} onPress={() => OnPressSite()}>
            <Ionicons name="planet" color={'white'} size={25} />
            <Text style={style.helptext}>CoWIN</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>

      
    </View>
  );
}
