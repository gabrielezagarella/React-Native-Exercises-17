import React from "react";
import { View, Text, Button } from "react-native";
import ScreenFC, { CustomScreenFC } from "../models/ScreenFC";
import { useDispatch, useSelector } from "react-redux";
import { CountProps, decrement, increment } from "../redux/actions/countAction";

type A = "Home" | "Setting" | "Detail";
const test: A = "Setting";

const SettingScreen: CustomScreenFC<"Setting"> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { count } = useSelector(
    (state: { countReducer: CountProps }) => state.countReducer
  );

  return (
    <View>
      <Text>Sono in SettingScreen</Text>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};

export default SettingScreen;
