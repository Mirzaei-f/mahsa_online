import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView } from "react-native";
    


import {Formik} from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native";
import { useFetch } from "../../components/useFetch";
import { Context } from "../../components/Context";
//import Apptimestamp from './timestamp/Apptimestamp';

import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
//import Mahsa from "../../assets/images/logomahsa2.jpg";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";




import live1 from "../assets/images/livenew.jpg"
import message from "../assets/images/message.jpg"
import regim from "../assets/images/regim.jpg"
import sabad from "../assets/images/sabad4.jpg"
import toturial from "../assets/images/toturial.jpg"
import camera from "../assets/images/camera.jpg"



const   width=Dimensions.get("window").width;

const   height=Dimensions.get("window").height;


const Need = () => {
  return (
    <View  style={styles.container}> 
    <View   style={{alignItems:"center", justifyContent:"space-around",height:width>576?height/6:height/11,
   // backgroundColor:"#f00",
    width:width,}}>   
<Text   style={{fontSize:RFValue(20),fontWeight:"bold",color:"#000"}}>هر آن چیزی که نیاز دارید</Text>

<Text style={{fontSize:RFValue(14),fontWeight:"bold",color:"#000"}}>برای مشاهده ویدیو آموزشی روی بخش مورد نظر کلیک کنید</Text>


    </View>
{/* buttons */}
        <TouchableOpacity style={styles.button} >
     {/* <View  style={styles.topview}> */}


     <>
     
     <Image  source={live1} style={{width:70,height:70}}/>
     </>

     <>
     <Text  style={styles.txt}>کلاس های لایو
           </Text>
     </>
        
            
     {/* </View> */}
        

        <>
        <Text  style={styles.subtxt}>    ورزش را در هر مکان تجربه کنید!    </Text>
        <Text  style={styles.subtxt}>
 با کلاس های ورزشی آنلاین ،بهترین فرصت برای تقویت بدن و روحیه خود را داشته باشید  </Text>
          
        </>
        
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} >
        {/* <View  style={styles.topview}> */}

        <>
        <Image  source={sabad} style={{width:70,height:70}}/>
        </>
       
        <Text   style={styles.txt} >خرید پکیج  </Text>
        {/* </View> */}
        <View>
       
        <Text  style={styles.subtxt}>آموزش ها در دسترس شما!</Text>
        <Text  style={styles.subtxt}>
           با ویدیو های ذخیره شده،می توانید بهترین آموزش ها را هر زمانی که می خواهید تماشا کنید
            </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
        {/* <View  style={styles.topview}> */}
        <>
        <Image  source={message} style={{width:70,height:70}}/>
        </>
        
        <Text  style={styles.txt}>پیام رسان   </Text>

        {/* </View> */}
        <View>

<Text  style={styles.subtxt}>
همیشه در دسترس !
  </Text>
<Text  style={styles.subtxt}>
   با پشتیبانی 24 ساعته ،همیشه پاسخگوی نیازهای شما هستیم
    </Text>


    </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} >
        {/* <View  style={styles.topview}> */}
        <>
        <Image  source={regim} style={{width:70,height:70}}/>
        </>
      
        <Text  style={styles.txt}>برنامه غذایی </Text>
       {/* </View> */}
       <View>
       < Text  style={[,{fontSize:RFValue(10),
        //fontWeight:"bold",
        color:"#797979",
        textAlign:"center",}]}>
   رژیم غذایی با راهنمایی مشاوران تغذیه ،راهی مطمئن به سلامتی و تعادل بین بدن و ذهن شما
    </Text>
       </View>
       
        

        </TouchableOpacity>

        



        



        </View>
  )
}

export    {Need}






const styles=StyleSheet.create({


    container:{
    
        flexWrap:"wrap",
        height:width>576?height*1.3:height/1.2,
                backgroundColor:"#fff",
            
               flexDirection:"row-reverse",
               alignItems:"center",
               justifyContent:"space-around",
               marginHorizontal:2,
               marginVertical:10,
    
    
    
    },
    
    
    button:{
    
        height:width>576?height/2:height/4,
              width:width>576?"45%":"45%",
            
                backgroundColor:"#fff",
                 //flexDirection:"row-reverse",
               //  borderBottomWidth:2,
               justifyContent:"space-around",
               alignItems:"center",
               marginVertical:10,
             ///  borderColor:"#733AF3",
              // borderWidth:2,
             //  borderRadius:20,
    
    
        //        shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 11,
        // },
        // shadowOpacity: 0.55,
        // shadowRadius: 14.78,
    
        // elevation: 22,
    
    },
    
    txt:{
    
    fontSize:RFValue(20),
    fontWeight:"bold",
    color:"#000",
    marginTop:"5%"
    
    },
    subtxt:{
    
        fontSize:RFValue(12),
        //fontWeight:"bold",
        color:"#797979",
        textAlign:"center",
    
    
        }, 

        topview:{
          justifyContent:"center",
               alignItems:"center",
        }
    
    
    })
    