import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//Notes//
//remove all console.logs to increase app performance

export default function App() {
  // let x = 1;
  console.log("App executed.")

  // let x;
  // x.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello world, this is me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me!</Text>
      {/* <StatusBar style="auto" /> */}
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
