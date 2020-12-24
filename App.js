// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";

import BottomNavigation from "./navigation/BottomNavigation";

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

// const theme = {
//   ...PaperDefaultTheme,
//   colors: {
//     ...PaperDefaultTheme.colors,
//     background: "#f6f6f6",

//     primary: "#1958a7",
//     accent: "#f2806f",
//     secondary: "#ddb92a",
//     thrid: "#5c105d",
//   },
// };
export default function App() {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <NavigationContainer theme={CombinedDarkTheme}>
        <BottomNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
