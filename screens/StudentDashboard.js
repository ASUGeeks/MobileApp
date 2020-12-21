import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MyBtn from "./Mybutton";
export default ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text>THIS IS THE Student dashboard screen</Text>
      <MyBtn
        title="Teachhhhhher"
        navigation={navigation}
        destination="TeacherDashboard"
        color="#aa0"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: "#aaa",
    color: "#333",
    borderRadius: 3,
    padding: 10,
  },
});
