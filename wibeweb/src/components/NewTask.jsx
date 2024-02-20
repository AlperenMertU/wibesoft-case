import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NewTask = ({ onTaskAdd }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (text) => {
        setInputValue(text);
    };

    const handleButtonPress = () => {
        const trimmedValue = inputValue.trim(); // Boşlukları kaldırılmış değeri alın
        if (trimmedValue.length > 0) {
            onTaskAdd(trimmedValue);
        }
        setInputValue('');
    };

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
                multiline={true} // Birden fazla satır kullanılabilir
                numberOfLines={1} // Varsayılan olarak 4 satır görünecek şekilde ayarlandı, isteğe bağlı olarak artırabilir veya azaltabilirsiniz
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
