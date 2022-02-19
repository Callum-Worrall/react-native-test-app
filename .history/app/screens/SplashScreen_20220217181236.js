import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'

import colors from '../config/colors';

export default function SplashScreen({navigation}) {

  console.log("Splash Screen");

  const { height, width} = useDimensions();
  const landscape = width > height;

  return (
    <SafeAreaView style={styles.container}>    
      <Button
        title="Proceed."
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      />
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