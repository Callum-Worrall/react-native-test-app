// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View, SafeAreaView, Dimensions, StatusBar, Platform,
  Text, Image, Button, Alert,  
  TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
} from 'react-native';

//Notes//
//remove all console.logs to increase app performance

export default function App() {

  console.log("App executed.");
  console.log(Dimensions.get("screen"))
  // console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
    {/* <SafeAreaView style={styles.container}> */}
      <Button title="Click Me" onPress={() => console.log("Clicked!")} />

      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 70,
      }}></View>


      {/* <Text>Hello</Text> */}
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //white
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
    // paddingTop: 0,
    alignItems: 'center', //horizontal
    // justifyContent: 'center', //vertical
  },
});
