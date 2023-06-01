import "react-native-gesture-handler";
import NavigationProvider from "./src/navigation";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux";
import { PersistGate } from "redux-persist/integration/react";
import {Text} from 'react-native';

// Installare dipendenze per la navigazione
// npm i @react-navigation/stack && @react-navigation/native && react-native-gesture-handler && react-native-safe-area-context
// Riferimento Slide 4

// git checkout feature/exercise-1
// git checkout feature/exercise-2
// git checkout feature/exercise-3
// git checkout feature/exercise-4
// git checkout feature/drawer-menu

// npm install @react-navigation/drawer
// babel.config.js plugins: ['react-native-reanimated/plugin'],
// Nel package.json debtro dependencies aggiungere
// "react-native-reanimated": "~2.14.4",
// alla fine npm i
// expo install expo-image-picker

// git checkout feature/tab-navigation
// npm i @react-navigation/bottom-tabs && react-native-vector-icons
// npm i --save-dev @types/react-native-vector-icons

// git checkout feature/redux
// npm install redux react-redux --save

// npm i redux-persist @react-native-async-storage/async-storage
// https://blog.logrocket.com/use-redux-persist-react-native/

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <NavigationProvider />
      </PersistGate>
    </Provider>
  );
};

export default App;
