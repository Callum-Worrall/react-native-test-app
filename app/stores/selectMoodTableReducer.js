export const initialState = {
  selectedMoods: [],
};

export const reducer = (state = initialState, action) => {

  switch(action.type) {
    case SELECT_MOOD:
      return {
        ...state,
        selectedMoods: state.selectedMoods.concat(action.moodType)
      };

      case DESELECT_MOOD:
      return {
        ...state,
        selectedMoods: state.selectedMoods.filter(e => e != action.moodType)
      };

    case TOGGLE_SELECT_MOOD:

      let newSelectedMoods= []

      // if(state.selectedMoods.length > 0) {

        if(state.selectedMoods.includes(action.mood))
            newSelectedMoods = state.selectedMoods.filter(e => e != action.moodType)
        else
            newSelectedMoods = [...state.selectedMoods, action.moodType]

      // }
      return {
        ...state,
      selectedMoods: newSelectedMoods}

      default:
        return state;
  }
}



  // case 
  // case "toggleSelect":
  //     if(state.selectedMoods.length > 0) {
  //       if(state.selectedMoods.includes(action.value))
  //         return {selectedMoods: state.selectedMoods.filter(e => e != action.value)};
  //       else
  //         return {selectedMoods: [...state.selectedMoods, action.value]};
  //     }
  //     break;

// export default moodReducer = (state, action) => {

//   console.log(" ")
//   console.log("//////moodReducer////////")
//   console.log("State Type:", typeof(state));
//   console.log("Current State:", state);
//   console.log("selectedMoods Type:", typeof(state.selectedMoods));
//   console.log("selectedMoods:", state.selectedMoods);
//   console.log("//////moodReducer////////")

//   switch (action.type) {
//     case "reset":
//       return initialState;
      
//     case "selected?":
//       if(state.selectedMoods.length > 0 && state.selectedMoods.includes(action.value))
//         return true;
//       else
//         return false;
      
//     case "toggleSelect":
//       if(state.selectedMoods.length > 0) {
//         if(state.selectedMoods.includes(action.value))
//           return {selectedMoods: state.selectedMoods.filter(e => e != action.value)};
//         else
//           return {selectedMoods: [...state.selectedMoods, action.value]};
//       }
//       break;

//     default:
//       return state;
//   }

//   return
// }
