import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";
import { Layout } from "../../components/Layout";

const PropertyListScreen = ({ navigation }) => {
    const {state} = useContext(AuthContext);
    // DO API call to get the Properties of Landlord
    //API calls for properties details
    //API calls for Tenats (add/Delete)
    //API calls for Assigning Issues to workers
    return(
        <Layout>
            <Text>Property List</Text>
        </Layout>
    )
};



export default PropertyListScreen;