import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

const ProfileScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#ffffff', '#016ee9']} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
          <Image source={require('../Assests/back.png')} style={styles.backimg} />
          </TouchableOpacity>
          <Text style={styles.profiletext}>Profile</Text>
        </View>
        <Image source={require('../Assests/profile.png')} style={styles.profileImage} />
        <Text style={styles.userName}>Er Mohsin Padhan</Text>
        <Text style={styles.userLocation}>Chandigarh</Text>
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>PERSONAL INFORMATION</Text>
        <TouchableOpacity style={styles.editButton}><Text style={styles.editText}>Edit</Text></TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Text style={styles.itemText}>mohsinpadhan423@gmail.com</Text>
        <Image source={require('../Assests/email.png')} style={styles.icon} />
      </View>
      
      <View style={styles.item}>
        <Text style={styles.itemText}>+91-9927723474</Text>
        <Image source={require('../Assests/call.png')} style={styles.icon} />
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>MY VEHICLES</Text>
        <TouchableOpacity style={styles.addButton}><Text style={styles.addText}>+ADD</Text></TouchableOpacity>
      </View>
      
      <View style={styles.item}>
        <Text style={styles.itemText}>TATA</Text>
        <Image source={require('../Assests/Right.png')} style={styles.icon} />
      </View>
      
      <View style={styles.item}>
        <Text style={styles.itemText}>EV6</Text>
        <Image source={require('../Assests/Right.png')} style={styles.icon} />
      </View>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    backgroundColor: '#016ee9',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: 'row',
    position: 'absolute',
    top: 15,
    left: 15,
    alignItems: 'center',
  },
  backimg: {
    width: 18,
    height: 18,
  },
  profiletext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft:115
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 20,
  },
  userName: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  userLocation: {
    fontSize: 15,
    color: 'white',
    fontWeight: '300',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  editButton: {
    backgroundColor: '#6da34d',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  editText: {
    color: 'white',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#6da34d',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  addText: {
    color: 'white',
    fontSize: 14,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 15,
    marginHorizontal: 30,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  itemText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
