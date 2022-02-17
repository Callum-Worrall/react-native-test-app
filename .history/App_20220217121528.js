import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { Button, Alert } from 'react-native';

//Notes//
//remove all console.logs to increase app performance

export default function App() {

  console.log("App executed.");
  // console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me"
        onPress={() => Alert.alert("My Title", "My message.", [
          { text: "Yes", onPress: () => console.log("Yes") },
          { text: "No", onPress: () => console.log("No") }
        ])} />
      {/* <Text>"Howdy partna!"</Text> */}
      {/* <TouchableNativeFeedback onPress={() => console.log("Image Clicked!")}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }} />
      </TouchableNativeFeedback> */}
      {/* <TouchableOpacity>
        <Image 
            blurRadius={1}
            fadeDuration={1000}
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"
            }}
          />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
  },
});
