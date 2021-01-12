import * as React from "react";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  IconButton,
} from "react-native-paper";
import { View } from "react-native";
const MyComponent = ({ visible, setVisible ,message}) => {
  const hideModal = () => {
    console.log("hide the modal");
    setVisible(false);
  };
  const containerStyle = {
    margin: 80,
    background: "#333a",
    height: 400,
    padding: 40,
    paddingTop:200,
    zIndex: 1000,
  };

  return (
    <View style={{ zIndex: 1000 }}>
      <Provider>
        <Portal style={{ margin: 1000 }}>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>
             {message}
            </Text>
            <IconButton
              icon="close"
              size={20}
              onPress={hideModal}
            />
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
};

export default MyComponent;
