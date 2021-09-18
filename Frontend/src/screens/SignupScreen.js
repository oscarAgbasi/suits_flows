import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Layout } from "../components/Layout";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const { state, signup } = useContext(AuthContext);

  return (
    <Layout>
      <Text style={styles.logo}>Suit Flow</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword2(password2)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          onPress={() => signup({ email, password })}
        >
          Create account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account? </Text>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
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
    height: 50,
    color: "black",
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
