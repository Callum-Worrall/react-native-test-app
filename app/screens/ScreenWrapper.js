import React, {useState} from 'react'

import {
  StyleSheet, Platform, StatusBar,
  View, SafeAreaView,
  Text } from 'react-native'

import { useDeviceOrientation } from '@react-native-community/hooks';

export default ScreenWrapper = ({navigation, children}) => {

  console.log("Loading Screen Wrapper");
  const {landscape} = useDeviceOrientation();
  
  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.navbar, styles.topNavbar]}><Text>Top Navbar</Text></View>
      <View style={styles.content} navigation={navigation}>
        {children}
      </View>      
      <View style={[styles.navbar, styles.bottomNavbar]}><Text>Bottom Navbar</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center', //vertical
    alignItems: 'center', //horizontal
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },

  navbar: {
    flex: 1,
    width: 350,
    backgroundColor: "green",
  },

  content: {
    flex: 10,
    backgroundColor: "blue",
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