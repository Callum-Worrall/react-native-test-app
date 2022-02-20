const moodObject = {
  id: 0,
  type: "melancholy",
  selected: false,
}

export const moodFactory = ({
  id,
  type,
}) => ({
  id,
  type,
  selected: false,
});

export const moodStringArray = [
  'Lonely', 'Happy', 'Confused',
  'Bored', 'Anxious', 'Disappointed',
  'Angry', 'Sad', 'Optimistic'
]

const createMoodObject = (index, moodType) => {
  // return moodType = {
  //   id,
  //   type,
  //   selected: false
  // }

  return  {
    id: index,
    type: moodType,
    selected: false
  }
}

export const createMoodObjectArray = () => {
  // console.log("Mood.js, createMoodObjectArray() - Array Check for Map: ", moodStringArray)
  // return null;
  let newObjectArray = moodStringArray.map((moodType, index) => createMoodObject(index, moodType))
  return newObjectArray
}