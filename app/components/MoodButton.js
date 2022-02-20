import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import color from '../config/colors';

import { useStore } from '../stores/store';
import { toggleSelectMood } from '../stores/actions';
// import { toggleSelect } from '../stores/selectMoodTableReducer';

export default function MoodButton(props) {

  const [, dispatch] = useStore();
  const state = useStore();
  // const { moods } = useStore();

  console.log(state[0])
  let storeSelected = state[0].moods[props.index].selected

  const [moodType, setMoodType] = React.useState(props.moodType);
  // const [selected, setSelected] = React.useState(storeSelected);

  // const forceUpdate = React.useState()[1].bind(null, {})

  // useEffect(props.toggleSelectHandler(),
  //   [selected]
  // );

  const selectionChange = () => {
    dispatch(toggleSelectMood(moodType, (moodType, "MoodButton")));

    console.log("Selected:", moodType)

    // console.log("Local - Selected - Before:", selected)
    // setSelected(!state[0].moods[props.index].selected);
    // console.log("Local - Selected - After:", selected)
  }

  // const selectedStyle = () => {
  //   return ({ selected } ? [styles.button, styles.buttonSelected] : styles.button)
  // }

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => selectionChange()}
      >
        <Text style={styles.buttonText}>
          {moodType}
        </Text>
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
    backgroundColor: color.translucentWhite,
  },

  buttonText: {
    bottom: 10,
    fontSize: 17,
    color: "white"
  },
});