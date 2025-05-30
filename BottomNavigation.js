import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';

import HomeScreen from '../Screens/HomeScreen';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    //  <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          ImageBarActiveTintColor:'tomato',
        }}
      >
        <Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{headerShown: false,
    tabBarIcon: ({ color, size, focused }) => (
    <Image source={require('../Assests/home.png')} style={[{width:20,height:20,tintColor: focused? 'tomato': '#000'}]}/>),
  }}
/>


      </Tab.Navigator>
    //  </NavigationContainer>
  );
}
