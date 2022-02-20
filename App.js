import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import ScreenWrapper from './app/screens/ScreenWrapper';

/// Context ///
import { StoreProvider } from './app/stores/Store'
// import { initialState, reducer } from './app/stores/selectMoodTableReducer';
import { initialState, reducer } from './app/stores/moodTableReducer';

// import {
//   initialState, 
//   moodReducer,
//   Context
// } from './app/stores/stores'

const Stack = createNativeStackNavigator();
import SplashScreen from './app/screens/SplashScreen'
import BreathScreen from './app/screens/BreathScreen'
import MoodCheckScreen from './app/screens/MoodCheckScreen'
import IndexScreen from './app/screens/IndexScreen'

// //Stack Navigator with Wrapper

// const ScreenWrappedStackNavigator = createStackNavigator({
//   MoodCheckScreen: {screen: MoodCheckScreen,},
//   IndexScreen: { screen: IndexScreen }
// }, {initialRouteName: 'IndexScreen'})

// const RootTabNavigator = createBottomTabNavigator({
//   Settings: {screen: SettingsStackNavigator },
// });

// const AppContainer = createAppContainer(RootTabNavigator);
// //


const createWrapper = (name, component) => {
  return (
    <ScreenWrapper>
      <Stack.Screen name={name} component={component} />
    </ScreenWrapper>
  )
}

export const App = () => {

  console.log("App - Initial State:", initialState)

  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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
          {/* {createWrapper("IndexScreen", IndexScreen)} */}
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;