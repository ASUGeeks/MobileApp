import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler"
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home.js"
import ColorPalette from "./screens/ColorPalette.js"

import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="color" component={ColorPalette}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    color:"#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color:"#fff"
  }
});

