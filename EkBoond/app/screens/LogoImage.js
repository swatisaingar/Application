import React, { Component } from 'react';
 
import {View, Image } from 'react-native';

 
export default class LogoImage extends Component {
 
  render() {
 
    return (
 
      <View style={{flexDirection: 'row'}}>
 
 <Image source={require('../assets/Images/logo.png')} style={{ width: "30%", height: "50%", marginTop:10,marginBottom:10 }} />
      </View>
    
    );
  
  
  }
}