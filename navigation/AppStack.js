import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticatedUserContext } from '../providers'
import HomeScreen from '../Screens/HomeScreen'
import LoginScreen from '../Screens/LoginScreen'
import SignupScreen from '../Screens/SignupScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen'
import AddProduct from '../Screens/AddProduct'
import ProductDetail  from '../Screens/ProductDetail'
import { ProductDetailScreen } from '../Screens/ProductDetail'
import {  } from 'react-native-paper'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createStackNavigator();
export const AppStack = () => {
  const shouldShowTab2 = false;
  return (
    <Tab.Navigator initialRouteName='HomeScreen' >
        <Tab.Screen name='HomeScreen' component={HomeScreen} screenOptions={{headerShown: false}} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name='AddProduct' component={AddProduct} ptions={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name='ProductDetail' component={ProductDetailScreen} ptions={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name='LoginScreen' component={LoginScreen} ptions={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default AppStack;
