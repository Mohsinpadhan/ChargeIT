import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { AlertNotificationRoot, ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateAndLoginScreen = () => {
    if (!email) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Validation Error',
        textBody: 'Email is required!',
        button: 'Close',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Invalid Email',
        textBody: 'Please enter a valid email address!',
        button: 'Close',
      });
      return;
    }

    if (!password) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Validation Error',
        textBody: 'Password is required!',
        button: 'Close',
      });
      return;
    }

    if (password.length < 6) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Weak Password',
        textBody: 'Password must be at least 6 characters long!',
        button: 'Close',
      });
      return;
    }

    // Success Message
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Success',
      textBody: 'You have logged in successfully!',
      button: 'OK',
    });

    // Navigate after a delay
    setTimeout(() => {
      navigation.navigate('BottomNavigation');
    }, 2000);
  };

  return (
    <View style={styles.container}>
    <AlertNotificationRoot>
      <ScrollView>
      <LinearGradient colors={['white', '#016ee9']} style={styles.container}>
        <Image source={require('../Assests/bg.png')} style={styles.bg} />
        <Text style={{ fontSize: 30, color: '#016ee9', fontWeight: '600', textAlign: 'center', marginBottom: 100 }}>
          Charge<Text style={{ color: '#07c503' }}>It</Text>
        </Text>

        {/* Facebook Button */}
        <TouchableOpacity>
          <View style={styles.btnface}>
            <View style={{ flexDirection: 'row', gap: 10, padding: 6, alignSelf: 'center' }}>
              <Image source={require('../Assests/facebook.png')} style={{ width: 30, height: 30 }} />
              <Text style={{ color: 'white', fontSize: 17, fontWeight: '500' }}>Continue with Facebook</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Google Button */}
        <TouchableOpacity>
          <View style={styles.btngoogle}>
            <View style={{ flexDirection: 'row', gap: 10, padding: 8, alignSelf: 'center' }}>
              <Image source={require('../Assests/google.png')} style={{ width: 25, height: 25 }} />
              <Text style={{ color: '#0466c8', fontSize: 17, fontWeight: '500' }}>Continue with Google</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Email Input */}
        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor={'#b7b7a4'}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/* Password Input */}
        <TextInput
          style={styles.Input}
          placeholder="Password"
          placeholderTextColor={'#b7b7a4'}
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
          <Text style={{ color: 'black', textAlign: 'center', fontWeight: '500', marginLeft: 150, fontSize: 13 }}>
            Forgot your Password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity onPress={validateAndLoginScreen}>
          <View style={styles.loginbtn}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: '700' }}>Login</Text>
          </View>
        </TouchableOpacity>

        {/* Footer */}
        <View style={{ flexDirection: 'row', gap: 2, alignSelf: 'center', marginTop: 40 }}>
          <Text style={{ color: 'black', fontWeight: '500' }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{ color: 'white' }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      
      </ScrollView>
    </AlertNotificationRoot>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:800
  },
  bg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  btnface: {
    borderWidth: 1,
    width: 300,
    height: 43,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#0466c8',
    borderColor: '#016ee9',
    alignSelf: 'center',
  },
  btngoogle: {
    borderWidth: 1,
    width: 300,
    height: 43,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    alignSelf: 'center',
    marginVertical: 20,
  },
  Input: {
    borderWidth: 1,
    width: 300,
    height: 43,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor: 'white',
    alignSelf: 'center',
    marginVertical: 10,
    paddingLeft: 20,
  },
  loginbtn: {
    borderWidth: 1,
    width: 300,
    height: 43,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#07c503',
    borderColor: '#07c503',
    alignSelf: 'center',
    marginVertical: 20,
    padding: 5,
  },
});
