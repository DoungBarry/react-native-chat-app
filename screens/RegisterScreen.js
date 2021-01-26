import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { KeyboardAvoidingView } from "react-native"
import {Button , Input } from "react-native-elements"
import {StatusBar} from "expo-status-bar"

const RegisterScreen = ({ navigation }) => {

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
      <StatusBar style="light" />
      
      <View>
        <Text>  Barry JavaSax </Text>
      </View>
      

      <View>
        <Text>  Barry JavaSax </Text>
      </View>

    </KeyboardAvoidingView>
   
  );
};

export default RegisterScreen

const styles = StyleSheet.create({

container : {} ,


})



