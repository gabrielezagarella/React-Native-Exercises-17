import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import RootStackParams from "./RootStackParams";
import ROUTES from "../navigation/routes";
type ScreenNavigationProps<T extends keyof RootStackParams> = {
  navigation: StackNavigationProp<RootStackParams, ROUTES>;
  route: RouteProp<RootStackParams, T>;
};
type ScreenFC<S extends keyof RootStackParams> = React.FC<
  ScreenNavigationProps<S>
>;
export default ScreenFC;
