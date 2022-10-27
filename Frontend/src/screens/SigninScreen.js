import axios from 'axios';
import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import { Layout } from "../components/Layout";
import { Input } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { Context as AuthContext } from "../context/AuthContext";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {config} from '../util/config'


const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signin } = useContext(AuthContext);
  const [authState, setAuthState] = useState(null);
  
  const navSignup = () => {
    console.log('Let go to backend');
    let url = config.SERVER_URL + '/test';
    console.log('url: ' + url);
    // axios.get(config.SERVER_URL + '/test')
    //   .then((response) => {
    //     console.log('response');
    //     console.dir(response)
    //   }).catch(err => {console.log(err)})
    axios({
      method: 'get',
      url: config.SERVER_URL + '/test',
      headers: {
        'Content-type': 'Application/json',
        Accept: 'Application/json',
        headers: {"Access-Control-Allow-Origin": "*"}
        // Authorization: jwt,
      },
      data: {}
    }).then(res => {
      console.log(res);
    }).catch (err => {
      console.log('What happening? ' + err);
    })
    // fetch(config.SERVER_URL + '/test')
    // .then(res => {
    //   console.log('Request: ' + res);
    // })
    // .catch(err => {
    //   console.log('What happening? ' + err);
    // })
    
  }

  useEffect(() => {
    (async () => {
      let cachedAuth = await getCachedAuthAsync();
      if (cachedAuth && !authState) {
        setAuthState(cachedAuth);
      }
    })
  }, []);

  return(
    <Layout>
      <View style={styles.container}>
        <Text style={tw `text-3xl text-center font-bold`}>Hey there!</Text>
        <Text style={tw `text-xl text-center font-bold`}>Welcome back.</Text>
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
            title="Sign in"
            color= '#2F80ED'
            buttonStyle= {{marginBottom: 10}}
            onPress= {navSignup}
          />
          <Button
            title= "Sign up with Google"
            icon={
              <Icon 
                name="google"
                style={{fontSize: 20 , marginRight: 10}}
              />
            }
            onPress={async () => {
              const _authState = await signInAsync();
              setAuthState(_authState);
            }}
            type='outline'
            color= '#2F80ED'
          />
          <TouchableOpacity style={styles.navtoLogin} onPress={() => navigation.navigate('SignUp')}>
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
    marginTop: 37,
    justifyContent: "space-between",
  },
  navBttn: {
    flex: 1,
    marginTop: 101,
  },
  navtoLogin: {
    marginTop: 100,
    justifyContent: 'center',
    flexDirection: "row",
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
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11,
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


export default SigninScreen;
