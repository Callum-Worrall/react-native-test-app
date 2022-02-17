import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { Button, Alert, Platform } from 'react-native';

//Notes//
//remove all console.logs to increase app performance

export default function App() {

  console.log("App executed.");
  // console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button title="Click Me" onPress={() => console.log("Clicked!")}
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //white
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // paddingTop: 0,
    alignItems: 'center', //horizontal
    // justifyContent: 'center', //vertical
  },
});
