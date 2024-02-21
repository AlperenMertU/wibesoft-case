

//her bir görevimizin oluşturulduğu component, burada text değerini, style, tamamlanma, silme olaylarının olduğu kısım 

import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

//NewTask.js den List.jsx'e ordan buraya text değeri geliyor ve bu prop yardımıyla text değerini alıyoruz.
const Tasks = (props) => {

        //burası görevdeki kutucuğa veya üstüne batığımız zaman tamamlanıp tamamlanmadığının kontrolünü yapıyor ve ona göre style ayarlıyor
    const [completed, setCompleted] = useState(false);

    const toggleCompleted = () => {
        setCompleted(!completed);
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.item}
                onPress={toggleCompleted}>
                <View style={[styles.taskItems, { opacity: completed ? 0.3 : 1 }]}>
                    <View style={[styles.tickBox, completed && styles.tickBoxCompleted]}></View>
                    <Text style={[styles.itemText, { opacity: completed ? 0.5 : 1 }]}>{props.text}</Text>

                    <TouchableOpacity style={styles.deleteItem} onPress={props.onDelete}>
                        <Image style={[styles.deleteIcon, { tintColor: completed ? "red" : "gray" },]} source={require('../assets/trash.png')} />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "rgb(160,160,160)",
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,
        margin: 8,

    },
    taskItems: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    tickBox: {
        width: 24,
        height: 24,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 10,
    },
    tickBoxCompleted: {
        backgroundColor: 'gray',
    },
    itemText: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color:"black"

    },
    deleteItem: {
        marginLeft: 'auto',
        tintColor: "red"
    },
    deleteIcon: {
        tintColor: "rgb(87, 87, 87)",
        width: 25,
        height: 25
    }
});

export default Tasks;
