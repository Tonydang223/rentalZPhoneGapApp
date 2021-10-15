import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import AddDataForm from './components/AddDataForm';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar
      backgroundColor="#fff"
      barStyle={"dark-content"}
    />
       <AddDataForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
