import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primera app con React Native</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Presióname"
          onPress={() => Alert.alert("BOOOM")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
    paddingTop: 50,             
    alignItems: 'center',      
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',  
    width: '100%',
    paddingHorizontal: 50
  }
});
