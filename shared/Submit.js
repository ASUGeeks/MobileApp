import * as React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

export default ({ handleSubmit ,label}) => (
  <Button style={styles.root} mode="contained" onPress={handleSubmit}>
    {label===undefined?"Submit":label}
  </Button>
);

const styles = StyleSheet.create({
  root: {
    margin: 20,
  },
});
