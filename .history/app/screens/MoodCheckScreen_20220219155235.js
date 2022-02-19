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
      <View style={styles.box}>
        <TouchableOpacity
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
      </View>
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
    flexDirection: "column", //default
    // width: "100%",
    backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },

  header: {
    // aspectRatio: 3 / 1,
    flex: 1,
  },

  content: {
    // width: "75%",
    // aspectRatio: 2 / 1,
    flex: 2,
    // justifyContent: "center",
    // alignItems: "center",
  },

  footer: {
    // width: "25%",
    // aspectRatio: 3 / 1,
    flex: 1,
  },

  grid: {
    flexDirection: "column",
    width: 300,
    height: 300,
    // aspectRatio: 4 / 1,
    // flex: 1,

    // flexGrow: 1,
    // flexBasis: 100, //height
    // flexShrink: 1,
  },  

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    // flexBasis: 100, //height
    // flexShrink: 1,
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },

  button: {

    // flexGrow: 1,

    // flexBasis: 100, //height
    // flexShrink: 1,
    

  },

  buttonText: {
    alignSelf: "center"
  }
});