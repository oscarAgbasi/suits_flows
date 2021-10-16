import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Layout } from "../../components/Layout";
import tw from 'tailwind-react-native-classnames';
import { Button } from 'react-native-elements';


export default function WelcomeScreen({navigation}) {
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
            <View style={styles.container}>
                <Image style={styles.illustrations} source={require('../../../assets/house_rental.jpg')}/>
                <View style={styles.intro}>
                    <Text style={tw `text-xl text-center font-bold`}>
                        Rental Property {"\n"}  management made easy
                    </Text>
                </View>
                <View style={styles.navBttn}>
                    <Button 
                        title="Register"
                        color= '#2F80ED'
                        buttonStyle= {{marginBottom: 10}}
                        onPress={navSignup}
                    />
                    <Button 
                        onPress={navLogin}
                        title="Sign in"
                        type='outline'
                        color= '#2F80ED'
                    />
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap:'nowrap',
    },
    illustrations: {
        width: 390.37,
        height: 221.5
    },
    intro:{
        width: 340,
        height: 56,
        marginTop:90,
        
    },
    navBttn: {
        marginTop: 110,
        width: '100%',

    }
})
