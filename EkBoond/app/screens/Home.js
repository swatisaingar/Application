import React from "react";
import { View, Button, Text, StyleSheet,TouchableOpacity,navigation } from "react-native";
import { SliderBox } from 'react-native-image-slider-box';
   
export default class Home extends React.Component {
  constructor(props) {     
    super(props);     
    this.state = {       
    images: [         
    "https://source.unsplash.com/1024x768/?nature", 
                    "https://source.unsplash.com/1024x768/?water",
                      "https://source.unsplash.com/1024x768/?girl", 
                              "https://source.unsplash.com/1024x768/?tree", // Network image       
                                require('../assets/Images/logo.png'),          // Local image       
    ]     
    };   
    } 
  render() {
     return (
       <View>
          <SliderBox images={this.state.images}
           autoplay
           circleLoop
           ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 10}}/>

        <Text style={{marginTop:20,color:'black',fontSize:20,marginLeft:15}}>Avaliable Products</Text>
        <View style={{flexDirection:'row'}}>
      <View style={{backgroundColor:'white',height:180,width:180,marginLeft:15}}> 
      <Text>Hi</Text>       
      </View>
      <View style={{backgroundColor:'white',height:180,width:180,marginRight:10,marginLeft:5}}> 
      <Text>Hi</Text>       
      </View>
     
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{backgroundColor:'white',height:180,width:180,marginLeft:15,marginTop:10}}> 
      <Text>Hi</Text>       
      </View>
      <View style={{backgroundColor:'white',height:180,width:180,marginRight:10,marginLeft:5,marginTop:10}}> 
      <Text>Hi</Text>       
      </View>
     
      </View>
    </View>
     )
  }
}
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
