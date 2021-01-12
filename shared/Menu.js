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
import { PreferencesContext } from "./PreferencesContext";

const Header = ({ items, handlePress, title, index }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  const [visible, setVisible] = React.useState(false);
  function openMenu() {
    setVisible(true);
  }

  function closeMenu() {
    setVisible(false);
  }

  return (
    <Menu
    style={styles.menu}
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Appbar.Action
          icon="menu"
          color={isThemeDark ? "#fff" : "#333"}
          onPress={openMenu}
        />
      }
    >
      {items.map((item, index) => (
        <Menu.Item
          onPress={() => {
            handlePress(item.body);
            closeMenu();
          }}
          title={item.name}
        />
      ))}
    </Menu>
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
  title: {
    fontSize: 30,
  },
  menu:{
  }
});
