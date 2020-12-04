import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>The DreAm app is here</Text>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
