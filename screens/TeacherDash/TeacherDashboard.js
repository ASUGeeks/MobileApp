import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default () => {
  return (
    <View>
      <Text style={styles.root}>THIS IS THE Teacher Dashboard</Text>
      <Button mode="contained" onPress={() => console.log("Pressed")}>
        create announcements
      </Button>
      <Button mode="outlined" onPress={() => console.log("Pressed")}>
        post learning materials
      </Button>
      <Button
        dark={true}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        create timed quizzes / exams
      </Button>
      <Button
        compact={true}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        create assignments
      </Button>
      <Button
        color={"#00a"}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        create discussion forums.
      </Button>

      <Button
        loading={true}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        enroll students to the course
      </Button>
      <Button
        disabled={true}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        add student’s grades
      </Button>
      <Button mode="contained" onPress={() => console.log("Pressed")}>
        specify / Edit course specifications
      </Button>
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
});
