import React, { useState } from 'react'
import {
  StyleSheet, Platform, StatusBar,
  View, SafeAreaView,
  TouchableOpacity, Text
} from 'react-native'
import {
  useDimensions, useDeviceOrientation
} from '@react-native-community/hooks';

import colors from '../config/colors';

import MoodButton from './MoodButton'

import { moodStringArray } from '../stores/schema/Mood'

export default function MoodGrid({ toggleSelectHandler }) {

  const createMoodButtons = () => {
    // (console.log("MoodGrid.js, createMoodButtons() - Array Check for Map: ", moodStringArray))
    const moodButtons = moodStringArray.map((mood, index) => (
      <MoodButton key={index} index={index} moodType={mood} toggleSelectHandler={toggleSelectHandler} />
    ))
    return (moodButtons)
  }

  const buttonArray = createMoodButtons();

  const createRow = (buttonArray, rowNum) => {
    // console.log("Row: ", rowNum, " created.")
    return (
      <View style={styles.row}>
        {buttonArray[rowNum + 0]}
        {buttonArray[rowNum + 1]}
        {buttonArray[rowNum + 2]}
      </View>
    )
  }

  return (
    <View style={styles.buttonGrid}>
      {createRow(buttonArray, 0)}
      {createRow(buttonArray, 3)}
      {createRow(buttonArray, 6)}
    </View>
  )
}

const styles = StyleSheet.create({

  buttonGrid: {
    flex: 5,
    width: 340,
    height: 418,
    backgroundColor: colors.moodPurple,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "stretch"
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});