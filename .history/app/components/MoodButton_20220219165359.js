import React, {useState} from 'react'
import {
  StyleSheet, Platform, StatusBar,
  View, SafeAreaView,
  TouchableOpacity, Text } from 'react-native'
import {
  useDimensions, useDeviceOrientation
} from '@react-native-community/hooks';

import colors from '../config/colors';

import MoodButton from '../components/MoodButton'


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