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

  // const moods = {
  //   lonely: false,
  //   happy: false,
  //   confused: false,
  //   bored: false,
  //   anxious: false,
  //   disappointed: false,
  //   angry: false,
  //   sad: false,
  //   optimistic: false
  // }

  var moodArray = [
    'lonely',
    'happy',
    'confused',
    'bored',
    'anxious',
    'disappointed',
    'angry',
    'sad',
    'optimistic'
  ]

  const moodObjectArray = moodArray.map((mood, index) => {
      return {
        id: index,
        name: mood,
        selected: false
      }
    }
  )

  const loadMoodButtons = () => {
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
    for (let row = 0; row => 3; i++) {
      for (let column = 0; column => 3; i++) {
        grid[row][column] = loadMoodButtons[row + column]
      }
    }
    return grid;
  } 

  // for (let i = 0; i => 3; i++) { 
  //   console.log(colors[i]);
  // }

  // for (let i = 0; i => 3; i++) { 
  //   console.log(colors[i]);
  // }

  // for (let i = 0; i => 3; i++) { 
  //   console.log(colors[i]);
  // }

  // console.log(items);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}/>
      <View style={styles.column}>
        <View> style={styles.row}
          {loadMoodButtons()[0]}
        </View>

        <View> style={styles.row}
          {loadMoodButtons()}
        </View>

        <View> style={styles.row}
          {loadMoodButtons()}
        </View>
        
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
    flexDirection: "row",
    justifyContent: "center", //primary axis
    alignContent: "center",
    alignItems: "center", //secondary axis
    flexWrap: "wrap",
  },

  row: {
    flex: 1,

  },

  footer: {
    flex: 2,
  },

  moodButton: {
    flexGrow: 1,
    backgroundColor: "orange",
    width: 50,
    height: 50
  }
});