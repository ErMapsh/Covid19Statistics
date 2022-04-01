import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Linking, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function About() {
  const CustomWidth = Dimensions.get("window").width;
  const [Students, setStudents] = useState([{
    "name": "Er.Mahesh Anant Mestri",
    "github": "https://github.com/ErMapsh",
    "mail": "maheshmestri73@gmail.com",
    "linkedin": "www.linkedin.com/in/ermapsh",
    "_id": 1,

  },
  {
    "name": "Er.Saurabh Pradeep Pawar",
    "github": "https://github.com/saurabhppawar04",
    "mail": "saurabhppawar04@gmail.com",
    "linkedin": "https://www.linkedin.com/in/saurabh-pawar-3b8409172",
    "_id": 2,
  },
  {
    "name": "Er.Siddhesh Shrikrishna Pednekar",
    "github": "https://github.com/pednekarsiddhesh15",
    "mail": "pednekarsiddhesh15@gmail.com",
    "linkedin": "https://www.linkedin.com/in/siddhesh-pednekar-97a82b221/",
    "_id": 3,
  }])


  // for redirect function
  const forGithub = (url) => {
    Linking.openURL(url);
  }

  const forLinkedin = (url) => {
    Linking.openURL(url);
  }

  const forMail = (url) => {
    Linking.openURL(`mailto:${url}`)
  }



  return (
    <SafeAreaView style={{ backgroundColor: "#279E97", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {Students.map((item) => {
        return (<View key={item._id} style={{ backgroundColor: 'white', height: "20%", width: CustomWidth - 100, margin: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 25, }}>
          <View>
            <Text style={{ fontSize: 18, color: "black" }}>{item.name}</Text>
          </View>
          <View style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between', width: CustomWidth - 250 }}>
            <TouchableOpacity>
              <Ionicons name='logo-github' size={26} color="black" onPress={() => { forGithub(item.github) }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='logo-linkedin' size={26} color="black" onPress={() => { forLinkedin(item.linkedin) }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name='mail' size={26} color="black" onPress={() => { forMail(item.mail) }} />
            </TouchableOpacity>
          </View>
        </View>)
      })}
      <View>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Version: @1.0.0</Text>
      </View>
    </SafeAreaView>


  );
}


const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  text: {
    fontWeight: 'bold',
    fontSize: 45,
  },
  itemStyle: {
    padding: 10,
  }
}
)