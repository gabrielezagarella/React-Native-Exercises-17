import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CustomInput from "./components/CustomInput";

const App = () => {
  const [state, setState] = useState<string>();

  return (
    <View style={styles.container}>
      <CustomInput
        style={{ backgroundColor: "pink", borderRadius: 10 }}
        placeholder="placeholder 1"
        showName={(value) => {
          console.log("value", value);
          setState(value);
        }}
      />
      {state && <Text>Questo è lo stato salvato nel padre {state}!</Text>}
      {/* <CustomInput placeholder="placeholder 2" /> */}
      <StatusBar style="auto" />
    </View>

    // <View style={styles.container}>
    //   <View style={{backgroundColor: "red", width: "100%", height: 50, flex: 1}}/>
    //   <View style={{backgroundColor: "pink", flex: 1,  width: "100%", height: 50}}/>
    //   <View style={{backgroundColor: "yellow", flex: 2,  width: "100%", height: 50}}/>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
