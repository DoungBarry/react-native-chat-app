import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import { StyleSheet, Text, View } from "react-native";

import 'react-native-gesture-handler'
import LoginScreen from "./screens/LoginScreen"

export default function App() {

  const Stack = createStackNavigator();

  const globalScreenOption = {
    headerStyle: { backgroundColor: "pink" },
    HeaderTitleStyle: { color: "white" },
    headerTintColor: "white" ,
  }
    // Here is phone title 


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOption}>
        <Stack.Screen name='Login' component={LoginScreen} />
       </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
});
