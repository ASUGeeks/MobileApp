// import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";

import BottomNavigation from "./navigation/BottomNavigation";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import merge from "deepmerge";
import { PreferencesContext } from "./shared/PreferencesContext";
import Snack from "./shared/Snack";
import Admin from "./screens/Admin/Admin";
import TeacherDashboard from "./screens/TeacherDash/TeacherDashboard";
import StudentDashboard from "./screens/StudentDash/StudentDashboard";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
PaperDarkTheme.colors.onBackground = "rgb(68, 68, 68)";
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  const [SnackMessage, setSnackMessage] = React.useState("This is a message");
  const [visible, setVisible] = React.useState(true);
  const onDismissSnackBar = () => setVisible(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  console.log("THEMEMEME", theme);
  const newTHeme = { ...theme, colors: { ...theme.colors, primary: "#672dd8" } };
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={newTHeme}>
        <NavigationContainer theme={newTHeme}>
          <Admin />
          {/* <BottomNavigation
            setSnackMessage={setSnackMessage}
            setVisible={setVisible}
          /> */}

          {/* <Snack
            message={SnackMessage}
            visible={visible}
            onDismissSnackBar={onDismissSnackBar}
          /> */}
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
