import { StyleSheet, Platform, StatusBar, View, SafeAreaView, Text } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks';
import color from '../config/colors';

export default ScreenWrapper = ({ navigation, children }) => {

  console.log("Loading Screen Wrapper");
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.screen}>

      <View style={[navbarStyles.navbar, navbarStyles.topNavbar]}>
        <Text>Top Navbar</Text>
      </View>

      <View style={styles.childBlock} navigation={navigation}>
        {children}
      </View>

      <View style={[navbarStyles.navbar, navbarStyles.bottomNavbar]}>
        <Text>Bottom Navbar</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center', //vertical
    alignItems: 'center', //horizontal
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, //status bar for android as SafeAreaView only works iOS
    backgroundColor: color.creamChalk,
  },

  childBlock: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: color.hazel,
  },
});

const navbarStyles = StyleSheet.create({

  navbar: {
    flex: 1,
    width: 350,
    backgroundColor: color.grey,
    borderRadius: 5,
  },

  topNavbar: {
    flexDirection: "row",
    justifyContent: 'center', //horizontal
    alignItems: 'center', //vertical
  },

  bottomNavbar: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"
  },
});