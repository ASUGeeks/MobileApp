import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main/Main";
import Announce from "./screens/Announce/Announce"

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="TeacherDashboard" component={Main} />
      <Stack.Screen name="CreateAnnouncement" component={Announce} />
      {/* <Stack.Screen name="TeacherDashboard" component={Main} /> */}

    </Stack.Navigator>
  );
};

