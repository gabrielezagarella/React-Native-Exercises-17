import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SettingScreen from "../screen/SettingScreen";
import RootStackParams from "../models/RootStackParams";
import DetailScreen from "../screen/DetailScreen";
import HomeScreen from "../screen/HomeScreen";
import ROUTES from "./routes";
import { createDrawerNavigator } from "@react-navigation/drawer";

const RootStack = createStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator();

const NavigationProvider: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "rgb(79,172,217)" },
        }}
      />
      <RootStack.Screen name="Detail" component={DetailScreen} />
      <RootStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: true,
        }}
      />
    </RootStack.Navigator>
  );
};

const DrawerMenu = () => {
  return (
    <NavigationContainer
      onStateChange={(navigation) => console.log(navigation)}
    >
      <Drawer.Navigator>
        <Drawer.Screen
          name={ROUTES.DrawerMenu}
          component={NavigationProvider}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name={ROUTES.Setting} component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerMenu;
