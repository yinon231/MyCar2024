import React, {useState} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';

export const Input = ({type, placeholder, required, width}) => {
    const [value, setValue] = useState('');

    const handleChange = (text) => {
        setValue(text);

        if (type === 'email') {
            if (!validateEmail(text)) {
                console.log('Invalid email');
            }
        }
    };

    const inputWidth = width * Dimensions.get('window').width;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const validateEmail = (email) => {
        return emailRegex.test(email);
    };

    return (
        <View style={[styles.inputContainer, {width:inputWidth}]}>
            <TextInput
                style={[styles.input, {width:inputWidth}]}
                placeholder={placeholder}
                onChangeText={handleChange}
                placeholderTextColor={'#393939'}
                keyboardType={type === 'number' ? 'numeric' : 
                              type === 'email' ? 'email-address' : 
                              'default'}
            />
            {required && !value && (
                <Text style={styles.asterisk}>*</Text>
            )}
        </View>
    );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    inputContainer: {
        height: windowHeight * 0.1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    input: {
        height: windowHeight * 0.1,
        borderRadius: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#E5E5E5',
        borderWidth: 1,
        fontSize: 20,
        paddingRight: 27,
        position: 'relative',
        fontWeight: '400',
        color: 'black',
    },
    asterisk: {
        position: 'absolute',
        color: 'red',
        right: 15,
        fontSize: 20,
    },
});