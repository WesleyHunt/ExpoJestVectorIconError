import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Feather name="minus" style={styles.iconStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 10
  }
});
