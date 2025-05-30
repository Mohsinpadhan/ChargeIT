import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'; 
import LinearGradient from 'react-native-linear-gradient';
import { AlertNotificationRoot, ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const showAlert = (type, title, message) => {
    Dialog.show({
      type,
      title,
      textBody: message,
      button: 'Close',
    });
  };

  const validateAndRegister = () => {
    if (!name.trim()) {
      showAlert(ALERT_TYPE.WARNING, 'Validation Error', 'Name is required!');
      return;
    }

    if (!email.trim()) {
      showAlert(ALERT_TYPE.WARNING, 'Validation Error', 'Email is required!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert(ALERT_TYPE.DANGER, 'Invalid Email', 'Please enter a valid email address!');
      return;
    }

    if (!password.trim()) {
      showAlert(ALERT_TYPE.WARNING, 'Validation Error', 'Password is required!');
      return;
    }

    if (password.length < 6) {
      showAlert(ALERT_TYPE.DANGER, 'Weak Password', 'Password must be at least 6 characters long!');
      return;
    }

    if (!phone.trim()) {
      showAlert(ALERT_TYPE.WARNING, 'Validation Error', 'Phone number is required!');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      showAlert(ALERT_TYPE.DANGER, 'Invalid Phone', 'Please enter a valid 10-digit phone number!');
      return;
    }

    // Success Message
    showAlert(ALERT_TYPE.SUCCESS, 'Success', 'You have registered successfully!');

    // Navigate to LoginScreen after 2 seconds
    setTimeout(() => {
      navigation.navigate('AddVehicleScreen');
    }, 2000);
  };

  return (
    <AlertNotificationRoot>
      <LinearGradient colors={['white', '#016ee9']} style={styles.container}>
        <Image source={require('../Assests/bg.png')} style={styles.bg} />
        <Text style={styles.title}>
          Charge<Text style={{ color: '#07c503' }}>It</Text>
        </Text>

        {/* Social Login Buttons */}
        <TouchableOpacity>
          <View style={styles.btnface}>
            <View style={styles.socialButton}>
              <Image source={require('../Assests/facebook.png')} style={styles.icon} />
              <Text style={styles.socialText}>Continue with Facebook</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.btngoogle}>
            <View style={styles.socialButton}>
              <Image source={require('../Assests/google.png')} style={styles.icon} />
              <Text style={styles.googleText}>Continue with Google</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Input Fields */}
        <TextInput
          style={styles.Input}
          placeholder="Name"
          placeholderTextColor="#b7b7a4"
          value={name}
          onChangeText={(text) => setName(text.trim())}
        />
        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="#b7b7a4"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
        />
        <TextInput
          style={styles.Input}
          placeholder="Password"
          placeholderTextColor="#b7b7a4"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
        />
        <TextInput
          style={styles.Input}
          placeholder="Phone Number"
          placeholderTextColor="#b7b7a4"
          keyboardType="numeric"
          maxLength={10}
          value={phone}
          onChangeText={(text) => setPhone(text.trim())}
        />

        {/* Register Button */}
        <TouchableOpacity onPress={validateAndRegister}>
          <View style={styles.Regbtn}>
            <Text style={styles.regText}>Register</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </AlertNotificationRoot>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: '#016ee9',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 90,
  },
  btnface: {
    borderWidth: 1,
    width: 300,
    height: 43,
    borderRadius: 30,
    backgroundColor: '#0466c8',
    borderColor:'#0466c8',
    alignSelf: 'center',
  },
  btngoogle: {
    borderWidth: 1,
    width: 300,
    height: 43,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor:'white',
    alignSelf: 'center',
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: 'row',
    gap: 10,
    padding: 8,
    alignSelf: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  socialText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  googleText: {
    color: '#0466c8',
    fontSize: 17,
    fontWeight: '500',
  },
  Input: {
    borderWidth: 1,
    width: 300,
    height: 43,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor:'white',
    alignSelf: 'center',
    marginVertical: 10,
    paddingLeft: 20,
  },
  Regbtn: {
    borderWidth: 1,
    width: 300,
    height: 43,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#07c503',
    borderColor:'#07c503',
    alignSelf: 'center',
    marginVertical: 20,
    padding: 5,
  },
  regText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});
