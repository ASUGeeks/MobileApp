import React from "react";
import { View, TouchableOpacity, StyleSheet ,Text} from "react-native";


import {useTheme , Switch, Surface, Chip ,Card, Title, Paragraph,Avatar ,Button} from "react-native-paper";
import Mybutton from "../../Mybutton";
const Home = ({ navigation }) => {
  const { colors } = useTheme();
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
      <Mybutton
        title="Login"
        navigation={navigation}
        destination="Login"
      />
      {/* 
      <Switch value={false} />
      <Text>THIS IS THE HOME PAGE lol</Text>
      <Surface style={styles.surface}>
        <Text>Surface</Text>
      </Surface>
      <Chip icon="home" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Card>
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  <Button style={{color:colors.primary}} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
	  
    padding: 10,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#333",
    color: "#eee",
  },
  surface: {
	  
    padding: 8,
	height: 80,
    width: 80,
	justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});

export default Home;
