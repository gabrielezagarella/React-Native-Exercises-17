import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SettingScreen from "../screen/SettingScreen";
import RootStackParams from "../models/RootStackParams";
import DetailScreen from "../screen/DetailScreen";
import HomeScreen from "../screen/HomeScreen";
import ROUTES from "./routes";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { ScrollViewProps } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

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

const CustomDrawerContent = (
  props: ScrollViewProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<ScrollView> &
    React.ComponentProps<typeof DrawerItemList>
) => {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Esci"
        inactiveTintColor="#9D5E7B"
        onPress={() => undefined}
      />
      <DrawerItem
        label="Elimina profilo"
        inactiveTintColor="#9D5E7B"
        onPress={() => undefined}
      />
    </DrawerContentScrollView>
  );
};

const DrawerMenu = () => {
  return (
    <NavigationContainer
      onStateChange={(navigation) => console.log(navigation)}
    >
      <Drawer.Navigator
          screenOptions={{
            headerTintColor: "#820251",
            headerStyle: { backgroundColor: "#9D5E7B" },
            headerShadowVisible: true,
            drawerInactiveTintColor:"#9D5E7B",
            drawerActiveTintColor: "#820251",
            drawerActiveBackgroundColor: "#BCA5AE",
          }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
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
