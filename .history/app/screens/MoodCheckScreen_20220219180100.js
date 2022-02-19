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

  const createMoodButtons = () => {
    console.log("Create Mood Buttons")//, moodArray)
    return moodStringArray.map((mood, index) => (
      // <MoodButton />
      <MoodButton key={index} id={index} name={mood} selected={false}/>
    ))
  }

  const createGrid = () => {
    const buttonArray = createMoodButtons();
    return(
      <View style={gridStyles.buttonGrid}>
        {createRow(buttonArray, 0)}
        {createRow(buttonArray, 1)}
        {createRow(buttonArray, 2)}
      </View>
    )
  }

  const createRow = (buttonArray, rowNum) => {    
    console.log("Row: ", rowNum, " created.")
    return(
    <View style={gridStyles.row}>
      {buttonArray[rowNum + 0]}
      {buttonArray[rowNum + 1]}
      {buttonArray[rowNum + 2]}
    </View>
    )
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.topNavbar}/><Text>Top Navbar</Text>
      <View style={styles.content}>
        <View style={styles.selectionPrompt}>
          <Text>How are you feeling?</Text>
        </View>
        {createGrid()}
      </View>
      <View style={styles.continue}><Text>Continue</Text></View>
      <View style={styles.bottomNavbar}><Text>Bottom Navbar</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "90%",
    backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },

  topNavbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "green",
  },

  selectionPrompt: {
    flex: 1,
    fontSize: 24,
    width: 350,
    justifyContent: 'center',
  },

  content: {
    flex: 6,
  },
  
  continue: {
    flex: 1,
    flexDirection: "row",
  },

  bottomNavbar: {
    flex: 1,
    flexDirection: "row",
  },
});

const gridStyles = StyleSheet.create({
  buttonGrid: {
    flex: 5,
    backgroundColor: "dodgerblue",
    width: 350,
    height: 350,
  },  

  row: {
    flexDirection: "row",
    justifyContent: "center",
  }
});