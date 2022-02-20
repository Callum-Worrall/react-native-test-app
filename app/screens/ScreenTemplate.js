import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import colors from '../config/colors';

export default function SplashScreen({ navigation }) {

  console.log("Splash Screen");

  return (
    <ScreenWrapper>
      <View>
        <Button title="Proceed" onPress={() => navigation.navigate('BreathScreen', { name: 'Callum' })} />
        {/* <Button title="Skip & Continue" onPress={() => navigation.ravigate('BreathScreen', { name: 'Callum' })} /> */}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
  }
});