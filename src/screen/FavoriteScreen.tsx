import React from "react";
import { View, Text } from "react-native";
import { CustomScreenFC } from "../models/ScreenFC";
import { useSelector } from "react-redux";
import { BookmarkProps } from "../redux/actions/bookmarkActions";
import ListItem from "../components/ListItem/ListItem";

const FavoriteScreen: CustomScreenFC<"Favorite"> = () => {
  const { bookmarks } = useSelector(
    (state: { bookmarkReducer: BookmarkProps }) => state.bookmarkReducer
  );

  return (
    <View style={{ flex: 1 }}>
      <Text>FavoriteScreen</Text>
      {bookmarks.length > 0 ? (
        <ListItem contact={bookmarks.reverse()} />
      ) : (
        <Text>Nessun preferito</Text>
      )}
    </View>
  );
};

export default FavoriteScreen;
