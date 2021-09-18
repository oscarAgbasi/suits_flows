import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import PropertyListScreen  from "../screens/TabScreens/PropertyListScreen";
import  ProfileScreen  from "../screens/TabScreens/ProfileScreen";
import  WorkersScreen from "../screens/TabScreens/WorkersScreen";

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconType;

          switch (route.name) {
            case "Property":
              iconName = "apartment";
              iconType = focused ? "material" : "material-outlined";
              break;
            case "Worker":
              iconName = "home-repair-service";
              iconType = focused ? "material" : "material-outlined";
              break;
            case "Profile":
              iconName = "person";
              iconType = focused ? "material" : "material-outlined";
              break;
          }

          return (
            <Icon name={iconName} type={iconType} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Property" component={PropertyListScreen} />
      <Tab.Screen name="Worker" component={WorkersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
