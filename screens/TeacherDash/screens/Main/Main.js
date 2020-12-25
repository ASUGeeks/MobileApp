import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default ({ navigation }) => {
  return (
    <View>
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("CreateAnnouncement")}
      >
        create announcements
      </Button>
      <Button
        style={styles.Button}
        mode="outlined"
        onPress={() => navigation.navigate("PostLearningMaterials")}
      >
        post learning materials
      </Button>
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("CourseSpecification")}
      >
        Specify / Edit course specifications
      </Button>
      <Button
        style={styles.Button}
        dark={true}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        create timed quizzes / exams
      </Button>
      <Button
        style={styles.Button}
        compact={true}
        mode="contained"
        onPress={() => navigation.navigate("Assignments")}
      >
        create assignments
      </Button>
      {/* <Button
        style={styles.Button}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        create discussion forums.
      </Button> */}

      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Enroll students to the course
      </Button>

      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("CreateQuiz")}
      >
        CreateQuiz
      </Button>

      {/* <Button
        style={styles.Button}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        add student’s grades
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: "#ccc",
    color: "#933",
    borderRadius: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: "#333",
    color: "#eee",
    margin: 10,
    padding: 10,
    borderRadius: 100,
  },
  Button: {
    marginVertical: 10,
    marginHorizontal: 50,
  },
});
