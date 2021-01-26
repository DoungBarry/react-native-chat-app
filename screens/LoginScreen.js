import React, { useState } from 'react'
import { Image, Button, Input } from "react-native-elements";
import { KeyboardAvoidingView, StyleSheet, Text, View, Keyboard } from "react-native";

import { StatusBar } from "expo-status-bar";

// Join keyboarAvoidingview is keyboard show below , when you click screen //

const LoginScreen = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  //tell your input this is useState ! // 

  const signIn=()=> {};


  return (
    
    <KeyboardAvoidingView behavior="padding"  style={styles.container}>

      <StatusBar style="light" />
      

      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: "/Users/doung1118/Code/ReactNative/message-chat-native/assets/logo/logo.png" }}
      />


      <View style={styles.inputContainer}>

      <Input 
        placeholder="Email"
          autoFocus
          type="email"  
          value={email}
        value={email}
        onChangeText={ (text) => setEmail(text)}  
      /> 
        
      {/* set email and setEmail of Variable  */}
    <Input
        placeholder="Password"
          secureTextEntry
          type="email"  
        value={password}
        onChangeText={ (text )=> setPassword(text)}
        /> 
             
         </View>
      <Button
        onPress={signIn}
        containerStyle={styles.button}
        title="V-up" />
        <Button
          onPress={() => navigation.navigate("Register")}
          containerStyle={styles.button} 
          type="outline"
          title="Register" />
      
          {/* <KeyboardAvoidingView behavior="padding" enabled style={Styles.container}>
      </KeyboardAvoidingView> */}
      <View style={{height:100}} />

    </KeyboardAvoidingView>
  )
}

export default LoginScreen 

const styles = StyleSheet.create({  
  container: {
    flex:1,
    alignItems: "center",
    // justify-content: "",
    alignItems: "center",
    padding: 10, 
    backgroundColor: "white"
    
  },


  inputContainer: {
    width :200 ,
  } ,

  button: {
    width: 200,
    marginTop: 10, 
    
} 
})

