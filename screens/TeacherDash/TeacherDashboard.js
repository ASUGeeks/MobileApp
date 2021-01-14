import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import Announce from "./screens/Announce/Announce";
import PostLearningMaterials from "./screens/PostLearningMaterials/PostLearningMaterials";
import CourseSpecification from "./screens/CourseSpecification/CourseSpecification";
import Assignments from "./screens/Assignments/Assignments";

import CreateQuiz from "./screens/CreateQuiz/CreateQuiz";
import Discussion from "../TeacherDash/screens/TeacherDiscussion/TeacherDiscussion";
import DisplayASS from "../TeacherDash/screens/DIsplayAsses/DIsplayAsses";
import GradeAss from "./screens/GradeAss/GradeAss";

import Header from "../../navigation/Header";
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName="Teacher Dashboard">
      <Stack.Screen
        name="Teacher Dashboard"
        component={Main}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Create Announcement"
        component={Announce}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Post Learning Materials"
        component={PostLearningMaterials}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Course Specification"
        component={CourseSpecification}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Assignments"
        component={Assignments}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Create Quiz"
        component={CreateQuiz}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Discussion"
        component={Discussion}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Display Assignment"
        component={DisplayASS}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="Grade Assignment"
        component={GradeAss}
        options={{ header: (props) => <Header {...props} /> }}
      />
      {/* <Stack.Screen name="TeacherDashboard" component={Main} /> */}
    </Stack.Navigator>
  );
};
