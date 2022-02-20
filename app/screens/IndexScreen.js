import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import color from '../config/colors';

import { useStore } from '../stores/store';
// import {  } from '../stores/actions';

export default IndexScreen = ({ navigation }) => {

  console.log("Index Screen");
  const [state] = useStore();
  const { moods } = state;

  const [textInputValue, setTextInputValue] = React.useState('');

  const selectedMoods = []
  moods.forEach((mood) => {
    if (mood.selected) {
      selectedMoods.push(mood.type.toLowerCase());
    }
  })

  console.log('selectedMoods.length', selectedMoods.length)
  console.log('selectedMoods', selectedMoods)
  let moodString = ""
  switch (selectedMoods.length) {
    case 0:
      console.warn("No mood has been selected.")
      break;

    case 1:
      moodString = "Why are you feeling " + selectedMoods[0] + "?"
      break;
    case 2:
      moodString = "Why are you feeling " + selectedMoods[0] + " and " + selectedMoods[1] + "?"
      break;
    case 3:
      moodString = "Why are you feeling " + selectedMoods[0] + ", " + selectedMoods[1] + " and " + selectedMoods[2] + "?"
      break;
    case 4:
      moodString = "Why are you feeling " + selectedMoods[0] + ", " + selectedMoods[1] + ", " + selectedMoods[2] + " and " + selectedMoods[3] + "?"
      break;

    default:
      moodString = "You seem to have a lot going on, what's up?"
  }

  console.log("Mood String:", moodString)

  return (
    <ScreenWrapper>

      <View style={contentStyles.whyMoodBlock}>
        <Text numberOfLines={2} adjustsFontSizeToFit style={{ fontSize: 18, margin: 10 }}>
          {moodString}
        </Text>
      </View>

      <View style={voiceRecordingStyles.voiceRecording} >
        <Text>Voice Recording</Text>
      </View>

      {/* Text Input Block */}
      <View style={textInputStyles.textInputBlock} >

        <View style={textInputStyles.textEditLink} >
          <TouchableOpacity ><Text style={{ right: 4 }}>Edit</Text></TouchableOpacity>
        </View>

        <View style={textInputStyles.textInputBox} >
          <TextInput
            style={textInputStyles.textInput}
            onChangeText={text => setTextInputValue(text)}
            value={textInputStyles}
            placeholder="Try writing about it here..."
          />
        </View>
        {/* End- Text Input Block */}

      </View>

      {/* Photo Upload Block */}
      <View style={photoStyles.photoUpload} >
        <TouchableOpacity >
          <Text style={{ right: 4 }}>
            Add a photo.
          </Text>
        </TouchableOpacity>
      </View>
      {/* End - Photo Upload Block */}

      {/* Trigger Section */}
      <View style={triggerStyles.triggerBlock} >
        <View style={triggerStyles.triggerBlockTop}>

          <View style={triggerStyles.triggerTitle}>
            <Text>Triggers: Auto Generated</Text>
          </View>

          <View style={triggerStyles.triggerEditLink}>
            <TouchableOpacity >
              <Text style={{ right: 4 }}>Edit</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={triggerStyles.triggerTagBlock}>
          <TouchableOpacity style={triggerStyles.triggerTag}>
            <Text>Family</Text>
          </TouchableOpacity>
          <TouchableOpacity style={triggerStyles.triggerTag}>
            <Text>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={triggerStyles.triggerTag}>
            <Text>Work Meetings</Text>
          </TouchableOpacity>
        </View>

      </View>
      {/* End Trigger Section */}

      <View style={checkInStyles.checkInSubmit}>
        <TouchableOpacity style={checkInStyles.checkInButton} >
          <Text style={{ color: color.cream }}>Check In</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const contentStyles = StyleSheet.create({
  whyMoodBlock: {
    flex: 1.50,
    width: 350,
    // flexDirection: 
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: color.lightpink,
  },
});

const voiceRecordingStyles = StyleSheet.create({
  voiceRecording: {
    flex: 1.5,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.purple,
  },
});

const textInputStyles = StyleSheet.create({
  textInputBlock: {
    flex: 2,
    width: 350,
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // backgroundColor: color.white,
  },

  textInputBox: {
    flex: 1,
    width: 350,
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderColor: color.grey,
    borderWidth: 1,
    backgroundColor: color.white,
  },

  textEditLink: {
    flex: .25,
    width: 350,
    flexDirection: 'row-reverse',
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.cream,
  },
});

const photoStyles = StyleSheet.create({
  photoUploadBlock: {
    flex: 1.5,
    width: 350,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.hazel,
  },
});

const triggerStyles = StyleSheet.create({
  triggerBlock: {
    flex: 1.5,
    width: 350,
    justifyContent: "flex-end",
    backgroundColor: color.creamChalk,
  },

  triggerBlockTop: {
    flex: 1,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: color.creamChalk,
  },

  triggerTitle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  triggerTitleText: {

  },

  triggerEditLink: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  triggerEditLinkText: {
    color: color.moodPurple
  },

  triggerTagBlock: {
    flex: 1,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  triggerTag: {
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 5,
    borderRadius: 6,
    backgroundColor: color.grey,
  },

  triggerTagText: {

  },

});

const checkInStyles = StyleSheet.create({
  checkInSubmit: {
    flex: 1.5,
    width: 350,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.creamChalk,
  },

  checkInButton: {
    padding: 13,
    backgroundColor: color.moodPurple,
    borderRadius: 10,
  },

  checkInButtonText: {

  },

});