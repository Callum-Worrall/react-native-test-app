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
      <TouchableOpacity style={styles.button}
        onPress={() => selectionChange()} >
        <Text style={styles.buttonText}>{details.name}</Text>        
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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