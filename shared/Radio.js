import * as React from "react";
import { View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const MyRadio = ({ options, value, setValue }) => {
  console.log("options", options);
  return (
    <View>
      {options.map((o) => (
        <View>
          <Text>{o}</Text>
          <RadioButton
            key={o}
            value={o}
            status={value === o ? "checked" : "unchecked"}
            onPress={() => setValue(o)}
          />
        </View>
      ))}
    </View>
  );
};

export default MyRadio;
