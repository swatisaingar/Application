import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Address extends Component {
  constructor(props) {

    super(props);

    this.address = [{
      pincode: 0,
      city: '',
      addressLine1: '',
      addressLine2: ''
    }
    ],

      this.state = {

        arrayHolder: [],

        pincode: 0,
        city: '',
        addressLine1: '',
        addressLine2: ''
      }

  }

  componentDidMount() {

    this.setState({ arrayHolder: [...this.address] })

  }



  joinData = () => {
   
    this.address.push({ pincode: this.state.pincode, city: this.state.city, addressLine1: this.state.addressLine1, addressLine2: this.state.addressLine2 });

    console.log('values',this.state.pincode,this.state.city,this.state.addressLine1,this.state.addressLine2)

    this.setState({ arrayHolder: [...this.address] })

  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetItem(item) {

    console.log('item',item);

  }

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
            Delivery Address
          </Text>
          <Image
            resizeMode='contain'
            source={require('../assets/Images/logo.png')}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View style={styles.MainContainer}>

          <TextInput
            placeholder="Enter Pincode"
            placeholderTextColor='#003f5c'
            onChangeText={data => this.setState({ pincode: data })}
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
          />
          <TextInput
            placeholder="Enter City"
            placeholderTextColor='#003f5c'
            onChangeText={data => this.setState({ city: data })}
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'

          />
          <TextInput
            placeholder="Enter Address Line1"
            placeholderTextColor='#003f5c'
            onChangeText={data => this.setState({ addressLine1: data })}
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
          />
          <TextInput
            placeholder="Enter Address Line2"
            placeholderTextColor='#003f5c'
            onChangeText={data => this.setState({ addressLine2: data })}
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity onPress={this.joinData} activeOpacity={0.7} style={styles.button} >

            <Text style={styles.buttonText}>Save Address</Text>

          </TouchableOpacity>

          <FlatList

            data={this.state.arrayHolder}

            width='100%'

            // extraData={this.state.arrayHolder}

            keyExtractor={(index) => index.toString()}

            ItemSeparatorComponent={this.FlatListItemSeparator}

            renderItem={({ item }) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.pincode, item.city, item.addressLine1, item.addressLine2)} > {item.pincode}{item.city}{item.addressLine1}{item.addressLine2} </Text>}
          />

          {/* <TouchableOpacity activeOpacity={0.7} style={styles.button} >

            <Text style={styles.buttonText}>Continue</Text>

          </TouchableOpacity> */}

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: '40%',

  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {
    height: 50,
    width: '80%',
    paddingVertical: 15,
    fontSize: 18,
    backgroundColor: "#f7fbfc",
    borderRadius: 7,
    marginTop: 12,
  },

  button: {
    width: '80%',
    height: 50,
    padding: 10,
    backgroundColor: '#f50a2d',
    borderRadius: 8,
    marginTop: 12
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },

});

