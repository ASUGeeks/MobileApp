import * as React from "react";
import { View ,StyleSheet} from "react-native";
import { RadioButton, Text } from "react-native-paper";

const MyRadio = ({title, options, value, setValue }) => {
  return (
    <View style={styles.root}>
        <Text style={styles.title}>{title}</Text>
      {options.map((o) => (
        <View>
          <Text style={styles.lable}>{o}</Text>
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

const styles = StyleSheet.create({
    root: {
      margin: 20,
    },title:{
        fontSize:20
    },lable:{
        marginTop:10
    },radio:{
        margin:20
    }
  });
  


export default MyRadio;
