import React from 'react'
import { StyleSheet, View, SafeAreaView, Platform, StatusBar, Button } from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

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
    console.log("Loading Mood Buttons for Selection: ", moodArray)
 
    return moodObjectArray.map(mood => (
      <Button key={mood.id}
        style={styles.moodButton}
        color="orange"
        title={mood.name}
        onPress={() => {
          mood.selected = !mood.selected;
          console.log(mood.name + (mood.selected ? " selected." :  " unselected."))
        }}
      />
    ))
  }

  // console.log(items);

  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.header}/>

      {/* <View style={[flex: 2, styles.row]}> */}
      <View style={styles.moodContainer}>
        {loadMoodButtons()}
      </View>

      <View style={{flex: 2}}>

      </View>
      
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

  moodContainer: { //holds rows
    flex: 6,
    flexDirection: "row",
    justifyContent: "center"
    // width: 30
  },

  footer: {
    flex: 1,
  },

  moodButton: {
    color: "orange",
    width: 30,
    height: 30
  }
});