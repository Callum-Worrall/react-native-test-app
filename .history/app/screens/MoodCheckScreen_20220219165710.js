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

export default function MoodCheckScreen({navigation}) {

  console.log("Mood Check In Screen");
  const {landscape} = useDeviceOrientation();

  const moodStringArray = [
    'Lonely', 'Happy', 'Confused',
    'Bored', 'Anxious', 'Disappointed',
    'Angry', 'Sad', 'Optimistic'
  ]

  // const initialState = moodStringArray.map((mood) => {
  //     return {
  //       name: mood,
  //       selected: false
  //     }
  //   }
  // )
  
  // const [moods, setMoods] = useState(initialState);

  // const createMoodButton = (mood, index) => {
  //   return (
    
  //   )
  // }

  const createMoodButtons = () => {
    console.log("Create Mood Buttons")//, moodArray)
    return moodStringArray.map((mood, index) => (
      <MoodButton key={} id={} name={} selected={} =>
    ))
  }

  const createGrid = () => {
    const buttonArray = createMoodButtons();
    return(
      <View style={styles.grid}>
        {createRow(buttonArray, 0)}
        {createRow(buttonArray, 1)}
        {createRow(buttonArray, 2)}
      </View>
    )
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

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}/>
      <View style={styles.content}>
        {createGrid()}
      </View>
      <View style={styles.footer}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },

  header: {
    flex: 1,
  },

  content: {
    flex: 2,
  },

  footer: {
    flex: 1,
  },

  grid: {
    width: 300,
    height: 300,
  },  

  row: {
    flexDirection: "row",
    justifyContent: "center",
  }
});