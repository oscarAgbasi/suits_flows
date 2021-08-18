import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";
import { Layout } from "../../components/Layout";

const WorkersScreen = ({ navigation }) => {
    const {state, signout} = useContext(AuthContext);
    // DO API call to get the Users information
    return(
        <Layout>
            <Text>Workers</Text>
        </Layout>
    )
};



export default WorkersScreen;