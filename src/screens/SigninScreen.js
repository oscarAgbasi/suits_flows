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

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signin } = useContext(AuthContext);

  return (
    <Layout>
      <Text style={styles.logo}>Suit Flo1w</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity onPress={() => console.log("Button clicked")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          signin({ email, password });
        }}
        style={styles.loginBtn}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginText}>Sign up Here.</Text>
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
