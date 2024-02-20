// List.jsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Tasks from './Tasks';
import NewTask from './NewTask';

const List = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const lowercaseTask = task.toLowerCase();
    
        // Eğer task zaten listede varsa ekleme
        if (!tasks.some(t => t.toLowerCase() === lowercaseTask)) {
            setTasks([...tasks, task]);
        } else {
            console.log('Bu görev zaten listede mevcut!');
        }
    };
    
    

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <View style={styles.listContainer}>
            <View style={styles.itemInput}>
                <NewTask onTaskAdd={addTask} />
            </View>
    
            {tasks.length === 0 && (
                <Text style={styles.noItem}>Henüz Bir Görevin Yok</Text>
            )}
    
            <ScrollView style={styles.tasks}>
                {tasks.map((task, index) => (
                    <Tasks key={index} text={task} onDelete={() => deleteTask(index)} />
                ))}
            </ScrollView>
        </View>
    );
    
};

const styles = StyleSheet.create({
    listContainer: {
        height:"95%"
    },
    itemInput: {
        margin: 10,
        marginTop: 20,
    },
    tasks: {
    
    },
    noItem:{
        color:"black",
        textAlign:"center",
        paddingTop: "50%", 
        fontWeight:"bold",
        fontSize:30
    }
    
    
});

export default List;
