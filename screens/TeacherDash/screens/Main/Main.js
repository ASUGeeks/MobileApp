import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default ({ navigation }) => {
  return (
    <View style={{marginTop:130}}>
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Create Announcement")}
      >
        create announcements
      </Button>
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Post Learning Materials")}
      >
        post learning materials
      </Button>
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Course Specification")}
      >
        Specify / Edit course specifications
      </Button>
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Discussion")}
      >
        Discussion forum
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
        onPress={() => navigation.navigate("Create Quiz")}
      >
        Create Quiz
      </Button>

      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Display Assignment")}
      >
        Display Assignment
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
