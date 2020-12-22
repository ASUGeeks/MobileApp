import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColBox = ({ colName, colCode }) => {
  return (
    <View style={[style.container, { backgroundColor: colCode }]}>
      <Text style={style.text}>
        {colName}:{colCode}
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: "#ff0000",
    padding:30,
    alignItems:"center",
    margin:10,
    borderRadius:5
  },
  text: {
    color: "#eeeeee",
  },
});
export default ColBox;
