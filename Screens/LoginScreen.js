import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Formik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import auth from '@react-native-firebase/auth'
import { View, TextInput, Logo, Button, FormErrorMessage } from '../components'
import { Images,  Colors } from '../config'
import { useTogglePasswordVisibility } from '../hooks'
import { loginValidationSchema, signupValidationSchema } from '../utils'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import SignupScreen from './SignupScreen'
import Icon from 'react-native-vector-icons/FontAwesome'

const LeftIcon = () => {
    return (
        <Icon name="envelope-o" size={24} color="#fff"/>
    )
}

const LoginScreen = ({navigation}) => {
    const [errorState, setErrorState] = useState('');
    const {passwordVisibility, handlePasswordVisibility, rightIcon } = 
        useTogglePasswordVisibility();

    const handleLogin = (values) => {
        const { email, password } = values;
        auth().signInWithEmailAndPassword(email, password)
        .then(
            // ({user}) => console.log(user)
            () => navigation.navigate('HomeScreen')
        ).catch(error => 
            setErrorState(error.message)
            );
    };

  return (
    <>
        <View isSafe style={styles.container}>
            <KeyboardAwareScrollView enableOnAndroid={true}>
                <View style={styles.logoContainer}>
                    
                    <Text style={styles.screenTitle}>Login</Text>
                </View>
                <Formik initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={loginValidationSchema}
                onSubmit={values => handleLogin(values)}
                >
                    {({
                        leftIconName,
                        values,
                        touched,
                        errors,
                        handleChange,
                        handleSubmit,
                        handleBlur
                    }) => (
                        <>
                        <TextInput
                            name='email'
                            leftIconName='key-variant'
                            placeholder='Enter email'
                            autoCapitalize='none'
                            keyboardTyoe='email-address'
                            textContentType='emailAddress'
                            autoFocus={true}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            />
                        <FormErrorMessage error={errors.email} visible={touched.email}/>
                        <TextInput
                            name='password'
                            leftIconName='key-variant'
                            placeholder='Enter password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={passwordVisibility}
                            textContentType='password'
                            rightIcon={rightIcon}
                            handlePasswordVisibility={handlePasswordVisibility}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            />
                        <FormErrorMessage 
                            error={errors.password} 
                            visible={touched.password}
                        />
                        {errorState !== '' ? (
                            <FormErrorMessage error={errorState} visible={true}/>
                        ): null}
                        <Button style={styles.Button} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Button>
                        </>
                    )}
                </Formik>
                <Button 
                    style={styles.borderlessButtonContainer}
                    borderless
                    title={'Create a new account?'}
                    onPress={()=>{navigation.navigate('SignupScreen')}}
                />
                <Button
                    style={styles.borderlessButtonContainer}
                    borderless
                    title={'Forgot Password?'}
                    onPress={()=>{navigation.navigate('ForgotPasswordScreen')}}
                />
            </KeyboardAwareScrollView>
        </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 30,
    },
    logoContainer:{
        alignItems:'center',
        marginTop: 150
    },
    screenTitle:{
        fontSize: 40,
        fontWeight: '700',
        color: Colors.black,
        paddingTop: 20,
        color: '#428bca'
    },
    footer:{
        backgroundColor: Colors.white,
        paddingHorizontal: 12,
        paddingBottom: 48,
        alignItems: 'center'
    },
    footerText:{
        fontSize: 14,
        fontWeight: '700',
        color: Colors.orange
    },
    Button:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        backgroundColor: '#428bca',
        padding: 10,
        borderRadius: 8
    },
    buttonText:{
        fontSize: 20,
        color: Colors.white,
        fontWeight: '700'
    },
    borderlessButtonContainer:{
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center'
    }
});