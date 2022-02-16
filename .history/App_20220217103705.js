import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Notes//
//remove all console.logs to increase app performance

export default function App() {
  // let x = 1;
  console.log("App executed.")

  // let x;
  // x.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world, this is me!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
