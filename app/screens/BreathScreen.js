import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper';
import color from '../config/colors';

export default function BreathScreen({ navigation, route }) {

  console.log("Welcome " + route.params.name)
  console.log("Follow Along Breathing Screen.");

  return (
    <ScreenWrapper>

      {/* Breath Button Container */}
      <View style={styles.breathContainer}>

        {/* Breath Button */}
        <TouchableOpacity>
          <Text>Breath</Text>
        </TouchableOpacity>

      </View>

      {/* Skip & Continue Link */}
      <View style={styles.skipAndContinue}>
        <TouchableOpacity onPress={() => navigation.navigate('MoodCheckScreen')} >
          <Text style={{ color: "dodgerblue" }}>Skip & Continue</Text>
        </TouchableOpacity>
      </View>

    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  breathContainer: {
    flex: 3,
    width: 350
  },

  breathBubble: {
    width: 175,
    height: 175,
  },

  skipAndContinue: {
    flex: 3,
  },
});