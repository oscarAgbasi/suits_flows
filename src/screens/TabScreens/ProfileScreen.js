import React, { useContext } from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";
import { Layout } from "../../components/Layout";

const ProfileScreen = ({ navigation }) => {
    const {state, signout} = useContext(AuthContext);
    // DO API call to get the Users information
    return(
        <Layout>
            <Text>Profile</Text>
            <Button onPress={signout} title="Ready to Sign out?" type="clear" />
        </Layout>
    )
};



export default ProfileScreen;