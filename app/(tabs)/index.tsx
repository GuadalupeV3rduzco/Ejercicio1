import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a task..."
        />
        <Button title="Add" onPress={() => {}} /> 
      </View>

      <View style={styles.taskList}>
        <Text style={styles.task}> Task 1: Study  </Text>
        <Text style={styles.task}> Task 2: Create the task list</Text>
        <Text style={styles.task}> Task 3: Upload project to GitHub</Text>
        <Text style={styles.task}> Task 4: Valorant</Text>
        <Text style={styles.task}> Task 5: Sleep notes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
  },
  taskList: {
    marginTop: 10,
  },
  task: {
    fontSize: 16,
    padding: 12,
    backgroundColor: '#f2f2f2',
    marginVertical: 6,
    borderRadius: 8,
  },
});
