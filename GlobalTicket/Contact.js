import React, {useState} from 'react';
import { Button, Text, TextInput, View, StyleSheet, Alert } from 'react-native';


const Contact = ({navigation}) => {
    const [formName, setFormName] = useState('Enter Name');
    const [formEmail, setFormEmail] = useState('Enter Email');
    const [formPhoneNumber, setFormPhoneNumber] = useState('Enter PhoneNumber');
    const [formMessage, setFormMessage] = useState('Let us know whats on yout mind');

    const submit = () => {
        if(!formName||!formEmail||!formMessage){
            Alert.alert('Please enter info in all required fields');
        }else{
            Alert.alert(`Thank you ${formName}`);
            navigation.navigate('Home');
        }
    }

}
