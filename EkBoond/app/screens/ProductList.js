import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class ProductList extends Component {
  
  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', backgroundColor: "#bbdeff", justifyContent: 'space-between' }}>
          <TouchableOpacity>
            {/*Donute Button Image */}
            <Image
              resizeMode='contain'
              source={require('../assets/Images/menu.png')}
              style={{ width: 25, height: 25, margin: 15 }}
            />
          </TouchableOpacity>

          <Text style={{ color: 'black', fontSize: 20, alignSelf: 'center', fontWeight: '300' }}>
            ProductList
          </Text>
          <Image
            resizeMode='contain'
            source={require('../assets/Images/logo.png')}
            style={{ width: 50, height: 50 }}
          />
        </View>
       
      </View>
    )
  }
}

