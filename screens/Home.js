import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.root}
        onPress={() => navigation.navigate("TeacherDashboard")}
      >
        
      </TouchableOpacity>
      <Text>THIS IS THE HOME PAGE</Text>
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
