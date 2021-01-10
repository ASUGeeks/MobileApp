import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import Header from "../../navigation/Header";

import CreateUser from "./screens/CreateUser/CreateUser"
import CreateCourse from "./screens/CreateCourse/CreateCourse"

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
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
    </Stack.Navigator>
  );
};
