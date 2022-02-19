import React, {useState} from 'react'
import {
  StyleSheet, Platform, StatusBar,
  View, SafeAreaView,
  TouchableOpacity, Text } from 'react-native'
import {
  useDimensions, useDeviceOrientation
} from '@react-native-community/hooks';

import colors from '../config/colors';

export default function MoodCheckScreen({navigation}) {

  console.log("Mood Check In Screen");
  const {landscape} = useDeviceOrientation();

  const moodArray = [
    'Lonely', 'Happy', 'Confused',
    'Bored', 'Anxious', 'Disappointed',
    'Angry', 'Sad', 'Optimistic'
  ]

  const initialState = moodArray.map((mood) => {
      return {
        name: mood,
        selected: false
      }
    }
  )
  
  const [moods, setMoods] = useState(initialState);

  const moodSelectChange = (index) => {    
    const mood = moods[index];

    console.log(mood.name, "Button Clicked!")
    let value = !mood.selected;

    setMoods({
       ...moods,
       ["selected"]: value
      })

    console.log(
      moods[index].name + (
        moods[index].selected ? " selected." :  " unselected."
      ) )
  }

  const createMoodButton = (mood, index) => {
    return (
    <View>
        <TouchableOpacity style={styles.button}
          key={index}
          onPress={() => moodSelectChange(index)}
        >
          <Text style={styles.buttonText}>{mood.name}</Text>        
        </TouchableOpacity>
      </View>
    )
  }

  // const createMoodButton = (mood, index) => {
  //   return (
  //   <View>
  //       <TouchableOpacity style={styles.button}
  //         key={index}
  //         onPress={() => {
  //           mood.selected = !mood.selected;
  //           console.log(mood.name + (
  //             mood.selected ? " selected." :  " unselected.")
  //           )
  //         }}
  //       >
  //         <Text style={styles.buttonText}>{mood.name}</Text>        
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }

  const createMoodButtons = () => {
    console.log("Create Mood Buttons")//, moodArray)
    return moods.map((mood, index) => (
      createMoodButton(mood, index)
    ))
  }

  const createRow = (buttonArray, rowNum) => {    
    console.log("Row: ", rowNum, " created.")
    return(
    <View style={styles.row}>
      {buttonArray[rowNum + 0]}
      {buttonArray[rowNum + 1]}
      {buttonArray[rowNum + 2]}
    </View>
    )
  }

  const createGrid = () => {
    const buttonArray = createMoodButtons();
    return(
      <View style={styles.grid}>
        {createRow(buttonArray, 0)}
        {createRow(buttonArray, 1)}
        {createRow(buttonArray, 2)}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}/>
      <View style={styles.content}>
        {createGrid()}
      </View>
      <View style={styles.footer}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
  },

  header: {
    flex: 1,
  },

  content: {
    flex: 2,
  },

  footer: {
    flex: 1,
  },

  grid: {
    width: 300,
    height: 300,
  },  

  row: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button: {
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "orange",
  },

  buttonText: {
    bottom: 10
  }
});