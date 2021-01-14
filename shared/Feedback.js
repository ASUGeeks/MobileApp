import * as React from "react";
import { View, StyleSheet } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const MyRadio = ({ IsFail, success, fail }) => {
  return (
    <View>
      {IsFail !== null ? (
        !IsFail ? (
          <Text
            style={{
              fontSize: 22,
              color: "#00AB66",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            hey 
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 22,
              color: "#e50000",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {fail}
          </Text>
        )
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyRadio;
