import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import colors from '../config/colors';

export default function MoodCheckScreen({navigation}) {

  console.log("Mood Check In Screen");

  const { height, width} = useDimensions();
  const landscape = width > height;

  const moods = {
    lonely: false,
    happy: false,
    confused: false,
    bored: false,
    anxious: false,
    disappointed: false,
    angry: false,
    sad: false,
    optimistic: false
  }

  var moodButtons = moods.map(function(moods) {
    var component = Components[itemData['itemClass']];
    return React.createElement(component, {
        data: itemData,
        key: itemData['id']
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