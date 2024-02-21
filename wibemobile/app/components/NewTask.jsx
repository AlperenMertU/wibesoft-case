


//inputtan değeri alamamıza ve sonrasında List.jsx e değeri göndermeye yarıyor.

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

const NewTask = ({ onTaskAdd }) => {


    const [inputValue, setInputValue] = useState('');


    //bu fonskiyon ile inputta girilen her değeri almamıza yarıyor 
    //sonrasında inputValue statine değeri atıyor
    const handleChange = (text) => {
        setInputValue(text);
    };

    //bu fonskiyon girilen değeri List.jsx'e gödnermeye yarıyor
    const handleButtonPress = () => {
        //göndermeden değerin boş olup olamadığını da konrol ediyor

        const trimmedValue = inputValue.trim();
        if (trimmedValue.length > 0) {
            onTaskAdd(trimmedValue);
        }

        //sonrasında input girişini sıfırlıyor 
        setInputValue('');
    };

    return (
        <View style={styles.myInputContainer}>
            <TextInput value={inputValue} onChangeText={handleChange} style={styles.myInput} multiline={true} // Birden fazla satır kullanılabilir
                numberOfLines={1} />
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
        color: "black"
    },
    sendIcon: {
        width: 25,
        height: 25
    }
});

export default NewTask;
