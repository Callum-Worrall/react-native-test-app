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

export default function App() {

  console.log("App executed.");
  console.log(useDimensions()); //doesnt respond to orientation changes
  // console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      

      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '30%',
      }}>
        <Button color="orange" title="Click Me" onPress={() => console.log("Clicked!")} style={{
        width: '50%',
        height: '30%',
      }}/>
      </View>


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
