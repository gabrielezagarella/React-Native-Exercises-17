import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Profile } from "../../models/Contact";
import RootStackParams from "../../models/RootStackParams";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  useNavigation,
} from "@react-navigation/native";
import ROUTES from "../../navigation/routes";

type Props = Record<"item", Profile>;

interface Prop {
  item: Profile;
  name: string;
}

const Card: React.FC<Props> = ({ item }) => {
  const { navigate } =
  useNavigation<StackNavigationProp<RootStackParams, ROUTES>>();

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
    </TouchableOpacity>
  );
};

export default Card;
