import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import color from '../config/colors';

import { useStore } from '../stores/store'

import MoodGrid from '../components/MoodGrid'

export default function MoodCheckScreen({ navigation }) {

  console.log("Mood Check In Screen");

  // React.useEffect(() => { }, [moods]);
  const state = useStore()
  const { moods } = state

  const [selected, setSelected] = React.useState([])

  const toggleSelectHandler = (index) => {
    setSelected(!selected);
  };

  return (
    <ScreenWrapper>

      {/* Ask the user to breath */}
      <View style={styles.selectionPrompt}>
        <Text
          numberOfLines={1}// add this 
          adjustsFontSizeToFit// add this
          style={{ fontSize: 28, margin: 20 }}
        >
          How are you feeling?
        </Text>
      </View>

      <MoodGrid toggleSelectHandler={toggleSelectHandler} />

      {/* Continue Button '>' */}
      <View style={styles.continue}>
        <TouchableOpacity
          onPress={() => navigation.navigate('IndexScreen')} >
          <Text style={styles.continueSymbol} numberOfLines={1} adjustsFontSizeToFit >
            ->
          </Text>

        </TouchableOpacity>
      </View>

    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  selectionPrompt: {
    flex: 1.5,
    width: 350,
    justifyContent: "flex-end",
    // backgroundColor: "red",
  },

  continue: {
    flex: 1.5,
    width: 350,
    // backgroundColor: "red",
    flexDirection: "row-reverse",
    alignItems: "flex-end"
  },

  continueSymbol: {
    fontSize: 28,
    bottom: 10,
    right: 10,
    color: color.moodPurple,
  },
});