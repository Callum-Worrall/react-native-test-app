import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../config/colors';

import mood from '../stores/schema/Mood'
import { useStore } from '../stores/Store';
import { toggleSelectMood } from '../stores/actions';
// import { toggleSelect } from '../stores/selectMoodTableReducer';

export default function MoodButton(props) {

  const [state, dispatch] = useStore();
  // const [state] = useStore();
  // const { moods } = state;

  const [moodType, setMoodType] = useState(props.moodType);
  const [selected, setSelected] = useState(false);

  // useEffect(() => {

  // }, [movies]);
  // setMoodType(props.moodType);

  // console.log(" ")
  // console.log("//////MoodButton////////")
  // console.log("State Type:", typeof(state));
  // console.log("State:", state);
  // console.log("selectedMoods Type:", typeof(selectedMoods));
  // console.log("selectedMoods:", selectedMoods);
  // console.log("//////MoodButton////////")

  const forceUpdate = React.useState()[1].bind(null, {})

  useEffect(() => {
    // action on update of selected
  }, [selected]);

  const selectionChange = () => {
    dispatch(toggleSelectMood(moodType, (moodType, "MoodButton")));
    console.log("Local - Selected - Before:", selected)

    // setSelected(prevSelected => ([...prevMovies, ...result]));

    setSelected(selected ? false : true)

    console.log("Local - Selected - After:", selected)
    forceUpdate();
  }

  // const selectionChange = () => {
  //   dispatch(toggleSelectMood(moodType, (moodType, "MoodButton")));
  // }

  const selectedStyle = () => {
    return ({ selected } ? styles.button : [styles.button, styles.buttonSelected])
  }

  return (
    <View>
      <TouchableOpacity
        style={
          [
            styles.button,
            { selected } ? styles.button : [styles.button, styles.buttonSelected]
          ]
        }
        onPress={() => selectionChange()} >
        <Text style={styles.buttonText}>{moodType}</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  button: {
    width: 110,
    height: 120,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "orange",
  },

  buttonSelected: {
    backgroundColor: '#FFFFFF50'
  },

  buttonText: {
    bottom: 10,
    fontSize: 17,
    color: "white"
  }
});