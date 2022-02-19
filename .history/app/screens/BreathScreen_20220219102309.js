import React from 'react'
import { StyleSheet, View, SafeAreaView, Platform, StatusBar } from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import colors from '../config/colors';

export default function BreathScreen({navigation, route}) {

  console.log("Welcome " + route.params.name)
  console.log("Follow Along Breathing Screen.");

  const { height, width} = useDimensions();
  const landscape = width > height;

  return (
    <SafeAreaView style={styles.container}>    
      <View style={styles.moodContainer}>
        
      </View>
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
  moodContainer: {
    flex: 3,

  }
});