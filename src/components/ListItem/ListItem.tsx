import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image, Button } from "react-native";
import { Contact, Result } from "../../models/Contact/Contact";
import Card from "../Card/Card";
import * as ImagePicker from "expo-image-picker";

const ListItem: React.FC = () => {
  const [contact, setContact] = useState<Array<Result>>();
  const [image, setImage] = useState<string>();

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

  const pickImage = async () => {
    ImagePicker.requestMediaLibraryPermissionsAsync;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Choice photo" color="blue" onPress={pickImage} />
      <FlatList
        data={contact}
        style={{ width: "100%",      
               marginBottom: 50,
      }}
      showsVerticalScrollIndicator={false}

        renderItem={({ item }) => {
          return <Card item={item} />;
        }}
      keyExtractor={(contact)=>contact.id.value}
      />
    </View>
  );
};

export default ListItem;
