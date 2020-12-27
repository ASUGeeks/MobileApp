import * as React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

const MyComponent = ({
  label,
  value,
  setValue,
  numberOfLines,
  index,
  parentIndex,
  grandIndex,
}) => {
  return (
    <TextInput
      style={styles.root}
      label={label}
      value={value}
      multiline={true}
      numberOfLines={numberOfLines}
      onChangeText={(text) => setValue(label,text, index, parentIndex, grandIndex)}
    />
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
