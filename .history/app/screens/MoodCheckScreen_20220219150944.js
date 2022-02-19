import React from 'react'
import {
  StyleSheet, Platform, StatusBar,
  View, SafeAreaView,
  TouchableOpacity, Text } from 'react-native'
import {
  useDimensions, useDeviceOrientation
} from '@react-native-community/hooks';

import colors from '../config/colors';

export default function MoodCheckScreen({navigation}) {

  console.log("Mood Check In Screen");

  const { height, width} = useDimensions();
  const landscape = width > height;

  const moodArray = [
    'lonely', 'happy', 'confused',
    'bored', 'anxious', 'disappointed',
    'angry', 'sad', 'optimistic'
  ]

  const moodObjectArray = moodArray.map((mood) => {
      return {
        name: mood,
        selected: false
      }
    }
  )

  const createMoodButtons = () => {
    console.log("Create Mood Buttons")//, moodArray)
    return moodObjectArray.map((mood, index) => (
      <TouchableOpacity style={[styles.moodButton], {backgroundColor: "orange"}}
        key={index}
        onPress={() => {
          mood.selected = !mood.selected;
          console.log(mood.name + (
            mood.selected ? " selected." :  " unselected.")
          )
        }}
      >
        <Text style={styles.buttonText}>{mood.name}</Text>        
      </TouchableOpacity>
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

  return (
    <SafeAreaView style={styles.screen}>
      {/* <View style={styles.header}/> */}
        {createGrid()}
      {/* <View style={styles.footer}/> */}
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

  // header: {
  //   flex: 1,
  // },

  // footer: {
  //   flex: 2,
  // },

  grid: {
    flex: 1,
    flexDirection: "column",
    // flexBasis: 100,   
    // width: "100%",
    justifyContent: "center",
    flexGrow: 1
    // alignSelf: 'stretch',
    // alignItems: "center"
  },

  row: {
    flex: 1,
    flexDirection: "row",
    flexBasis: 100,
    // justifyContent: "center",
    // alignSelf: 'stretch',
    flexGrow: 1
    // alignContent: "stretch"
    // height: 100,
  },

  button: {
    flex: 1,
    backgroundColor: "orange",
    width: 100,
    height: 100
    // flexDirection: "row",
    // alignSelf: 'stretch',
    // flexGrow: 1
    // alignItems: "center",
    // justifyContent: "center",
    // width: 100,
    // height: 100,
    // justifyContent: "center",
    // textAlign: "center",
    // width: '100%',
    // height: '100%'
    // width: '33.3%',
    // flexBasis: 100,
    // width: 50,
    // height: 50,
    // flexShrink: 1,
    // width: '25%',
    // height: '25%',
    // flexGrow: 1,
  },

  buttonText: {
    alignSelf: "center"
  }
});