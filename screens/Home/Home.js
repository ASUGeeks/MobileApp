import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MyHome from "./components/Main";
import TeacherDashboard from "../TeacherDash/TeacherDashboard.js";
import StudentDashboard from "../StudentDash/StudentDashboard";
import Login from "../Login/Login";
import Header from "../../navigation/Header";
const Stack = createStackNavigator();

const Home = () => {
  return <Login />;
};

export default Home;

{
  /*
    <Stack.Navigator>
      <Stack.Screen
       name="login"
       component={Login}
       options={{ header: (props) => <Header {...props} /> }}
     />
      
      <Stack.Screen
        name="TeacherDashboard"
        component={TeacherDashboard}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="StudentDashboard"
        component={StudentDashboard}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ header: (props) => <Header {...props} /> }}
      /> 
      </Stack.Navigator>
    */
}
