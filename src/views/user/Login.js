

import React, {useContext, useEffect, useState,useRef} from "react";
import {
    ActivityIndicator, Dimensions,
    FlatList,
    Image,
    ImageBackground, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    BackHandler
    
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Formik} from "formik";
import * as yup from "yup";
import {useNavigation} from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/AntDesign";
import { useFetch } from "../../components/useFetch";
//import  Context from "../screens/Signupfolder/Context" 
import { Context } from "../../components/Context";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import Mahsa from "../../assets/images/logomahsa2.jpg"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



const validation = yup.object().shape({
    phone: yup.string().required('لطفا شماره موبایل خود را وارد کنید '),
})
const   width=Dimensions.get("window").width;
const Login = () => {

      const navigation=useNavigation()
      const {phone,setphone}=useContext(Context)
       const [err,seterr]=useState('')






useEffect(() => {
    const backAction =async () => {

        return true;
    };

    const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
    );

    return () => backHandler.remove();
}, []);


    return (


      <View style={{flex:1,backgroundColor:"#fff"}}>
        

         <View style={{height:width>576?"18%":"8%",
         //backgroundColor:"#ff0",
         flexDirection:"row-reverse",borderBottomWidth:2,
         borderBottomColor:"#0ff"
         }}>
         <TouchableOpacity>
       <FontAwesome style={[s` mt-3` ,{padding: 5,marginHorizontal:"3%",} ]} name="bars" size={28} color="#4D1BB8" />
        </TouchableOpacity>

        </View> 
        <View style={{height:width>576?"80%":"90%",
        //backgroundColor:"#0f0"
      }}>
        

  
         <View style={{height:width>576?"15%":"20%",
         //backgroundColor:"#f0f",
         justifyContent:"center",alignItems:"center"}}>
        <Text    style={s` text-gray-900  text-center text-3xl font-bold`}>
دریافت شماره موبایل     </Text> 
        </View>  




        <View style={[{height:width>576?"75%":"50%",width:(Dimensions.get("window").width/100)*90,alignSelf:"center",borderWidth:3,
        borderColor:"#4E1BBC",
        borderRadius:20,
        alignItems:"center",justifyContent:"flex-start"},s` bg-white mt-5  `]}>
         

         <View
 
 
 style={{width:"100%",flexDirection:'column',
 justifyContent:'center',
        height:Dimensions.get("screen").width>576?"25%":"25%",
       alignItems:'center', 
     //  backgroundColor: "#0ff",
       }}
 >

         <Text    style={s` text-gray-500    text-center text-xl font-bold`}>
شماره موبایل خود را وارد کنید</Text> 
 
</View>

         <Formik 
                              validationSchema={validation} 
                              initialValues={{phone: ''}}
                    onSubmit={(values, {setSubmitting}) => {

                      fetch('https://mahsaonlin.com/admin/guest/register/get-mobile',{
                         method:'post',
                         headers: {
                         Accept: 'application/json',
                         'Content-Type': 'application/json',

                          },
                                           body: JSON.stringify({
                                             mobile:values.phone
                                                }) 

                           }).then(response=>response.json()).then(response=>{
                               console.log("mmmmmmmmmmm",response)
                                     if (response.error === false){
                                        setphone(values.phone)
                                      navigation.navigate('code',{phone:values.phone})

                    }else {
                        seterr(response.message)
                    }

                })


                setSubmitting(false)
            }}>
                {({
                      handleChange,
                      handleBlur,
                      values,
                      handleSubmit,
                      errors

                  }) => <>
 <View
 
 
 style={{width:"100%",flexDirection:'column',
 justifyContent:'center',
        height:Dimensions.get("screen").width>576?"75%":"75%",
       alignItems:'center', 
     //  backgroundColor: "#f0f",
      // borderRadius:20
       }}
 >
 
 
     <TextInput
                            value={values.phone}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            placeholder="09--------"
                            placeholderTextColor="#3f3f46"
                           // keyboardType="numeric"
                            
    style={[{width:width>576?"70%":"70%",backgroundColor:"#fff",borderWidth:2,borderColor:"#0ff",
      marginBottom:width>576?5:2,
  
  
  
  },s`  rounded-2xl 
     text-center
                            `]}
                            />
                
 {/* {(errors.phone) && <Text  
                style={{color:"#f00",fontFamily:"vazir",
                fontSize:14,}} >{errors.phone}</Text>}  */}
              <Text style={{color:"#000",fontFamily:"vazir",color:"#f00",fontSize:14
           
            }}>{err}</Text> 
           
               
               

               <TouchableOpacity  
               onPress={handleSubmit}
               style={[s`py-3  rounded-2xl `,{width:width>576?"60%":"60%",backgroundColor:"#0f0",}]}>
                <Text style={[s`  font-bold text-center  `,{fontSize:RFValue(28),color:"#f3f3f3"}]}>ثبت
                    </Text>
               </TouchableOpacity>

               </View>
 </>}

   </Formik>
 
            
           
            
        </View>









      </View> 
      </View>
      

     )
}






const styles=StyleSheet.create({

    p:{
        borderTopRightRadius:50,
        borderTopLeftRadius:50
    },


    container:{
      flex:1,
      //backgroundColor: "#070125",
      backgroundColor: "#2D2B32",
  },
  body:{
    position:'relative',
   top:'2%',
   zIndex:2,
   borderBottomLeftRadius:14,
   borderBottomRightRadius:14,
   backgroundColor: "#2D2B32",
  },  
     
  parentinput:{
    alignItems:"center",
    //backgroundColor:"pink",
  
     
   height:(Dimensions.get('window').height/100)*18,
  },
  textname:{
    marginBottom:6,
         color:'white',
         fontSize:RFValue(12),
         fontFamily:'vazir'
     },
  textinput:{
    // width:"100%",
    color:"white",
    fontSize:24,
    width:"90%",
    padding:10,
    
    backgroundColor:"#54506B",
    borderWidth:1,
    borderColor:"#fff",
    borderRadius:10,
  },  
  line: {
    //width: '90%',
    width:Dimensions.get('window'). width>576?"90%":"70%",
    borderWidth: 1,
    borderColor: "#662d5c",
    alignSelf: 'center',
    marginTop:5,
    marginBottom:5,
  
  },   
  
  
   parentsubmit: {
  
      borderWidth: 1,
      borderColor: '#6efff0',
      width: '80%',
      alignSelf: 'center',
      borderRadius: 34,
      height: Dimensions.get('window').width > 576 ? 45 :45,
    // height: (Dimensions.get('window').height/100)*8,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:'3%',
    //marginTop:'2%',
  },
  submit: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  
  textsubmit: {
      color: '#00f7ff',
      fontSize: RFValue(25),
      width: '85%',
      textAlign: 'center',
      paddingLeft: '8%',
      fontFamily:'vazir'
  },
  errback:{
    alignSelf: 'center',
    color: 'red',
    fontSize: RFValue(14),
    fontFamily:'BYekan.ttf',
  },
  })

export {Login}









///////////////////////////////////////////


