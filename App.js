import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/// Context ///
import { StoreProvider } from './app/stores/store'
import { initialState, reducer } from './app/stores/moodTableReducer';

import ScreenWrapper from './app/components/ScreenWrapper';
const Stack = createNativeStackNavigator();
import SplashScreen from './app/screens/ScreenTemplate'
import BreathScreen from './app/screens/BreathScreen'
import MoodCheckScreen from './app/screens/MoodCheckScreen'
import IndexScreen from './app/screens/IndexScreen'

export const App = () => {

  console.log("App - Initial State:", initialState)

  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
          />
          <Stack.Screen
            name="BreathScreen"
            component={BreathScreen}
          />
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
    </StoreProvider>
  );
};

export default App;