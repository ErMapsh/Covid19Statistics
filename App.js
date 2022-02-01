import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


//importing 
import StackNavi from './src/navigation/StackNavi';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavi/>
    </NavigationContainer>
  );
}
