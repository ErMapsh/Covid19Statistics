import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'; //importing tab navigator
import Ionicons from 'react-native-vector-icons/Ionicons';

// importing screens
import HomeScreen from '../Screens/HomeScreen';
import Search from '../Screens/Search';
import About from '../Screens/About';
import Stat from '../Screens/Stat'

export default function MBNavigation() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    
    <Tab.Navigator initialRouteName="Home" barStyle={{ backgroundColor: '#694fad' }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: () => <SetupIcon name="home" />}}
      />
      <Tab.Screen
        name="Stat"
        component={Stat}
        options={{tabBarIcon: () => <SetupIcon name="stats-chart-outline" />}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{tabBarIcon: () => <SetupIcon name="search-circle" />}}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{tabBarIcon: () => <SetupIcon name="help-circle" />}}
      />
    </Tab.Navigator>
  );
}

const SetupIcon = props => {
  return <Ionicons name={props.name} size={20} color={'white'}/>;
};
