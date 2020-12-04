import React from "react";
import { View, Text, FlatList } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import Box from "./PreviewBox";
const Preview = ({ name, color }) => {
  return (
    <View>
      <Text>{name}</Text>
      <FlatList
        data={color.slice(0,4)}
        renderItem={(data) => <Box color={data.item.hexCode} />}
        keyExtractor={data=>data}
        numColumns={5}
        
      />
      {/* <FlatList
        data={COLORS}
        renderItem={(data) => (
          <ColorBox colName={data.item.colorName} colCode={data.item.hexCode} />
        )}
        keyExtractor={(item) => item}
      /> */}
    </View>
  );
};

export default Preview;
