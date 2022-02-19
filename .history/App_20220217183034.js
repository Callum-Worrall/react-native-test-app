import * as React from 'react';
import { NavigationContainer, Stack } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
  );
};

export default App;