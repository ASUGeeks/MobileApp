import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
export default ({ navigation }) => {
  axios
    .get("/")
    .then((r) => console.log("hey", r))
    .catch((bug) => console.log("BUBUBUUB", bug));
  return (
    <View>
      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Create user")}
      >
        Create User
      </Button>

      <Button
        style={styles.Button}
        mode="contained"
        onPress={() => navigation.navigate("Create course")}
      >
        Create course
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
