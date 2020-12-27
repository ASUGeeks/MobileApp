import React from "react";
import {
  Menu,
  useTheme,
  Appbar,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { PreferencesContext } from "../shared/PreferencesContext";

const Header = ({ scene, navigation, previous }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  const [visible, setVisible] = React.useState(false);
  function openMenu() {
    setVisible(true);
  }

  function closeMenu() {
    setVisible(false);
  }
  const title =
    scene.route.params !== undefined
      ? scene.route.params.name
      : scene.route.name;
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface,
        },
      }}
    >
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      <TouchableRipple onPress={() => toggleTheme()}>
        <Switch value={isThemeDark} />
      </TouchableRipple>
      {!previous ? (
        <Menu
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
          <Menu.Item
            onPress={() => {
              console.log("Option 1 was pressed");
            }}
            title="Option 1"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 2 was pressed");
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 3 was pressed");
            }}
            title="Option 3"
            disabled
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};
export default Header;
