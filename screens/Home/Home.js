import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MyHome from "./components/Main";
import TeacherDashboard from "../TeacherDash/TeacherDashboard.js";
import StudentDashboard from "../StudentDash/StudentDashboard";
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
