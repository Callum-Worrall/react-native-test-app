import React, {useState} from 'react'
import {
  StyleSheet, Platform, StatusBar,
  View, SafeAreaView,
  TouchableOpacity, Text } from 'react-native'
import {
  useDimensions, useDeviceOrientation
} from '@react-native-community/hooks';

import colors from '../config/colors';
import MoodGrid from '../components/MoodGrid'
import MoodButton from '../components/MoodButton'

export default function MoodCheckScreen({navigation}) {

  console.log("Mood Check In Screen");
  const {landscape} = useDeviceOrientation();
  
  return (
    <SafeAreaView style={pageStyles.screen}>
      <View style={[pageStyles.navbar, pageStyles.topNavbar]}><Text>Top Navbar</Text></View>
      <View style={pageStyles.content}>
        <View style={contentStyles.selectionPrompt}>
          <Text
            numberOfLines={1}// add this 
            adjustsFontSizeToFit// add this
            style={{ fontSize: 28, bottom: 20 }}
          >
            How are you feeling?
          </Text>
        </View>
        <MoodGrid style={contentStyles.moodGrid}/>        
        <View style={contentStyles.continue}>
        <TouchableOpacity onPress={() =>
          navigation.navigate('IndexScreen')}><Text
            numberOfLines={1}// add this 
            adjustsFontSizeToFit// add this
            style={{ fontSize: 28, bottom: 10, right: 10 }}//, bottom: 10, left: 10 }}
          >
            ->
          </Text></TouchableOpacity>
        </View>
      </View>      
      <View style={[pageStyles.navbar, pageStyles.bottomNavbar]}><Text>Bottom Navbar</Text></View>
    </SafeAreaView>
  );
}

const pageStyles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center', //vertical
    alignItems: 'center', //horizontal
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },

  navbar: {
    flex: 1,
    width: 350,
    // backgroundColor: "green",
  },

  content: {
    flex: 10,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
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

const contentStyles = StyleSheet.create({  
  selectionPrompt: {
    flex: 1.5,
    width: 350,
    justifyContent: "flex-end",
    // backgroundColor: "red",
  },

  continue: {
    flex: 1.5,
    width: 350,
    // backgroundColor: "red",
    flexDirection: "row-reverse",
    alignItems: "flex-end"
  },
});