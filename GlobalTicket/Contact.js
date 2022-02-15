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

    return(
        <View style={styles.form}>
            <Text style={styles.label}>
                Name: *required
            </Text>
            <TextInput
                style={styles.txtinput}
                onChangeText={name => setFormName(name)}
                value={formName}
                autoCapitalize='words'
                selectTextOnFocus={true}
            />
            <Text style={styles.label}>
                Email: *required
            </Text>
            <TextInput
                style={style.txtinput}
                onChangeText={email => setFormEmail(email)}
                value={formEmail}
                selectTextOnFocus={true}
            />
            <Text style={styles.label}>
                Phone: 
            </Text>
            <TextInput
                style={style.txtinput}
                onChangeText={phone => setFormPhoneNumber(phone)}
                value={formPhoneNumber}
                selectTextOnFocus={true}
            />
            <Text style={styles.label}>
                Message: *required 
            </Text>
            <TextInput
                style={styles.multtxtinput}
                onChangeText={message => setFormMessage(message)}
                value={formMessage}
                multiline={true}
                numberOfLines={3}
                selectTextOnFocus={true}
            />
            <Button
                title="Contact Us"
                color="#708090"
                onPress={submit}
            />
        </View>
        
    );
}
const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        flexDirection: 'column',
        padding: 18
    },
    txtinput: {
        borderWidth: 1,
        fontFamily: 'Ubuntu-R',
        width: '80%',
        paddingBottom: 15
    },
    multtxtinput: {
        borderWidth: 1,
        fontFamily: 'Ubuntu-R',
        width: '0%',
        height: 120,
        marginBottom: 15
    },
    label: {
        fontFamily: 'Ubuntu-R',
    }
});

export default Contact;
