import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
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
import { Alert, ScrollViewProps } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FavoriteScreen from "../screen/FavoriteScreen";

const RootStack = createStackNavigator<RootStackParams>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC = () => {
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
        onPress={() => Alert.alert("Modal open")}
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
    <Drawer.Navigator
    initialRouteName={ROUTES.Setting}
      screenOptions={{
        headerTintColor: "#820251",
        headerStyle: { backgroundColor: "#9D5E7B" },
        headerShadowVisible: true,
        drawerInactiveTintColor: "#9D5E7B",
        drawerActiveTintColor: "#820251",
        drawerActiveBackgroundColor: "#BCA5AE",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name={ROUTES.Favorite} component={FavoriteScreen} />
      <Drawer.Screen name={ROUTES.Setting} component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const TabNavigation: React.FC = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParams, ROUTES>>();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.DrawerMenu}
      screenOptions={{
        tabBarActiveTintColor: "#820251",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={ROUTES.HomeStack}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: ROUTES.Home,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        listeners={{
          tabPress: () => {
            navigate(ROUTES.HomeStack);
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.DrawerMenu}
        component={DrawerMenu}
        options={{
          headerShown: false,
          tabBarLabel: ROUTES.Favorite,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const NavigatorContainer = () => {
  return (
    <NavigationContainer
      // onStateChange={(navigation) => console.log(navigation)}
    >
      <TabNavigation />
    </NavigationContainer>
  );
};

export default NavigatorContainer;
