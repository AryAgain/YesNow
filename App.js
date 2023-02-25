import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskEnter from './TaskEnter';
import Tasks from './Tasks';

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }


  const strikeoffTask = (strikeoffTaskValue) => {
    // setTasks(tasks.filter((value) => value != strikeoffTaskValue));
  }

  const removeTask = (removeTaskValue) => {
    setTasks(tasks.filter((value) => value != removeTaskValue));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO NOW LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <Tasks task={task} strikeoffTask={() => strikeoffTask(task)} removeTask={() => removeTask(task)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskEnter addTask={addTask}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#f0f8ff',
    fontSize: 35,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center'
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});