import * as React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

const MyComponent = ({ label, value, setValue }) => {
  return (  
    <TextInput
      style={styles.root}
      label={label}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  root: {
    marginHorizontal:20,
    marginVertical:10
  },
});
