import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import CourseMaterial from "./screens/CourseMaterial/CourseMaterial";
import OpenMaterial from "./screens/OpenMaterial/OpenMaterial";
import Discussion from "./screens/Discussion/Discussion";
import Quizzes from "./screens/Quizes/Quizes";
import Assignments from "./screens/Assignments/Assignments";
import AssScreen from "./screens/AssScreen/AssScreen";
import QUizzScreen from "./screens/QuizzScreen/QuizzScreen"

import Header from "../../navigation/Header";
const Stack = createStackNavigator();

const dropdowmMenu = [
  { title: "Discusstion forum", navigate: "Discussion" },
  { title: "Quizzes", navigate: "Quizzes" },
  { title: "Assignments", navigate: "Assignments" },
];

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
        options={{
          header: (props) => <Header {...props} dropdowmMenu={dropdowmMenu} />,
        }}
      />
      <Stack.Screen
        name="OpenMaterial"
        component={OpenMaterial}
        options={{
          header: (props) => <Header {...props} dropdowmMenu={dropdowmMenu} />,
        }}
      />
      <Stack.Screen
        name="Discussion"
        component={Discussion}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Quizzes"
        component={Quizzes}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Assignments"
        component={Assignments}
        options={{ header: (props) => <Header {...props} /> }}
      />
          <Stack.Screen
        name="Assignment screen"
        component={AssScreen}
        options={{ header: (props) => <Header {...props} /> }}
      />
        <Stack.Screen
        name="Quizz screen"
        component={QUizzScreen}
        options={{ header: (props) => <Header {...props} /> }}
      />
       {/* <Stack.Screen
        name="Quiz screen"
        component={Assignments}
        options={{ header: (props) => <Header {...props} /> }}
      /> */}
    </Stack.Navigator>
  );
};
