import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//importing screens
import SplashScreen from '../Screens/SplashScreen';
import MBNavigation from '../navigation/MBNavigation';

export default function StackNavi() {
  //creating stack for navigate a screen
  const Stack = createNativeStackNavigator();

  // use UseState for Splash screen
  const [splashScreen, setsplashScreen] = useState(true);

  // Use UseEffect for Splash Screen
  useEffect(() => {
    setTimeout(() => {
      setsplashScreen(false);
    }, 1000);
  }, []);
  return (
    <Stack.Navigator>
      {splashScreen && (
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="MBNavigation"
        component={MBNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
