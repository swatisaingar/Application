import React from "react";
import {Image} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainStackNavigator } from './StackNavigator';
import MyOrder from "../screens/MyOrder";
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Order from '../screens/Order';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{
          tabBarIcon: () => <Image
          source={require('../assets/Images/home.png')}
          style={{ width: 25, height: 25}}
        />
        }}/>
      <Tab.Screen name="Orders" component={MyOrder}
      options={{
      tabBarIcon: () =>  <Image
      source={require('../assets/Images/orders.png')}
      style={{ width: 25, height: 25}}
    />}} />
      <Tab.Screen name="Order" component={Order} options={{
          tabBarIcon: () => <Image
          source={require('../assets/Images/order.png')}
          style={{ width: 25, height: 25}}
        />
        }}/>
      <Tab.Screen name="Cart" component={Cart} options={{
          tabBarIcon: () => <Image
          source={require('../assets/Images/cart.png')}
          style={{ width: 25, height: 25}}
        />
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: () => <Image
          source={require('../assets/Images/profile.png')}
          style={{ width: 25, height: 25}}
        />
        }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
