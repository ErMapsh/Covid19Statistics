import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppState from './src/Context/AppState';

//importing
import StackNavi from './src/navigation/StackNavi';

export default function App() {
  return (
    <>
      <AppState>
        <NavigationContainer>
          <StackNavi />
        </NavigationContainer>
      </AppState>
    </>
  );
}
