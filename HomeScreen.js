import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ marginTop: 30, flexDirection: 'row', padding: 20,justifyContent:'space-between' }}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
          <Image source={require('../Assests/menu.png')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: '400', }}>Map</Text>
          <TouchableOpacity>         
             <Image source={require('../Assests/search.png')} style={{ width: 20, height: 20,marginTop:10 }} />
             </TouchableOpacity>

          
        </View>
      </View>

      {/* MapView */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.72871, 
          longitude: 76.76659,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        <Marker
          coordinate={{ latitude: 30.72871, longitude: 76.76659 }}
          title={"Marker Title"}
          description={"Marker Description"}
        />
      </MapView>
      
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8f7ff',
    height: 750,
  },
  header: {
    height: 90,
    backgroundColor: '#016ee9',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  map: {
    flex: 1,
    marginTop:2, // Adjust as needed
     width:360,
    
    
    
  },
});