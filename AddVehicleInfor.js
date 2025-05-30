import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';



const AddVehicleInfor = ({navigation}) => {
  
  return (
    <LinearGradient colors={['white', '#016ee9']} style={styles.container}>
                <Image source={require('../Assests/bg.png')} style={styles.bg}/>
                <Text style={{fontSize:30,color:'#016ee9',fontWeight:'600',textAlign:'center'}}>Charge<Text style={{color:'#07c503'}}>It</Text></Text>
     {/* start add information Section */}
     <View style={styles.Section}>
      <Image source={require('../Assests/multiply.png')} style={styles.multiply}/>
      <Text style={{fontSize:22,fontWeight:'800',color:'#07c503',alignSelf:'center',marginBottom:50}}>Add a Vehicle</Text>

      {/* textInput  */}
      <TextInput
             style={styles.Input}
             placeholder='Brand/Company'
             placeholderTextColor={'#b7b7a4'}
             />
              <TextInput
             style={styles.Input}
             placeholder='Model'
             placeholderTextColor={'#b7b7a4'}
             />
               <TextInput
             style={styles.Input}
             placeholder='Series'
             placeholderTextColor={'#b7b7a4'}
             />
             {/* save btn */}
             <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
 <View style={styles.Savebtn}>
          <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Save</Text>
        </View>
        </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

export default AddVehicleInfor

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
  Savebtn:{
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
  Section:{
    backgroundColor:'white',
    height:400,
    width:320,
    alignSelf:'center',
    borderRadius:30,
    marginTop:90,
    padding:10
  },
  multiply:{
    width:20,
    height:20,
    alignSelf:'flex-end',
    marginRight:10
  },
  Input:{
    borderWidth:1,
    width:300,
    height:43,
    borderRadius:30,
    borderColor:'#76c893',
    alignSelf:'center',
    marginVertical:10,
    paddingLeft:20,
  
  }
})