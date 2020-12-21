// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import Home from "./screens/Home.js";


import Bn from "./components/BottomNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <Bn />
    </NavigationContainer>
  );
}
