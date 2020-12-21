import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Mybutton from "./Mybutton";
import { createStackNavigator } from "@react-navigation/stack";
import MyHome from "./MyHome";
import TeacherDashboard from "../screens/TeacherDashboard.js";
import StudentDashboard from "../screens/StudentDashboard.js";
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={MyHome} />
      <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
      <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
    </Stack.Navigator>
  );
};

export default Home;
