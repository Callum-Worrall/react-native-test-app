import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Notes//
//remove all console.logs to increase app performance

export default function App() {
  let x = 1;
  console.log("App executed.")

  // let x;
  // x.toString();

  return (
    <View style={styles.container}>
      <Text>Hello world, this is me!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
