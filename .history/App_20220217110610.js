import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

//Notes//
//remove all console.logs to increase app performance

export default function App() {

  console.log("App executed.");
  // console.log(require("./assets/icon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text>"Howdy partna!"</Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
        }}/>
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
