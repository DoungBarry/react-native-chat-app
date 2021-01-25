import React, { useState } from 'react'
import { Image, Button, Input } from "react-native-elements";
import {  KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => { 

  const [email, setEmail ] = useState("") ;

  const [password, setPassword]=useState("");
     

  
  //tell your input this is useState ! // 


  return (
    
    <View >
      <KeyboardAvoidingView behavior="padding" enabled style={Styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: "/Users/doung1118/Code/ReactNative/message-chat-native/assets/logo/logo.png" }}
      />
     
 
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
        value={password}
     
      /> 
    
      <Button containerStyle={Styles.button} title="Touch me " />

        <Button containerStyle={Styles.button} title="Register" type="outline " />
        </KeyboardAvoidingView>
   </View>
  )
}

export default LoginScreen 

const Styles = StyleSheet.create({  
  container: {
    flex:0,
    alignItems:"center" ,
  },

  button: {
    width: 200,
    marginTop:10 , 
   }
   
})

