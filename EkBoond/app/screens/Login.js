import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {

  const [mobileNumber,setMobileNumber]=useState(0)
  const [password,setPassword]=useState('')
  
    return (
      <View style={styles.container}>      
        <View style={styles.innercontainer}>
          <Text style={styles.textview}>Explore Ek Boond</Text>
          <Image source={require('../assets/Images/logo.png')} style={{ width: "30%", height: "50%", marginTop:10,marginBottom:10 }} />
        </View>
        <ScrollView>
        <View style={styles.secondcontainer}>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Mobile Number"
            keyboardType='numeric'
            placeholderTextColor="#003f5c"
            onChangeText={number => setMobileNumber({ mobileNumber: number })} 
            value={mobileNumber}
            maxLength={10}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword({ password: text })}
            minLength={8}
            maxLength={15} />
        </View>
        <View style={styles.conditionview}>
          <TouchableOpacity style={styles.conditionopacity}>  
            <CheckBox style={styles.checkbox}/>       
            <Text style={styles.checkboxtext}>Accept Terms and Condition</Text>  
          </TouchableOpacity>       
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity> 
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Address')}>
          <Text style={styles.buttonText}>Address</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
      
    );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent:'center',
  },
  innercontainer: {
    height: '40%',
    backgroundColor: '#bbdeff',
    marginTop: 0,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  secondcontainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30
  },
  textview: {
    fontWeight: 'normal',
    marginTop: '10%',
    fontSize: 30
  },
  inputView: {
    width: "80%",
    backgroundColor: "#f7fbfc",
    borderRadius: 25,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
  },
  inputText: {
    color: "#000000",
    fontSize:20,
    paddingLeft:30
  },
  buttonText: {
    color: "#000000",
    fontSize:20,
    justifyContent:'center',
    alignItems:'center'
  },
  forgot: {
    color: "#000000",
    fontSize: 12,
    marginTop:5,
    marginLeft:25
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#bbdeff",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop:15,
    height:50
  },
  conditionview:{
    flexDirection:'row',
    marginTop:30
  },
  conditionopacity:{
    flexDirection:'row'
  },
  checkbox:{
    height:28
  },
  checkboxtext:{
    fontSize:12,
    marginTop:5
  }
});

export default Login;