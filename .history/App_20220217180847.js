import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BreathScreen"
          component={BreathScreen}
          // options={{ title: 'Just breath...' }}
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