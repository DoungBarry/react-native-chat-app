import React from 'react'
import { Image, Button, Input } from "react-native-elements";
import {  StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View >
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: "https://www.barrysjewellers.com/skin/frontend/boilerplate/barrys/images/logo-2020.jpg" }}
      />
     
 
      <Input
        placeholder="Email"
        autoFocus
        value={email}
        onChangeText={ (text => setEmail(text))}
        value={email}
        type="email"  
        /> 
      
         </View>
  )
}

export default LoginScreen 

const Styles = StyleSheet.create({

  
})

