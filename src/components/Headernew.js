


import React, {useState,useEffect, useContext} from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    ScrollView,
    Image,BackHandler, Alert, FlatList, moment, unix, Animated, PermissionsAndroid

} from 'react-native';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

import { s } from "react-native-wind";

import {RFValue} from "react-native-responsive-fontsize";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Context } from "./Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const   width=Dimensions.get("window").width;


const Headernew = () => {


 // const {reload,setreload}=useContext(Context)
 const navigation=useNavigation()
 const {name,lastname,auth,setname,setlastname}=useContext(Context)
console.log("nameeeeeeeeeeeeeeeeeeeee",name)
console.log("lastnameeeeeeeeeeeeeeeeeeeee",lastname)




useEffect(()=>{
get("name")
},[])

useEffect(()=>{
    get2("lastname")
    },[])
    
const get = async (key) => {
    const value = await AsyncStorage.getItem(key)
    if (value == null) {
       // navigation.navigate('login')
    } else {
        //setauth(value)
        setname(value)
        
            }

  }
  
  const get2 = async (key) => {
    const value = await AsyncStorage.getItem(key)
    if (value == null) {
       // navigation.navigate('login')
    } else {
        //setauth(value)
        setlastname(value)
        
            }

  }
  

  return (
    

<View style={{height:width>576?"18%":"8%",
       //  backgroundColor:"#ff0",
         width:width,
         flexDirection:"row",borderBottomWidth:2,
         borderBottomColor:"#0ff",
       //  alignItems:"center",
         justifyContent:"space-between",
         paddingHorizontal:"5%",
         
         }}>

   
<View  style={{flexDirection:"row",}} >
<FontAwesome style={[s` mt-3 pr-5` ,{
       // paddingHorizontal: 15,
       //margiginRight:"3%",
    } ]} name="user-circle-o" size={width>576?45:35} color="#4D1BB8" />

    <View   style={{flexDirection:"row-reverse", alignItems:"center",justifyContent:"space-around"}}>
    <Text     style={{color:'#000',fontSize:RFValue(12),
     //fontWeight:"bold",
    // marginVertical:'5%',
   //  alignSelf:'flex-end',
   marginLeft:5,
     textAlign:"center"
    }}>{name}</Text>
        <Text style={{color:'#000',fontSize:RFValue(12),
   //  fontWeight:"bold",
    // marginVertical:'5%',
    // alignSelf:'flex-end',
     textAlign:"center"
    }}>{lastname}</Text>

    </View>
       
        </View>
       


         <TouchableOpacity onPress={() => navigation.openDrawer()}>
       <FontAwesome style={[s` mt-3` ,{
        //padding: 5,
       //marginHorizontal:"3%",
    } ]} name="bars" size={width>576?45:35} color="#4D1BB8" />



{/* 
<  Fontisto style={[s` mt-3` ,{
        //padding: 5,
       //marginHorizontal:"3%",
    } ]} name="nav-icon-a" size={width>576?45:35} color="#4D1BB8" /> */}



        </TouchableOpacity>

      

        </View> 

  )
}

export  {Headernew}


