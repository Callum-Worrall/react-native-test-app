import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
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


  data = moods.eachAndIndex[((mood, index) => {return {id: index, name: mood, selected: false}})

  // var data = {items: [
  //   { itemClass: 'Item', id: 1, contentsHTML: '', text: 'Item 1'},
  //   { itemClass: 'Item', id: 2, contentsHTML: '', text: 'Item 2'},
  //   { itemClass: 'Item', id: 3, contentsHTML: '', text: 'Item 3'},
  //   { itemClass: 'Item', id: 4, contentsHTML: '', text: 'Item 4'},
  //   { itemClass: 'Item', id: 5, contentsHTML: '', text: 'Item 5'}
  //   ]};

  var moodButtons = moods.map(function(moods) {
    var component = Components[moods['name']];
    return React.createElement(component, {
        name: moods.name,
        key: moods['id']
    });
  });

  return (
    <SafeAreaView style={styles.container}>    
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },
});