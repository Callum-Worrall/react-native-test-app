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
    console.log("Loading Mood Buttons for Selection: ")//, moodArray)
    return moodObjectArray.map((mood, index) => (
      <TouchableOpacity key={index}
        onPress={() => {
          mood.selected = !mood.selected;
          console.log(mood.name + (
            mood.selected ? " selected." :  " unselected.")
          )
        }}
      >
        <View style={styles.moodButton}>
          <Text>{mood.name}</Text>
        </View>
        
      </TouchableOpacity>
    ))
  }

  const createRow = (buttonArray, rowNum) => {    
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
      <View style={styles.column}>
        {createRow(buttonArray, 0)}
        {createRow(buttonArray, 1)}
        {createRow(buttonArray, 2)}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}/>
        {createGrid()}
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

  grid: {
    flex: 1,
    flexDirection: "column",
    // width: '100%',
  },

  row: {
    flexGrow: 1,
    flexDirection: "row",
    // height: '25%'
  },

  footer: {
    flex: 2,
  },

  moodButton: {
    flex: 1,
    backgroundColor: "orange",
    // flexGrow: 1,
  }
});