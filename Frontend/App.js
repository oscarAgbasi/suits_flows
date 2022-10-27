import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as AuthProvider } from "./src/context/AuthContext.js";
import { Context as AuthContext } from "./src/context/AuthContext";
import { AuthStackNavigation } from "./src/navigations/AuthStackNavigation";
import { BottomTabNavigation } from "./src/navigations/BottomTabNavigation";

const Stack = createStackNavigator();
function App() {
  const { state } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state.token === null ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Auth"
            component={AuthStackNavigation}
          />
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={BottomTabNavigation}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <>
    <StatusBar style="dark" />
    <AuthProvider>
      <App />
    </AuthProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
