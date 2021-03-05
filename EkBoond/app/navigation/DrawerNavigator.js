import React from "react";
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from "@react-navigation/drawer";
import {Image} from 'react-native';
import { MainStackNavigator } from './StackNavigator';
import TabNavigator from './BottomTabNavigator';
import Login from '../screens/Login';
import Setting from '../screens/Setting';
import MyOrder from '../screens/MyOrder';
import Address from '../screens/Address';
import Profile from '../screens/Profile';
import ProductList from '../screens/ProductList';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} 
        options={{
          drawerIcon: () => <Image
          source={require('../assets/Images/home.png')}
          resizeMode='contain'
          style={{ width: 25, height: 25}}
        />
        }} />
      <Drawer.Screen name="Products" component={ProductList} options={{
          drawerIcon: () => <Image
          source={require('../assets/Images/products.png')}
          resizeMode='contain'
          style={{ width: 25, height: 25}}
        />
        }} />
      <Drawer.Screen name="Orders" component={MyOrder} options={{
          drawerIcon: () => <Image
          source={require('../assets/Images/orders.png')}
          resizeMode='contain'
          style={{ width: 25, height: 25}}
        />
        }} />
      <Drawer.Screen name="Edit Profile" component={Profile}   options={{
          drawerIcon: () => <Image
          source={require('../assets/Images/profile.png')}
          resizeMode='contain'
          style={{ width: 25, height: 25}}
        />
        }} />
      <Drawer.Screen name="Login" component={Login} options={{
          drawerIcon: () => <Image
          source={require('../assets/Images/login.png')}
          resizeMode='contain'
          style={{ width: 25, height: 25}}
        />
        }} />
         <Drawer.Screen name="Setting" component={Setting} options={{
          drawerIcon: () => <Image
          source={require('../assets/Images/setting.png')}
          resizeMode='contain'
          style={{ width: 25, height: 25}}
        />
        }} />
         <Drawer.Screen name="Address" component={Address} options={{
          drawerIcon: () => <Image
          source={require('../assets/Images/address.png')}
          resizeMode='contain'
          style={{ width: 25, height: 25}}
        />
        }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
