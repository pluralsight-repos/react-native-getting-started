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
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';

const Stack = createStackNavigator();

const App: () => Node = () => {
    return (    
        <>
            <StatusBar barStyle="dark-content" hidden />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    headerMode='screen'
                >
                    <Stack.Screen
                        name='Home'
                        options={{
                            headerShown: false
                        }}
                        >
                            {(props) => <Home {...props}username='Sports Fan'/>}
                        </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default App;
