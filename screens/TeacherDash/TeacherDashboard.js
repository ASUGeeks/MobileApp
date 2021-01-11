import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import Announce from "./screens/Announce/Announce";
import PostLearningMaterials from "./screens/PostLearningMaterials/PostLearningMaterials";
import CourseSpecification from "./screens/CourseSpecification/CourseSpecification";
import Assignments from "./screens/Assignments/Assignments";
import SubmitQuiz from "./screens/SubmitQuiz/SubmitQuiz";
import CreateQuiz from "./screens/SubmitQuiz/CreateQuiz";

import Header from "../../navigation/Header";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="TeacherDashboard">
      <Stack.Screen
        name="TeacherDashboard"
        component={Main}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="CreateAnnouncement"
        component={Announce}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="PostLearningMaterials"
        component={PostLearningMaterials}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="CourseSpecification"
        component={CourseSpecification}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Assignments"
        component={Assignments}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="CreateQuiz"
        component={CreateQuiz}
        options={{ header: (props) => <Header {...props} /> }}
      />
      {/* <Stack.Screen name="TeacherDashboard" component={Main} /> */}
    </Stack.Navigator>
  );
};
