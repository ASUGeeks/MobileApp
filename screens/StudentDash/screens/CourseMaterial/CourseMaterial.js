import axios from "axios";
import React, { useState, useEffect } from "react";

// import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Text } from "react-native-paper";

import ContentList from "./components/ContentList";
import { studentToken } from "../../../../Tokens/Tokens";

export default ({ route, navigation }) => {
  const [Content, setContent] = useState([]);
  const course = route.params.course;
  console.log("CCCCC", course);
  function getContent() {
    axios
      .get("http://192.168.1.6:5100/courses", {
        headers: { token: studentToken },
      })
      .then((r) => {
        console.log("get", r.data.courses[0].content);
        const contetnlol = r.data.courses[0].content;
        setContent(contetnlol);
        // storeToken()
      })
      .catch((bug) => console.log("BUBUBUUB", bug));
  }
  console.log("THISI IS PROPS", route);
  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
    getContent();
  }, []);

  return (
    <React.Fragment>
      <ContentList content={Content} navigation={navigation} course={course} />
      {/* <FAB/> */}
    </React.Fragment>
  );
};
