/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

const App: () => Node = () => {
    return (    
        <>
            <StatusBar barStyle="dark-content" hidden />
            <Home username='Sports Fan' />
        </>
    );
};

export default App;
