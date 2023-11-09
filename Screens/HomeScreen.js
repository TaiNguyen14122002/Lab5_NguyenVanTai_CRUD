import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth'

export const HomeScreen = ({navigation}) => {
    const handleLogout = () => {
        auth().signOut().catch(error => console.log('Error Logging Out: ', error));
    };
  return (
    <View style={styles.container}>
      <Text>Hello:  {auth().currentUser.email}</Text>
      <Button title='Sign Out' onPress={handleLogout}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});