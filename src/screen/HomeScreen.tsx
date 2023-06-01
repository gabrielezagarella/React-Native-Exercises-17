import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ScreenFC from "../models/ScreenFC";
import ListItem from "../components/ListItem/ListItem";
import { StatusBar } from "expo-status-bar";
import { Profile, Contact } from "../models/Contact";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen: ScreenFC<"Home"> = ({ navigation, route }) => {
  const [contact, setContact] = useState<Array<Profile>>();

  useFocusEffect(() => {
    console.log("focus");
  });

  useEffect(() => {
    console.log("focus");
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const getContact = await fetch(
          "https://randomuser.me/api/?results=20&nat=us,fr,gb&exc=login,registered&noinfo"
        );
        const res: Contact = await getContact.json();
        setContact(res.results);
      } catch (error) {
        console.log("ERROR", error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView />
      <ListItem contact={contact || []} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCA5AE",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
  },
  shadow: {
    elevation: 2,
    shadowColor: "black",
    shadowOffset: {
      height: 20,
      width: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  cardContainer: {
    backgroundColor: "#fff",
    height: 170,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
