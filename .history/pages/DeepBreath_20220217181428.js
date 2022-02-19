// import { StatusBar } from 'expo-status-bar';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {
  StyleSheet,
  View, SafeAreaView, StatusBar, Platform,
  Text, Image, Button, Alert,  
  TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
} from 'react-native';

//Notes//
//remove all console.logs to increase app performance

export default function DeepBreath() {

  console.log("Take a deep breath.");
  console.log(useDimensions()); //doesn't respond to orientation changes
  // console.log(useDeviceOrientation()); 

  const { height, width} = useDimensions();
  const landscape = width > height;

  return (
    <SafeAreaView style={styles.container}>    
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    backgroundColor: '#fff', //white
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },
});
