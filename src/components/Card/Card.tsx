import React from "react";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { Result } from "../../models/Contact/Contact";

type Props = Record<"item", Result>;

interface Prop {
  item: Result;
  name: string;
}

const Card: React.FC<Props> = ({ item }) => {
  const handlePress = async (url: string) => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    }
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: item.picture.large }}
        style={{ height: 100, width: 100, borderRadius: 30 }}
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
          <Text style={{ textDecorationLine: "underline" }}>Open url google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
