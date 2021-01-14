import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import Header from "../../navigation/Header";

import CreateUser from "./screens/CreateUser/CreateUser";
import CreateCourse from "./screens/CreateCourse/CreateCourse";
import Login from "./screens/Login/Login";
import AcceptUser from "./screens/AcceptUser/AcceptUser";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Admin Dashboard">
      <Stack.Screen
        name="Admin Dashboard"
        component={Main}
        options={{ header: (props) => <Header {...props} /> }}
      />

      <Stack.Screen
        name="Create user"
        component={CreateUser}
        options={{ header: (props) => <Header {...props} /> }}
      />

      <Stack.Screen
        name="Create course"
        component={CreateCourse}
        options={{ header: (props) => <Header {...props} /> }}
      />

      <Stack.Screen
        name="login2"
        component={Login}
        options={{ header: (props) => <Header {...props} /> }}
      />

      <Stack.Screen
        name="accept user"
        component={AcceptUser}
        options={{ header: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};
