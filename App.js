import React, { useEffect } from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import AddDataForm from './components/AddDataForm';
import { dbConfig } from './configs/dbConfig';

export default function App() {
  const createTable = async()=>{
    dbConfig.openDb().transaction((tx)=>{
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS rentalZDB 
      (id INTEGER PRIMARY KEY AUTOINCREMENT,
        properType TEXT,
        bedRoom VARCHAR(100) NOT NULL, 
        dateTime TIMESTAMP NOT NULL, 
        price NUMERIC NOT NULL, 
        furnitureType VARCHAR(100), 
        note TEXT, 
        reporter TEXT)`,
        (tx,result)=>{
        },
        (error)=>{console.log(error)}
      )
      console.log('Connect OK')
    })
  }
  useEffect(()=>{
    createTable()
  },[])
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
