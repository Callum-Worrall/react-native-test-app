import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import colors from '../config/colors';

import { useStore } from '../stores/Store';
import { toggleSelectMood } from '../stores/actions';

export default function EditButton(props) {

  const [state, dispatch] = useStore();

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
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

  buttonText: {
    bottom: 10,
    fontSize: 17,
    color: "white"
  }
});