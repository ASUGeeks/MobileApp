import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MyHome from "./components/Main";
import TeacherDashboard from "../TeacherDash/TeacherDashboard.js";
import StudentDashboard from "../StudentDash/StudentDashboard";
import Login from "../Login/Login";
import Header from "../../navigation/Header";
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={MyHome}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="TeacherDashboard"
        component={TeacherDashboard}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="StudentDashboard"
        component={StudentDashboard}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};

export default Home;
