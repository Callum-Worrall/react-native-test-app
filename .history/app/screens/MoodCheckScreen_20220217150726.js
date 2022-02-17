

export default function MoodCheckScreen() {

  console.log("Mood Check In Screen");

  const { height, width} = useDimensions();
  const landscape = width > height;

  return (
    <SafeAreaView style={styles.container}>    
      
    </SafeAreaView>
  );
}