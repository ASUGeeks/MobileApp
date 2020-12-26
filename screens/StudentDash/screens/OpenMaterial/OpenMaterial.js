import * as React from 'react';
// import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';
import {View} from "react-native"
import WebView from 'react-native-webview'
const MyComponent = () => {

  const containerStyle = {backgroundColor: 'white', padding: 20,height:300,width:200};

  return (
<View style={{backgroundColor:"#f00",height:"100%"}}>

    <WebView source={{ uri: "https://drive.google.com/open?id=1qBs_Y1Yhc_lZhQ8ru3l3kSdmoo_6gBE0"}} style={containerStyle}/>
</View>
  );
};

export default MyComponent;