


//inputtan değeri alamamıza ve sonrasında List.jsx e değeri göndermeye yarıyor.
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

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

    //webde kullanım kolaylığı açısıdan enter tuşuna basınca da değeri gönderiyor.
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleButtonPress();
        }
    };

    return (
        <View style={styles.myInputContainer}>
            <TextInput
                value={inputValue}
                onChangeText={handleChange}
                style={styles.myInput}
                multiline={true}
                numberOfLines={1}
                onKeyPress={handleKeyPress}
            />
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
        padding: 5,
        width: 600
        
    },
    myInput: {
        overflow:"visible",
        outlineWidth: 0,
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        fontSize: 20,
        color: "black"
    },
    sendIcon: {
        width: 25,
        height: 25
    }
});

export default NewTask;
