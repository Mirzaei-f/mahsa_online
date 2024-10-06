
import React, {useState,useContext,useEffect} from 'react';
import {ActivityIndicator, Dimensions,FlatList,Image,ImageBackground, StyleSheet,Text,TextInput,TouchableOpacity,View, BackHandler, ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { s } from "react-native-wind";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Headernew} from "../../components/Headernew"
import contact from "../../assets/images/contact.jpg"
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import q1 from "../../assets/images/q1.jpg"
import q2 from "../../assets/images/q2.jpg"
import analyzeticket from "../../assets/images/analyze-ticket.jpg"

const   width=Dimensions.get("window").width;
const   height=Dimensions.get("window").height;

const Question = () => {




    const navigation=useNavigation()


    useEffect(() => {
        const backAction =async () => {
            navigation.navigate("user",{screen:'messanger'})
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );
    
        return () => backHandler.remove();
    }, []);




  return (
    <View    style={[s``,{backgroundColor:"#fff",flex:1}]} >


      <Headernew      />

      <ScrollView>

        <View   style={styles.viewsubheader}>
        <Text   style={{fontSize:RFValue(24),fontWeight:"bold",color:"#000"}}  > 
نوع سوال        </Text>
        </View>
   

  

<View  style={styles.viewscrollview}>


<TouchableOpacity    style={styles.button}  >

<Text   style={styles.txt1} >
اگر سوالتان غیر تخصصی است یعنی تغذیه فعال نشده، یا فایل آن مشکل دارد این گونه موضوعات را در اینجا سوال بپرسید 
   </Text>

<Image  source={q1} style={{width:140,height:140}}/>
        <Text   style={styles.txt} >    پیام جدید </Text>




</TouchableOpacity>



{/* <TouchableOpacity    style={styles.button}   >



<Image  source={tamasbamahsa} style={{width:140,height:140,borderRadius:70}}/>
        <Text   style={styles.txt} >  تماس با مهسا آنلاین </Text>



</TouchableOpacity> */}


<TouchableOpacity    style={styles.button}  >

<Text   style={styles.txt1} >

پیام تخصصی مثل میزان کالری یک غذا ، موضوعات مربوط به منو غذایی و هر گونه سوال تخصصی دیگر
</Text>
<Image  source={q2} style={{width:140,height:160,}}/>
        <Text   style={styles.txt} >پیام جدید  </Text>


</TouchableOpacity>



</View>


   </ScrollView>





    </View>
  )
}

export {Question}




const styles=StyleSheet.create({
    viewsubheader:{
        //backgroundColor:"#f0f",
        width: width,
    height:width>576?height/7:height/15,
    alignItems:"center",
    justifyContent:"center",
    },
    
        viewscrollview:{
           // backgroundColor:"#0ff",
            width:width,
            height:width>576?height*1.5:height/1.2,
            alignItems:"center",
            justifyContent:"space-around"
        },
        
        
        button:{
        
          //  backgroundColor:"#fff",
            width:"90%",
            height:width>576?height/1.5:height/2.5,
            alignItems:"center",
            justifyContent:"space-around",
            borderWidth:2,
            borderColor:"#733AF3",
            borderRadius:20,
        },
        
        txt:{
        
        fontSize:RFValue(22),
        fontWeight:"bold",
        color:"#000",
        marginBottom:15
        
        },
        txt1:{
        
            fontSize:RFValue(14),
           // fontWeight:"bold",
            color:"gray",
            textAlign:"auto",
            margin:5
            
            }
        
        })
        