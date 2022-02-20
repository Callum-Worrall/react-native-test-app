import React from 'react'
import {
  StyleSheet, SafeAreaView, Platform, StatusBar,
  Text
} from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import colors from '../config/colors';
import { useStore } from '../stores/Store';
// import { toggleSelectMood } from '../stores/actions';

export default IndexScreen = ({ navigation }) => {

  const { height, width } = useDimensions();
  const landscape = width > height;

  console.log("Index Screen");
  const [state] = useStore();
  const { moods } = state;

  // console.log({moods})

  let selectedMoods = []
  moods.forEach((mood) => {
    if (mood.selected) {
      selectedMoods.push(mood.type);
    }
  })

  console.log({ selectedMoods })

  let insertString = ""

  switch (selectedMoods.length) {
    case 1:
      console.log("Hit Case 1")
      insertString = selectedMoods[0]
      break;

    case 2:
      console.log("Hit Case 2")
      insertString = (selectedMoods[0] + " and " + selectedMoods[1])
      break;

    case 3:
      console.log("Hit Case 3")
      insertString = (selectedMoods[0] + ", " + selectedMoods[1] + " and " + selectedMoods[2])
      break;

    case 0:
      console.error("No mood has been selected.")
      break;

    default:
      insertString = "You seem to have a lot going on, what's up?"
  }

  console.log("Insert String:", insertString)


  return (
    <ScreenWrapper>
      <Text>
        {/* "Why are you feeling [moods] ?" */}
        "Why are you feeling {insertString} ?"
      </Text>
    </ScreenWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },
});