import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar, Button } from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import colors from '../config/colors';

export default function SplashScreen({navigation}) {

  console.log("Splash Screen");
  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>    
      <Button title="Proceed" onPress={() => navigation.navigate('BreathScreen', {name: 'Callum'})} />
      <Button title="Skip & Continue" onPress={() => navigation.navigate('BreathScreen', {name: 'Callum'})} />
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