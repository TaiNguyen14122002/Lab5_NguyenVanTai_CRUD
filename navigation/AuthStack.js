import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen'
import SignupScreen from '../Screens/SignupScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen'


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='LoginScreen'
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='SignupScreen' component={SignupScreen}/>
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}/>
    </Stack.Navigator>
  );
};

export default AuthStack;