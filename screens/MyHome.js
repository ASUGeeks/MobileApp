import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Mybutton from "./Mybutton";
const Home = ({ navigation }) => {
  return (
    <View>
      <Mybutton
        title="TeachDashboard"
        navigation={navigation}
        destination="TeacherDashboard"
      />
      <Mybutton
        title="StudentDashboard"
        navigation={navigation}
        destination="StudentDashboard"
      />

      <Text>THIS IS THE HOME PAGE lol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    padding: 10,
    backgroundColor: "#333",
    color: "#eee",
    borderRadius: 3,
  },
});

export default Home;
