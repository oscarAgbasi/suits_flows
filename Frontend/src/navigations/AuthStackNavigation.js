import React from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/AuthScreens/WelcomeScreen';

const Authstack = createStackNavigator();

export const AuthStackNavigation = () => {
    return(
        <Authstack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false}}>
            <Authstack.Screen name="Login" component={SigninScreen} />
            <Authstack.Screen name="SignUp" component={SignupScreen}/>
            <Authstack.Screen name="Welcome" component={WelcomeScreen}/>
        </Authstack.Navigator>
    )
}