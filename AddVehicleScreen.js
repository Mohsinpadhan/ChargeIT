import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';



const AddVehicleScreen = ({navigation}) => {
  
  return (
    <LinearGradient colors={['white', '#016ee9']} style={styles.container}>
             <Image source={require('../Assests/bg.png')} style={styles.bg}/>
             <Text style={{fontSize:30,color:'#016ee9',fontWeight:'600',textAlign:'center',marginBottom:60}}>Charge<Text style={{color:'#07c503'}}>It</Text></Text>
      {/* image picker Section */}
      <View style={styles.ImagePicker}>
<Image source={require('../Assests/imgpicker.png')}style={styles.imgPick}/>
      </View>
      {/* heading  */}
      <Text style={{fontSize:25,color:'black',fontWeight:'600',textAlign:'center',marginVertical:20}}>Add a Vehicle</Text>
<Text style={{fontSize:18,fontWeight:'400',textAlign:'center'}}>This Information will help {'\n'} us provide the most {'\n'} relevant data</Text>
{/* add btn */}
<TouchableOpacity onPress={() => navigation.navigate('AddVehicleInfor')}>
 <View style={styles.addbtn}>
          <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Add +</Text>
        </View>
        </TouchableOpacity> 
        {/* skip btn */}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
  <View style={styles.skipbtn}>
    <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Skip</Text>
  </View>
  </TouchableOpacity>
    </LinearGradient>
  )
}

export default AddVehicleScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:20
  },
  imgPick:{
    width:80,
    height:80,
  alignSelf:'center',
  
  },
  ImagePicker:{
    backgroundColor:'#fafaf7',
    borderRadius:100,
    width:150,
    height:150,
    alignSelf:'center',
    padding:35,
    
  },
  addbtn:{
    borderWidth:1,
    width:300,
    height:43,
    borderRadius:30,
    alignItems:'center',
    backgroundColor:'#07c503',
    borderColor:'#07c503',
    alignSelf:'center',
    marginVertical:20,
    padding:5
  },
  skipbtn:{
    borderWidth:1,
    width:100,
    height:43,
    borderRadius:30,
    alignItems:'center',
    backgroundColor:'#016ee9',
    borderColor:'#016ee9',
    marginLeft:230,
    marginTop:80,
    padding:5
  }
  
})