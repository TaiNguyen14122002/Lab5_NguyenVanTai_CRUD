import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthenticatedUserContext } from '../providers'
import HomeScreen from '../Screens/HomeScreen'
import LoginScreen from '../Screens/LoginScreen'
import SignupScreen from '../Screens/SignupScreen'
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen'


const Stack = createStackNavigator();
export const AppStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='SignupScreen' component={SignupScreen}/>
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}/>
    </Stack.Navigator>
  );
};

export default AppStack;
