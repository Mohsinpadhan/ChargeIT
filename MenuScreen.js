import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // For gradient backgrounds

const MenuScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['white', '#016ee9']} style={styles.container}>
        <Image source={require('../Assests/bg.png')} style={styles.bg} />
          <Text style={{fontSize:38,color:'#016ee9',fontWeight:'600',textAlign:'center',marginBottom:60}}>Charge<Text style={{color:'#6da34d'}}>It</Text></Text>
      
{/* start item section */}
<TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
      <View style={styles.item}>
          <Image source={require('../Assests/profile.png')} style={styles.profile} />
          <Text style={styles.itemText}>Profile</Text>
        </View>
        </TouchableOpacity>

      <View style={styles.item}>
          <Image source={require('../Assests/settings.png')} style={styles.profile} />
          <Text style={styles.itemText}>Settings</Text>
     </View>
<TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
      <View style={styles.item}>
          <Image source={require('../Assests/logout.png')} style={styles.logout} />
          <Text style={styles.itemText}>Logout</Text>
          </View>
          </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 130,
    backgroundColor: '#016ee9',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    width: 100,
    height: 100,
    marginTop: 70,
    alignSelf:'center',
    marginBottom:10,
  },
  profile: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  logout:{
    width: 27,
    height: 27,
    borderRadius: 50,
  },
  item: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 40,
    alignSelf:'center',
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 30,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  itemText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '400',
  },
});

export default MenuScreen;