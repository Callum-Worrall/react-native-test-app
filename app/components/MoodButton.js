import React, {useState} from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import colors from '../config/colors';

export default function MoodButton(props) {

  const formState = {
    id: props.id,
    name: props.name,
    selected: props.selected
  }

  const [details, setDetails] = useState(formState);

  const selectionChange = () => {
    console.log(
      "Mood Button",
      details.name,
      (!details.selected ? "selected." : "unselected." )
    )

    setDetails({
       ...details,
       ["selected"]: !details.selected
    })
  }

  return(
    <View>
      <TouchableOpacity style={details.selected ? [styles.button, styles.buttonSelected] : styles.button}
        onPress={() => selectionChange()} >
        <Text style={styles.buttonText}>{details.name}</Text>        
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