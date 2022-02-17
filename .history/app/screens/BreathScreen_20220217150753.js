

export default function BreathScreen() {

  console.log("Follow Along Breathing Screen.");

  const { height, width} = useDimensions();
  const landscape = width > height;

  return (
    <SafeAreaView style={styles.container}>    
      
    </SafeAreaView>
  );
}

}
