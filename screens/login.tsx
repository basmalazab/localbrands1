import React, { useState ,useEffect} from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation ,useIsFocused } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { forSlideRight } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const[emailerror,setemailerror]=useState('');
  const[passworderror,setpassworderror]=useState('');
  const isfocused = useIsFocused();

  useEffect(() => {
    if (isfocused) {
      setemail('');
      setpassword('');
    }
  }, [isfocused]);
  const validemail=(email:string)=>{
    if(!email.includes('@gmail.com')){
      setemailerror('Email should contain "@gmail.com')
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
    
    if(isemailvalid&&ispasswordvalid){
      navigation.navigate('Main');
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
        <Text style={styles.loginText}>Hello!</Text>
        <Text style={styles.logText}>Sign in to your account </Text>
      </View>

      <View style={styles.inputContainer}>
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
        <View style={styles.forgetPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgetPasswordText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.signupContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupText}>SignUp</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orSignInWithContainer}>
          <Text style={styles.orSignInWithText}> Or sign in with </Text>
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../assets/images/facebook.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../assets/images/google.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image
              source={require('../assets/images/twitter.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEFE8',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  backgroundImage: {
    height: '80%',
    width: '100%',
    position: 'absolute',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 40,
    marginTop:-20
  },
  logText:{
    color:'black',
    marginTop:30,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: -40,
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 18,
    borderRadius: 20,
    width: '100%',
    marginBottom: 16,
  },
  textInput: {
    color: 'black',
  },
  buttonContainer: {
    width: '100%',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#DE8221', 
    padding: 15,
    borderRadius: 20,
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signupText: {
    color: '#DE8221', 
  },
  orSignInWithContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  orSignInWithText: {
    fontSize: 16,
    color: 'black',
    fontWeight:'bold',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 12, 
  },
  forgetPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 12,
    marginRight: 16, 
  },
  forgetPasswordText: {
    color: '#DE8221', 
    fontSize: 14,
  },
  errortext: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default LoginScreen;
