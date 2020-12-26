import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ContentList from "./components/ContentList";

const content = [
  {
    title: "Week1",
    data: [
      {
        title: "Recorded lectures",
        type: "vid",
        data: [
          {
            title: "Lecture 1",
            URL: "https://www.youtube.com/watch?v=OMMXrmMsjAk",
          },
          {
            title: "Lecture 2",
            URL: "https://www.youtube.com/watch?v=OMMXrmMsjAk",
          },
        ],
      },
      {
        title: "Written lectures",
        type: "pdf",
        data: [
          {
            title: "Lecture 1",
            URL:
              "https://drive.google.com/open?id=1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0",
          },
          {
            title: "Lecture 2",
            URL:
              "https://drive.google.com/open?id=1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0",
          },
        ],
      },
    ],
  },
];
export default ({ route,navigation }) => {
  const [Title, setTitle] = useState("");
  const { title, id } = route.params;
  console.log("THISI IS PROPS", route);
  useEffect(() => {
    // TODO make http request to get course specification
    // set the response body to setTitle
    // setAssignments("hello, this is the course specification");
  }, []);

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <ScrollView style={styles.root}>
      <ContentList content={content} navigation={navigation}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
