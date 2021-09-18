import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Layout } from "../../components/Layout";
import tw from 'tailwind-react-native-classnames';

export default function WelcomeScreen({navigation}) {
    var yourPicture = require('../../../assets/house_rental.jpg');
    const navSignup = () => {
        console.log('Register clicked');
        navigation.navigate('SignUp')
    }
    const navLogin = () => {
       console.log('Login clicked');
       navigation.navigate('Login')
    }
    return (
        <Layout>
            <View style={tw `w-full h-full justify-end`}>
                <View style ={{backgroundColor: 'red',marginBottom: 90, height: 288}}>
                    {/* <Image source={yourPicture} /> */}
                </View>
                <View style={{paddingBottom: 100}}>
                    <Text style={tw `text-center text-xl font-bold `}>Rental Property</Text>
                    <Text style={tw `text-center text-xl font-bold `}>management made easy</Text>
                </View>
                <TouchableOpacity style= {styles.registerBtn} onPress={() => navSignup()}>
                    <Text style={tw `text-center text-white text-lg font-bold`}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {styles.signBtn} onPress={() => navLogin()}>
                    <Text style={tw `text-center text-blue-600 text-lg font-bold`}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    registerBtn: {
        padding: 10,
        backgroundColor: '#2F80ED',
        height: 50,
        fontWeight: 'bold',
        borderRadius: 4
    },
    signBtn: {
        padding: 10, 
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        height: 50,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: '#2F80ED',
        fontWeight: 'bold',
        borderRadius: 4
    }
})
