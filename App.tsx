import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ListItem from "./src/components/ListItem/ListItem";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListItem/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
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
