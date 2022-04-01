import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions,
} from 'react-native';
import {style, style1} from '../Stylesheet/HomeStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryFlag from 'react-native-country-flag';
import call from 'react-native-phone-call';

export default function HomeScreen() {
  //call
  const OnPressCall = () => {
    Linking.openURL(`tel:${+911123978046}`)
  };

  //site link
  const OnPressSite = () => {
    Linking.openURL('https://www.cowin.gov.in/');
  };

  return (
    <View style={style.container}>
      {/* first container */}
      <View style={style.firstContainer}>
        {/* Menu Bar icon */}
        <View>
          <Ionicons name="reorder-two" size={35} color={'white'} />
        </View>

        {/* App name and India flag */}
        <View style={style.NameFlagSickCall}>
          {/* stat and flag */}
          <View style={style.StatFlag}>
            {/* stat */}
            <View>
              <Text style={style.AppName}>Covid-19 Statistics</Text>
            </View>

            {/* flag */}
            <View style={style.ImgContainer}>
              <CountryFlag isoCode="in" size={35} style={style.CountryImg} />
              <Text style={{fontWeight: 'bold', fontSize: 15, color: "black"}}>IND</Text>
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

      {/* second container */}
      <View style={style1.SecondContainer}>
        {/* Prevention headline */}
        <View style={style1.PreventionText}>
          <Text style={style1.PreventionText}>Prevention</Text>
        </View>

        {/* Prevention Images and text */}
        <View style={style1.PreventionImageContainer}>
          <View style={style1.ImageAndText}>
              <Image
                source={require('../img/new2/face-mask.png')}
                style={style1.ImgSize}
              />
              <Text style={style1.ImgText}> Wear a facemask</Text>
            </View> 

          <View style={style1.ImageAndText}>
              <Image
                source={require('../img/new2/soap.png')}
                style={style1.ImgSize}
              />
              <Text style={style1.ImgText}>Clean your hands often </Text>
            </View>

          <View style={style1.ImageAndText}>
              <Image
                source={require('../img/new2/social-distancing.png')}
                style={style1.ImgSize}
              />
              <Text style={style1.ImgText}>Avoid close contact</Text>
            </View>
        </View>

        {/* vacination part */}
        <View style={style1.VaccinationContainer}>
          <Image
              source={require('../img/new/vaccinated.jpg')}
              style={style1.VaccineImgSize}
            />
            <View style={style1.textArea}>
              <Text style={style1.vaccineQuotes1}>Get Vaccinated.</Text>
              <Text style={style1.vaccineQuotes}>Do your part.</Text>
              <Text style={style1.vaccineQuotes}>Protect yourself.</Text>
              <Text style={style1.vaccineQuotes}>Protect others.</Text>
            </View> 
        </View>
      </View>
    </View>
  );
}
