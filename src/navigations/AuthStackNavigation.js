import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Authstack = createStackNavigator();

export const AuthStackNavigation = () => {
    return(
        <Authstack.Navigator initialRouteName="Login">
            <Authstack.Screen name="Login" component={SigninScreen} />
            <Authstack.Screen name="SignUp" component={SignupScreen} />
        </Authstack.Navigator>
        //<SigninScreen/>
    )
}