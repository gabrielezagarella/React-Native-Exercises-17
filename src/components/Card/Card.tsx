import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Profile } from "../../models/Contact";
import RootStackParams from "../../models/RootStackParams";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation/routes";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  BookmarkProps,
  addBookmark,
  removeBookmark,
} from "../../redux/actions/bookmarkActions";

type Props = Record<"item", Profile>;

interface Prop {
  item: Profile;
  name: string;
}

const Card: React.FC<Props> = ({ item }) => {
  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParams, ROUTES>>();
  const dispach = useDispatch();

  const { bookmarks } = useSelector(
    (state: { bookmarkReducer: BookmarkProps }) => state.bookmarkReducer
  );

  useEffect(() => {
    const getContact = bookmarks.some(
      (item) => item.id.value === item.id.value
    );
    getContact && setSave(true);
  }, []);

  const [save, setSave] = useState(false);

  const handlePress = async (url: string) => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    }
  };

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", margin: 10 }}
      onPress={() => navigate("Detail", { item, name: "Gabriele" })}
    >
      <Image
        source={{ uri: item.picture.large }}
        style={{ height: 100, width: 100, borderRadius: 30, marginRight: 10 }}
      />
      <View>
        <Text>{item.name.first}</Text>
        <Text>{item.name.last}</Text>

        <TouchableOpacity
          onPress={() => handlePress(`tel:${item.phone}`)}
          activeOpacity={0.6}
        >
          <Text style={{ textDecorationLine: "underline" }}>
            Number cell {item.phone}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(`sms:${item.cell}`)}
          activeOpacity={0.6}
        >
          <Text style={{ textDecorationLine: "underline" }}>
            Send sms {item.cell}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(`mailto:${item.email}`)}
          activeOpacity={0.6}
        >
          <Text style={{ textDecorationLine: "underline" }}>{item.email}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePress(`https://www.google.com`)}
          activeOpacity={0.6}
        >
          <Text style={{ textDecorationLine: "underline" }}>
            Open url google
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setSave(!save),
            save
              ? dispach(removeBookmark(item.id.value))
              : dispach(addBookmark(item));
        }}
      >
        <MaterialCommunityIcons
          name={save ? "cards-heart" : "heart-outline"}
          size={20}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Card;
