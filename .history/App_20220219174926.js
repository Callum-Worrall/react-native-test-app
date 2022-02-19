import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

const Stack = createNativeStackNavigator();
import SplashScreen from './app/screens/SplashScreen'
import BreathScreen from './app/screens/BreathScreen'
import MoodCheckScreen from './app/screens/MoodCheckScreen'
import IndexScreen from './app/screens/IndexScreen'


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          name="BreathScreen"
          component={BreathScreen}
        /> */}
        <Stack.Screen
          name="MoodCheckScreen"
          component={MoodCheckScreen}
        />
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;