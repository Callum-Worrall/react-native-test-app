import React, {useState} from 'react'
import {
  StyleSheet, Platform, StatusBar,
  View, SafeAreaView,
  TouchableOpacity, Text } from 'react-native'
import {
  useDimensions, useDeviceOrientation
} from '@react-native-community/hooks';

import colors from '../config/colors';

import MoodButton from '../components/MoodButton'

export default function MoodGrid(props) {
  
  const moods = [
    'Lonely', 'Happy', 'Confused',
    'Bored', 'Anxious', 'Disappointed',
    'Angry', 'Sad', 'Optimistic'
  ]

  const createMoodButtons = () => {
    console.log("Create Mood Buttons")
    return moods.map((mood, index) => (
      <MoodButton key={index} id={index} name={mood} selected={false}/>
    ))
  }

  const createRow = (buttonArray, rowNum) => {    
    console.log("Row: ", rowNum, " created.")
    return(
    <View style={styles.row}>
      {buttonArray[rowNum + 0]}
      {buttonArray[rowNum + 1]}
      {buttonArray[rowNum + 2]}
    </View>
    )
  }

  const buttonArray = createMoodButtons();

  return (
    <View style={styles.buttonGrid}>
      {createRow(buttonArray, 0)}
      {createRow(buttonArray, 1)}
      {createRow(buttonArray, 2)}
    </View>
  )
}

const styles = StyleSheet.create({

  buttonGrid: {
    flex: 5,
    width: 340,
    height: 418,
    backgroundColor: "#60195B",
    justifyContent: "space-evenly",
    alignItems: "stretch"
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});