import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

import Home from "../screens/Home/Home";
import StudentDashboard from "../screens/StudentDash/StudentDashboard";
import TeacherDashboard from "../screens/TeacherDash/TeacherDashboard";
import Admin from "../screens/Admin/Admin";
export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="TeacherDashboard">
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="StudentDashboard" component={StudentDashboard} />
      <Tab.Screen name="TeacherDashboard" component={TeacherDashboard} />
      <Tab.Screen name="Admin" component={Admin} />
    </Tab.Navigator>
  );
}
