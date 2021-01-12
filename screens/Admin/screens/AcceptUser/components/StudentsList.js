import React from "react";
import {
  Menu,
  useTheme,
  Appbar,
  TouchableRipple,
  Switch,
  Text,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";

const Header = ({ items, handlePress, title, index }) => {

  return (
   <Text>Hello from student list</Text>
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
  }
});
