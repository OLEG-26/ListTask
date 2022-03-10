import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Task from '../../components/Task';

  
export default function HomeScreen({navigation}) {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <ScrollView>

      {/* Today's Task*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task! </Text>
        
        <View style={styles.items}>
          {/* This is where the tasks will go!*/}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              ) 
            })
          }
          {/*<Task text={'Task 1'}/>
          <Task text={'Task 2'}/>*/}
          </View>
        </View>
        
        </ScrollView>

        {/* Write a Task*/}
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Add a Task...'} value={task} onChangeText={text => setTask(text)}/>

            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                < Text style={styles.addText}>
                <Entypo name='add-to-list' size={28} color='#03C04A' />    
                </Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC619',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000137',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'relative',
    bottom: 12,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#FFF',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 2,
    width: 250,
    paddingLeft: 24,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#03C04A',
    borderWidth: 1.5,
  },
  addText: {

  },

});