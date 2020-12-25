import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import CourseMaterial from "./screens/CourseMaterial/CourseMaterial";


import Header from "../../navigation/Header";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="StudentDashboard">
      <Stack.Screen
        name="StudentDashboard"
        component={Main}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="CourseMaterial"
        component={CourseMaterial}
        options={{ header: (props) => <Header {...props} /> }}
      />
     
    </Stack.Navigator>
  );
};
