import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Image source={require('../Assests/bg.png')} style={styles.bg}/>
      <Text style={{fontSize:20,color:'#016ee9',textAlign:'center',marginTop:180,fontWeight:'500'}}>Welcome To</Text>
      <Text style={{fontSize:38,color:'#016ee9',fontWeight:'600',textAlign:'center'}}>Charge<Text style={{color:'#07c503'}}>It</Text></Text>
      {/* car icon */}
     
      <Image source={require('../Assests/ev.png')} style={styles.car}/>
      {/* start btn */}
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}> 
            <Text style={styles.btntex}>Get Started !</Text>
            </TouchableOpacity>
      </View>
      
    
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  Container:{
    padding:10,
    backgroundColor:'#016ee9',
    height:400,
    borderBottomRightRadius:800
  },
  bg:{
    marginTop:50,
    width:200,
    height:200,
  alignSelf:'center'
  },
  btn:{
    width:340,
    height:40,
    borderWidth:1,
    borderRadius:30,
    alignItems:'center',
    padding:4,
    backgroundColor:'#016ee9',
    borderColor:'#016ee9',
    marginTop:120,

  },
  btntex:{
    fontSize:20,
    color:'white',
    fontWeight:'600'
  },
  car:{
    width:50,
    height:50,
    alignSelf:'center',
    marginTop:10
  }
 
    
  
  

})