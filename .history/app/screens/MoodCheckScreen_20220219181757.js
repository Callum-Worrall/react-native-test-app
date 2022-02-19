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
      <View style={[styles.navbar, styles.topNavbar]}><Text>Top Navbar</Text></View>
      <View style={styles.content}>
        <View style={styles.selectionPrompt}>
          <Text>How are you feeling?</Text>
        </View>
        {createGrid()}
        <View style={styles.continue}><Text>Continue</Text></View>
      </View>      
      <View style={[styles.navbar, styles.bottomNavbar]}><Text>Bottom Navbar</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center', //vertical
    alignItems: 'center', //horizontal
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },

  navbar: {
    flex: 1,
    width: 350,
    backgroundColor: "green",
  },

  selectionPrompt: {
    flex: 1,
    fontSize: 24,
    width: 350,
    justifyContent: 'center',
    backgroundColor: "red",
  },

  content: {
    flex: 10,
    backgroundColor: "blue",
  },
  
  continue: {
    flex: 1,
    width: 350,
    backgroundColor: "red",
    flexDirection: "row-reverse",
    alignItems: "center",
    // alignItems: "flex-end"
  },
  
  topNavbar: {
    flexDirection: "row",
    justifyContent: 'center', //horizontal
    alignItems: 'center', //vertical
  },

  bottomNavbar: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"
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