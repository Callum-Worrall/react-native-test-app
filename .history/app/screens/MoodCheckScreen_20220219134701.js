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
    return moodObjectArray.map(mood, index => (
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

  const gridContainer = () => {
    var grid = []
    for (let row = 0; row => 3; row++) {
        grid.push([])
      for (let column = 0; column => 3; column++) {
        grid[row].push(createMoodButtons[row + column])
      }
    }
    return grid;
  }

  const row1 = () => {
    console.log("row created")
    return (
      <View style={styles.row}>{gridContainer[0]}</View>
    )    
  }
  const row2 = () => {
    console.log("row created")
    return (
      <View style={styles.row}>{gridContainer[1]}</View>
    )    
  }
  const row3 = () => {
    console.log("row created")
    return (
      <View style={styles.row}>{gridContainer[2]}</View>
    )    
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}/>
      <View style={styles.column}>
        {row1()}
        {row2()}
        {row3()}
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

  column: { //holds rows
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center", //primary axis
    // alignContent: "center",
    // alignItems: "center", //secondary axis
    // flexWrap: "wrap",
  },

  row: {
    flexGrow: 1,
    flexDirection: "row",
  },

  footer: {
    flex: 2,
  },

  moodButton: {
    backgroundColor: "orange",
    width: 50,
    height: 50
  }
});