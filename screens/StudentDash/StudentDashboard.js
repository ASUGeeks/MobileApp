import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import CourseMaterial from "./screens/CourseMaterial/CourseMaterial";
import OpenMaterial from "./screens/OpenMaterial/OpenMaterial";
import Discussion from "./screens/Discussion/Discussion";

import Header from "../../navigation/Header";
const Stack = createStackNavigator();

const dropdowmMenu = [{ title: "Discusstion forum", navigate: "Discussion" }];

export default () => {
  return (
    <Stack.Navigator initialRouteName="StudentDashboard">
      <Stack.Screen
        name="StudentDashboard"
        component={Main}
        options={{
          header: (props) => <Header {...props} dropdowmMenu={dropdowmMenu} />,
        }}
      />
      <Stack.Screen
        name="CourseMaterial"
        component={CourseMaterial}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="OpenMaterial"
        component={OpenMaterial}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Discussion"
        component={Discussion}
        options={{ header: (props) => <Header {...props} /> }}
      />
    </Stack.Navigator>
  );
};
