import React, {useState, useContext} from 'react'
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

  // setMoodType(props.moodType);

  // console.log(" ")
  // console.log("//////MoodButton////////")
  // console.log("State Type:", typeof(state));
  // console.log("State:", state);
  // console.log("selectedMoods Type:", typeof(selectedMoods));
  // console.log("selectedMoods:", selectedMoods);
  // console.log("//////MoodButton////////")

  const selectionChange = () => {
    // console.log(
    //   "Mood Button",
    //   moodType,
    //   (moods.selected ? "selected." : "unselected." )
    // )

    // dispatch(toggleSelectMood(props.moodType));
    dispatch(toggleSelectMood(moodType, (moodType, "MoodButton")));

    console.log("MoodButton - Current State: ", state);
    // console.log("Current Moods Selected:", moods);
  }

  
  const checkIfSelected = () => {
    if(moods.length > 0) {
      moods.each((mood) => {
        if(mood.type === moodType) {
          return true;
        }
      })
    }
  }

  // const handleInputOnChange = ({ currentTarget: { name, value } }) =>
  //   setForm((state) => ({ ...state, [name]: value }));

  // const handleOnSelectAMoodPress = () => {
  //   dispatch(toggleSelect(moodFactory(form)));
  // }


  return(
    <View>
      {/*change to */} 
      <TouchableOpacity
        style={{checkIfSelected} ? [styles.button, styles.buttonSelected] : styles.button}
        onPress={() => selectionChange()} >
        <Text style={styles.buttonText}>{props.name}</Text>       
      </TouchableOpacity>
    </View>
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