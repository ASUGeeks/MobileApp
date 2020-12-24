import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

export default ({ handleSubmit }) => (
  <Button style={styles.root} mode="contained" onPress={handleSubmit}>
    Submit
  </Button>
);

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
