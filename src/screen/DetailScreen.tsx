import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ScreenFC from "../models/ScreenFC";
import Card from "../components/Card/Card";

const DetailScreen: ScreenFC<"Detail"> = ({ route, navigation }) => {
  const { params } = route;

  return params?.item ? (
    <View>
      <Text>{params.name}</Text>
      <Card item={params?.item} />
      <Button
        title="Navigate Detail"
        onPress={() => navigation.navigate("Detail", { item: params.item })}
      />
      <Button
        title="Push Detail"
        onPress={() => navigation.push("Detail", { item: params?.item })}
      />
      <Button
        title="Navigate Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  ) : (
    <Text>No info</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailScreen;
