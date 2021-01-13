import React from "react";
import {
  Menu,
  useTheme,
  Appbar,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { PreferencesContext } from "../shared/PreferencesContext";

const Header = ({ scene, navigation, previous, dropdowmMenu }) => {
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
      {dropdowmMenu !== undefined ? (
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
          {dropdowmMenu.map((item) => (
            <Menu.Item
              onPress={() => {
                navigation.navigate(item.navigate);
              }}
              title={item.title}
            />
          ))}
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};
export default Header;
