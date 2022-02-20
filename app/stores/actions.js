
export const SELECT_MOOD = 'APP/SELECTED_MOOD_TABLE/SELECT_MOOD';
export const DESELECT_MOOD = 'APP/SELECTED_MOOD_TABLE/DESELECT_MOOD';
export const TOGGLE_SELECT_MOOD = 'APP/SELECTED_MOOD_TABLE/TOGGLE_SELECT_MOOD';

export const selectMood = (moodType) => ({
  type: SELECT_MOOD,
  moodType,
});

export const deselectMood = (moodType) => ({
  type: DESELECT_MOOD,
  moodType,
});


export const toggleSelectMood = (moodType, sender) => ({
  type: TOGGLE_SELECT_MOOD,
  moodType,
  sender,
});
