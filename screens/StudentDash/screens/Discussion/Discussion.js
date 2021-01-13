import React, { useState, useEffect } from "react";
import { Text, Button } from "react-native-paper";
import { View } from "react-native";
const MyComponent = ({ route }) => {
  const [uri, seturi] = useState("");

  useEffect(() => {}, []);

  return (
    <View>
      <Text>THis is the discussion forum</Text>
    </View>
  );
};

export default MyComponent;
