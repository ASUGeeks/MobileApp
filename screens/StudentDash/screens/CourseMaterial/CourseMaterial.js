import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ContentList from "./components/ContentList";



const content = [
  {
    title: "Week 1",
    data: [
      {
        title: "recorded lectures",
        data: [
          {
            title: "Lecture 1",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
          {
            title: "Lecture 2",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
          {
            title: "Lecture 3",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
        ],
      },
      {
        title: "Written lectures",
        data: [
          {
            title: "Lecture 1 pdf",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
          {
            title: "Lecture 2",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
          {
            title: "Lecture 3",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
        ],
      },
    ],
  },
  {
    title: "Week 1",
    data: [
      {
        title: "recorded lectures",
        data: [
          {
            title: "Lecture 4",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
          {
            title: "Lecture 5",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
          {
            title: "Lecture 6",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
        ],
      },
      {
        title: "Written lectures",
        data: [
          {
            title: "Lecture 4 pdf",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
          {
            title: "Lecture 5",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
          {
            title: "Lecture 6",
            description: "Ignore this description for now",
            URL:
              "https://drive.google.com/file/d/1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0/view",
          },
        ],
      },
    ],
  },
];
export default ({ route }) => {
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
      <ContentList content={content} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
