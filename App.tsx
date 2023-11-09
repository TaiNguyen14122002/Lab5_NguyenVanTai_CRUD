
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SignupScreen from './Screens/SignupScreen'
import LoginScreen from './Screens/LoginScreen'
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen'
import HomeScreen from './Screens/HomeScreen'
import { AuthenticatedUserProvider } from './providers'
import RootNavigator from './navigation/RootNavigator'
// import { StyleSheet, Text, View } from 'react-native'
// import firestore from '@react-native-firebase/firestore'

// firestore().collection("product").add(
//   {
//     name: "TaiTaiTai",
//     Price: 10
//   }
// ).then(
//   ()=>console.log("add new product")
// )

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator/>
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  )
}

export default App

// const styles = StyleSheet.create({})