import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//importing screens
import SplashScreen from './src/Screens/SplashScreen';
import MBNavigation from './src/navigation/MBNavigation'

export default function App() {
  //creating stack for navigate a screen
  const Stack = createNativeStackNavigator();

  // use UseState for Splash screen
  const [splashScreen, setsplashScreen] = useState(true);

  // Use UseEffect for Splash Screen
  useEffect(() => {
    setTimeout(() => {
      setsplashScreen(false)
    }, 4000);
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
          {/* {splashScreen && <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown : false}}/>} */}
          <Stack.Screen name="MBNavigation" component={MBNavigation} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
