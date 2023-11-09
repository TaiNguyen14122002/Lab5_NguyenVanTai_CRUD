import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

export const AuthenticatedUserContext = createContext();
export const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{user, setUser}}>
        {children}
    </AuthenticatedUserContext.Provider>
  )
}

export default AuthenticatedUserProvider

const styles = StyleSheet.create({})