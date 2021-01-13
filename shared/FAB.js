import * as React from "react";
import { View } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";

const MyComponent = ({subScreens}) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal style={{ margin: 10 }}>
        <FAB.Group
          style={{ zIndex: 100000,}}
          open={open}
          icon={open ? "close" : "menu"}
          actions={subScreens}
          onStateChange={onStateChange}
          onPress={() => {
            // if (open) {

            // }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default MyComponent;
