import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../Auth/OnboardingScreen';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
import AddVehicleScreen from '../Auth/AddVehicleScreen';
import AddVehicleInfor from '../Auth/AddVehicleInfor';
import ForgotScreen from '../Auth/ForgotScreen';
import HomeScreen from '../Screens/HomeScreen';
import BottomNavigation from '../Navigation/BottomNavigation';
import MenuScreen from '../Screens/MenuScreen';
import ProfileScreen from '../Screens/ProfileScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> 
      <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
      <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
      <Stack.Screen name='AddVehicleScreen' component={AddVehicleScreen}/>
      <Stack.Screen name='AddVehicleInfor' component={AddVehicleInfor}/>
      <Stack.Screen name='ForgotScreen'    component={ForgotScreen}/>
      <Stack.Screen name='HomeScreen'    component={HomeScreen}/>
      <Stack.Screen name='MenuScreen'  component={MenuScreen}/>
      <Stack.Screen name='BottomNavigation'    component={BottomNavigation}/>
      <Stack.Screen name='ProfileScreen'    component={ProfileScreen}/>
     
      
      
    
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
