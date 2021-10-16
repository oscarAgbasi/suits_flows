import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  CheckBox,
  TouchableOpacity,
} from "react-native";
import { Layout } from "../components/Layout";
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { Context as AuthContext } from "../context/AuthContext";
import { Button } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);

  return (
    <Layout>
        <View style={styles.container}>
          <Text style={tw `text-3xl text-center font-bold`} >Create account</Text>
          <View style={styles.form}>
              <Input
                label = 'Email'
                labelStyle = {{color: 'black'}}
                onChangeText={(email) => setEmail(email)}
                leftIcon={{ type: 'font-awesome', name: 'envelope', size: 20 , color: '#2F80ED'}}
                style = {styles.inputText}
                containerStyle = {{marginBottom: 32}}
              />
              <Input
                label = 'Password'
                labelStyle = {{color: 'black'}}
                onChangeText={(password) => setPassword(password)}
                leftIcon={{ type: 'font-awesome', name: 'lock' , size: 20, color: '#2F80ED'}}
                style = {styles.inputText}
                secureTextEntry={true}
                containerStyle = {{marginBottom: 16}}
              />
          </View>
          <View style={styles.navBttn}>
            <Button 
            title="Register"
            color= '#2F80ED'
            />
              <TouchableOpacity style={styles.navtoLogin} onPress={() => navigation.navigate('Login')}>
                <Text>Already have an account?</Text>
                <Text style ={{color: '#2F80ED'}}>Sign in</Text>
              </TouchableOpacity>
          </View>
        </View>
    </Layout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 110
  },
  form: {
    marginTop: 29,
    justifyContent: "space-between",
  },
  checkboxContainer: {
    flexDirection: "row",

  },
  navBttn: {
    flex: 1,
    marginTop: 274,
  },
  navtoLogin: {
    marginTop: 25,
    justifyContent: 'center',
    flexDirection: "row",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    width: '100%',
    borderStyle: 'solid',
    borderColor: 'black', 
    borderRadius: 25,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});

export default SignupScreen;
