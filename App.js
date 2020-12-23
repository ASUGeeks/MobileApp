// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider ,DefaultTheme } from "react-native-paper";


import BottomNavigation from "./navigation/BottomNavigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1958a7',
    accent: '#22806f',
    secondary: '#ddb92a',
    thrid: '#5c105d',
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
