import { createMoodObjectArray } from './schema/Mood'
import { TOGGLE_SELECT_MOOD } from './actions'

export const initialState = {
  moods: createMoodObjectArray(),
};

// const retrieveMoodObjectFromArray = (moodType, moodsArray) => {
//   // this.each((mood) => {
//     moodsArray.each((mood) => {
//     if(mood.type === moodType) {
//       return mood;
//     }
//   })
// }

export const reducer = (state = initialState, action) => {

  if (state.moods === null) {
    console.warning("moodTableReducer - state.moods is null")
  }

  if (state.moods.length <= 0) {
    console.warning("moodTableReducer - state.moods is empty")
  }
  // else if() {

  // }

  // console.log("MoodTableReducer.js, reducer() - Array Check", state.moods)

  let retrievedMoodIndex = null;

  state.moods.forEach((mood, index) => {
    if (mood.type === action.moodType) {
      retrievedMoodIndex = index;
      return;
    }
  })

  switch (action.type) {

    case TOGGLE_SELECT_MOOD:

      let newState = state;
      // console.log("MoodTableReducer.js, selected? -", newState.moods[retrievedMoodIndex].selected)
      newState.moods[retrievedMoodIndex].selected = !newState.moods[retrievedMoodIndex].selected
      // console.log("MoodTableReducer.js, selected now? -", newState.moods[retrievedMoodIndex].selected)
      return newState;

    default:
      return state;
  }
};