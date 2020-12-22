import React from "react";
import { View, Text, FlatList } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import ColorBox from "../../navigation/ColorBox";

const Login = ({ route }) => {
  const { name, COLORS } = route.params;
  return (
    <View>
      <Text>This is the Login page : {name}</Text>
      <FlatList
        data={COLORS}
        renderItem={(data) => (
          <ColorBox colName={data.item.colorName} colCode={data.item.hexCode} />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Login;
