import React from "react";
import {
  Menu,
  useTheme,
  Appbar,
  TouchableRipple,
  Switch,
  Text,
  Checkbox,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useState } from "react/cjs/react.development";

const Header = ({ items, handleCheck, title, index }) => {
  return (
    <View style={style.container}>
      <FlatList
        data={items}
        renderItem={(student) => (
          <View style={styles.box} key={student.index}>
            {console.log(student.item.name)}
            <Text>{student.item.name}</Text>
            <Checkbox
              status={student.item.selected ? "checked" : "unchecked"}
              onPress={() => {
                handleCheck(student.index, student.item.selected);
              }}
            />
          </View>
        )}
      />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: "#ccc",
    color: "#933",
    borderRadius: 10,
    padding: 10,
  },
  box: {
    display: "flex",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {},
});
