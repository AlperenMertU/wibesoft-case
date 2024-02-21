


//List.jsx bileşenim Tasks.js den gelen değerlerimi listelemek için kullanılır, burada listelenen görevlerimi, List.jsx ile ekranda gösteriyorum.
//App.js'e import edilmiştir
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import Tasks from './Tasks';
import NewTask from './NewTask';

const List = () => {
    const [tasks, setTasks] = useState([]);


    //inputtan gelen değerler tasks'a ekleniyor 
    //aynı değerin listede terkararlanmasının önünde de burda geçiliyor
    //daha sonra tasks değerlerimi 43. satırda tasks.map araclığıyla list.jsx e ekliyorum
    const addTask = (task) => {
        const lowercaseTask = task.toLowerCase();
        if (!tasks.some(t => t.toLowerCase() === lowercaseTask)) {
            setTasks([...tasks, task]);
        }
    };


    //tasks statinde da bulunan değerleri silmeye yarayan bir fonksiyon
    //sildikten sonra task statini güncelliyor
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
        height: "95%"
    },
    itemInput: {
        margin: 10,
        marginTop: 20,
    },
    tasks: {

    },
    noItem: {
        color: "black",
        textAlign: "center",
        paddingTop: "50%",
        fontWeight: "bold",
        fontSize: 30
    }


});

export default List;
