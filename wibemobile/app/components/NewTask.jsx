// NewTask.jsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

const NewTask = ({ onTaskAdd }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (text) => {
        setInputValue(text);
    };

    const handleButtonPress = () => {
        if (inputValue.length > 0) {
            onTaskAdd(inputValue);

        }
        setInputValue('');
    };

    return (
        <View style={styles.myInputContainer}>
            <TextInput value={inputValue} onChangeText={handleChange} style={styles.myInput}        multiline={true} // Birden fazla satır kullanılabilir
            numberOfLines={1}/>
            <TouchableOpacity onPress={handleButtonPress} >
                <Image style={styles.sendIcon} source={require('../assets/send.png')} />

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    myInputContainer: {
        borderColor: 'black',
        borderBottomWidth: 2, 
        borderBottomColor: 'black', 
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    myInput: {
        flex: 1,
        borderRadius: 5,
        padding: 5,
        fontSize: 20,
        color:"black"
    },
    sendIcon: {
        width: 25,
        height: 25
    }
});

export default NewTask;
