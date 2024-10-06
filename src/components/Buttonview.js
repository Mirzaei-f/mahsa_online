

import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView } from "react-native";
    


import {Formik} from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {useNavigation} from "@react-navigation/native";
import { useFetch } from "../../components/useFetch";
import { Context } from "../../components/Context";
//import Apptimestamp from './timestamp/Apptimestamp';

import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
//import Mahsa from "../../assets/images/logomahsa2.jpg";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import analyze from "../assets/images/analyze.jpg"
import chat from "../assets/images/chat.jpg"
import diet from "../assets/images/diet.jpg"
import factors from "../assets/images/factors.jpg"
import toturial from "../assets/images/toturial.jpg"
import camera from "../assets/images/camera.jpg"



const   width=Dimensions.get("window").width;

const   height=Dimensions.get("window").height;



const Buttonview = () => {


  const navigation=useNavigation()




  return (
    <View  style={styles.container}> 
     {/* <Image style={s` w-42 h-42 rounded-full `} source={analyze}/> */}
{/* buttons */}
        <TouchableOpacity style={styles.button}       
         onPress={()=>navigation.navigate("user",{screen:'livesections'})}  >
        <Image         source={camera} style={{width:70,height:70}}/>
      
        <Text  style={styles.txt}>پخش زنده</Text>
       
        </TouchableOpacity>
        
        <TouchableOpacity      onPress={()=>navigation.navigate("user",{screen:'test'})}    style={styles.button} >
        <Image  source={analyze} style={{width:70,height:70}}/>
        <Text   style={styles.txt} >آنالیز بدنی</Text>
        </TouchableOpacity>

        <TouchableOpacity              onPress={()=>navigation.navigate("user",{screen:'diet'})}                    style={styles.button} >

      
        <Image  source={diet} style={{width:70,height:70}}/>
        <Text  style={styles.txt}>برنامه غذایی</Text>
        </TouchableOpacity>

        <TouchableOpacity          onPress={()=>navigation.navigate("user",{screen:'messanger'})}    style={styles.button} >
        <Image  source={chat} style={{width:70,height:70}}/>
        <Text  style={styles.txt}> پیامرسان</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("user",{screen:'factors'})}   style={styles.button} >
      
        <Image  source={factors} style={{width:70,height:70}}/>
        <Text   style={styles.txt}>لیست فاکتورها </Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate("user",{screen:'sugestiontitle'})}  style={styles.button} >
        <Image  source={toturial} style={{width:100,height:70}}/>
        <Text   style={styles.txt}>مطالب آموزشی</Text>
        </TouchableOpacity>

       

       


        </View>
  )
}

export  {Buttonview}


const styles=StyleSheet.create({


container:{

    flexWrap:"wrap",
    height:width>576?height:height/1.7,
            backgroundColor:"#fff",
        
           flexDirection:"row-reverse",
           alignItems:"center",
           justifyContent:"space-around",
           marginHorizontal:2,
           marginVertical:10,



},


button:{

    height:width>576?height/2.5:height/6,
          width:width>576?"30%":"45%",
        
            backgroundColor:"#fff",
             //flexDirection:"row-reverse",
             borderBottomWidth:2,
           justifyContent:"space-around",
           alignItems:"center",
           marginVertical:10,
           borderColor:"#733AF3",
           borderWidth:2,
           borderRadius:20,


           shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,

},

txt:{

fontSize:RFValue(20),
fontWeight:"bold",
color:"#733AF3"

}


})
