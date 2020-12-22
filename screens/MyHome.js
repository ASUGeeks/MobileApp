import React from "react";
import {
  View,
  
  TouchableOpacity,
  StyleSheet,
  
} from "react-native";
import { Switch ,Surface,Text } from "react-native-paper";
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
      <Switch value={false} /><Text>THIS IS THE HOME PAGE lol</Text>
      <Surface style={styles.surface}>
     <Text>Surface</Text>
  </Surface>
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
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default Home;
