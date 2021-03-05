import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native-gesture-handler';


//const [isSelected, setSelection] = useState(false);

export default class Login extends React.Component {
  state = {
    mobileNumber: 0,
    email:"",
    password: ""
  }
  render() {
    return (
      <View style={styles.container}>      
        <View style={styles.innercontainer}>
          <Text style={styles.textview}>Join Ek Boond</Text>
          <Image source={require('../assets/Images/logo.png')} style={{ width: "30%", height: "50%" }} />
        </View>
        <ScrollView>
        <View style={styles.secondcontainer}>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Mobile Number"
            keyboardType='numeric'
            placeholderTextColor="#003f5c"
            onChangeText={number => this.setState({ mobileNumber: number })} 
            value={this.state.number}
            maxLength={10}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={email => this.setState({ email: email })}
            minLength={8}
            maxLength={15} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
            minLength={8}
            maxLength={15} />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
      
    );
  }
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
      marginTop:30,
      height:50
    }
  });
  