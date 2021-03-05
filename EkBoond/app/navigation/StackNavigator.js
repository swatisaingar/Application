import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Icon} from 'react-native-elements';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import Home from '../screens/Home';
import MyOrder from '../screens/MyOrder';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Address from '../screens/Address';
import {View,TouchableOpacity,Image} from 'react-native';

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View  style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={require('../assets/Images/menu.png')}
          style={{ width: 25, height: 25, marginLeft: 15 ,marginTop:15}}
        />
      </TouchableOpacity>
      <Image
        source={require('../assets/Images/logo.png')}
        style={{ width: 50, height: 50, position:'relative',left:300}}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const MainStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        
        headerStyle: {
          backgroundColor: "#bbdeff",
        },
        headerTintColor: "black",
        headerBackTitle: "Back",
        headerTitleAlign:'center',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />
      }}
    >
      <Stack.Screen name="Ek Boond" component={Home} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Delivery Address" component={Address}  options={{ headerMode:true }}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };

