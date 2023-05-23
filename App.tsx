import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "./src/components/ListItem/ListItem";

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView/>
      <StatusBar style="auto" />
      <ListItem/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCA5AE",
    padding: 20,
  },
  centainerBoxCenter: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  containerBoxTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  box: {
    height: 30,
    width: 30,
    backgroundColor: "red",
    margin: 10,
  },
});
