import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

const SignUpScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const[emailerror,setemailerror]=useState('');
    const[passworderror,setpassworderror]=useState('');
    const[username,setusername]=useState('');
    const[usernameerror,setusernameeror]=useState('');
    const validusername = (username: string) => {
      const hasNumber = /\d/; 
      if (!hasNumber.test(username)) {
        setusernameeror('Username should contain at least one number');
        return false;
      }
      setusernameeror('');
      return true;
    };
    const validemail=(email:string)=>{
      if(!email.includes('@gmail.com')){
        setemailerror('Email should contain "@gmail.com"')
        return false;
      }
      setemailerror('');
      return true;
    }
    const validpassword=(password:string)=>{
      if(password.length<8){
        setpassworderror('password should be at least 8 characters');
        return false;
      }
      setpassworderror('');
      return true;
    }
    const handleLogin = () => {
      const isemailvalid=validemail(email);
      const ispasswordvalid=validpassword(password);
      const isusernamevalid=validusername(username)
      if(isemailvalid&&ispasswordvalid&&isusernamevalid){
        navigation.navigate('Login');
      }
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/background.png')}
        />
        <View style={styles.centered}>
          <Text style={styles.signupText}>Create account </Text>
        </View>
  
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
          <Image
            source={require('../assets/images/people.png')}
            style={styles.inputIcon}
          />
            <TextInput
              placeholder='Username'
              placeholderTextColor='gray'
              value={username}
              onChangeText={setusername}
              style={styles.textInput}
              onBlur={() => validusername(username)}
            />
          </View>
          {usernameerror ? <Text style={styles.errortext}>{usernameerror}</Text> : null}
          <View style={styles.inputWrapper}>
          <Image
            source={require('../assets/images/people.png')}
            style={styles.inputIcon}
          />
            <TextInput
              placeholder='Email'
              placeholderTextColor='gray'
              value={email}
              onChangeText={setemail}
              style={styles.textInput}
              onBlur={() => validemail(email)}
            />
          </View>
          {emailerror ? <Text style={styles.errortext}>{emailerror}</Text> : null}
          <View style={styles.inputWrapper}>
          <Image
            source={require('../assets/images/lock.png')}
            style={styles.inputIcon}
          />
            <TextInput
              placeholder='Password'
              placeholderTextColor='gray'
              secureTextEntry
              value={password}
              onChangeText={setpassword}
              style={styles.textInput}
              onBlur={() => validpassword(password)}
            />
          </View>
          {passworderror ? <Text style={styles.errortext}>{passworderror}</Text> : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signupButton} onPress={handleLogin}>
              <Text style={styles.signupButtonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.signupContainer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EBEFE8',
      height: '80%',
      width: '100%',
      position: 'relative',
    },
    backgroundImage: {
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      position: 'absolute',
    },
    text: {
      zIndex: 1,
      color: 'black',
    },
    centered: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupText: {
      color: 'black',
      fontWeight: 'bold',
      letterSpacing: 1,
      fontSize: 35,
    },
    inputContainer: {
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 14,
      marginTop: 40,
    },
    inputWrapper: {
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      padding: 16,
      borderRadius: 15,
      width: '100%',
      marginBottom: 10,
      marginTop:19,
    },
    textInput: {
      color: 'black',
    },
    inputIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    buttonContainer: {
      width: '100%',
    },
    signupButton: {
      width: '100%',
      backgroundColor: '#DE8221', 
      padding: 16,
      borderRadius: 20,
      marginBottom: 20,
      marginTop: 20,
    },
    signupButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    loginText: {
      color: '#DE8221', 
    },
    errortext: {
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
    },
  });
  
  export default SignUpScreen;
