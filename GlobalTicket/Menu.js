import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Menu = () => {

    const navigation = useNavigation();
    
    return(
        <View style={StyleSheet.menu}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Tickets')}
                style={StyleSheet.button}
            >
                <Text style={StyleSheet.buttontext}></Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginRight: 5,
        marginLeft: 5
    },
    buttontext: {
        fontFamily: 'Ubuntu-R'
    }
});

export default Menu;