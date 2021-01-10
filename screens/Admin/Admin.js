import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import Header from "../../navigation/Header";

import CreateUser from "./screens/CreateUser/CreateUser"

const admin = {
  username: "username",
  email: "email@exmaple.com",
  role: "teacher",
  password: "somepassword",
};

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
      {/* <Stack.Screen
        name="Create Announcement"
        component={Announce}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Post Learning Materials"
        component={PostLearningMaterials}
        options={{ header: (props) => <Header {...props} /> }}
      /> */}
      {/* <Stack.Screen name="TeacherDashboard" component={Main} /> */}
    </Stack.Navigator>
  );
};
