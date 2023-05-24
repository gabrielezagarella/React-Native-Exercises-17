import React, {  } from "react";
import { FlatList, View } from "react-native";
import { Profile } from "../../models/Contact";
import Card from "../Card/Card";

type Props = Record<"contact", Array<Profile>>;

const ListItem: React.FC<Props> = ({ contact }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={contact}
        style={{ width: "100%", marginBottom: 30 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Card item={item} />;
        }}
        keyExtractor={(contact) => contact.id.value}
      />
    </View>
  );
};

export default ListItem;
