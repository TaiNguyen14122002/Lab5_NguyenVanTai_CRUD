import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { AuthenticatedUserContext } from '../providers'
import { LoadingIndicator } from '../components'
import { NavigationContainer } from '@react-navigation/native'

export const RootNavigator = () => {
    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const unsubscribeAuthStateChanged = auth().onAuthStateChanged(
            AuthenticatedUser => {
                AuthenticatedUser ? setUser(AuthenticatedUser) : setUser(null);
                setIsLoading(false);
            }
        );
        return unsubscribeAuthStateChanged;
    }, [user]);
    if(isLoading){
        return <LoadingIndicator/>;
    }
  return (
    <NavigationContainer>
        {user ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default RootNavigator