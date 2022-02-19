import React, {useState} from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import colors from '../config/colors';

export default function MoodButton(props) {

  const formState = {
    id: props.id,
    name: props.name,
    selected: false
  }

  const [details, setDetails] = useState(formState);

  return(
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