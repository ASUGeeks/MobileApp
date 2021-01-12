import axios from "axios";
import React, { useState, useEffect } from "react";
// import { View, StyleSheet, ScrollView, Text } from "react-native";
import ContentList from "./components/ContentList";
 import axios from "axios"

export default ({ route, navigation }) => {
  const [Content, setContent] = useState([
  ]);
  console.log("THISI IS PROPS", route);
  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
  }, []);

  return <ContentList content={Content} navigation={navigation} />;
};
