import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

 const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate("color")} >
        CLICK MEE
      </TouchableOpacity>
      <Text>THIS IS THE HOME PAGE</Text>
    </View>
  );
};

export default Home