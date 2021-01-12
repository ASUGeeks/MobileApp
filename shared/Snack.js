import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Snackbar } from "react-native-paper";

const MyComponent = ({visible , onDismissSnackBar,message}) => {

  return (
    <View style={styles.container}>
      <Snackbar
        style={{ position: "absolute", bottom: 0 }}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: "close",
          onPress: () => {
            console.log("close the snackbar");
            // Do something
          },
        }}
      >
        {message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'space-between',
  },
});

export default MyComponent;
